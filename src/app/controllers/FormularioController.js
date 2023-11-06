import * as Yup from 'yup';
import { Op }  from 'sequelize'
import Formulario from "../models/Formulario";

class FormularioController {

  async index(req, res) {

    const form = await Formulario.findAll({
      where: { user_id: req.userId},
    })
    return res.json(form);
  }


  async store(req, res) {
    const schema = Yup.object().shape({
     
      codigoUnidadeGestoraSigefes: Yup.string().required(),
      codigoUnidadeGestoraCidades: Yup.string().required(),
      nomeUnidadeGestora: Yup.string().required(), 
  })

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ error: 'Falha na validação.' })
  }

    const { codigoUnidadeGestoraSigefes, codigoUnidadeGestoraCidades, nomeUnidadeGestora}  = req.body;
    

    const formExists = await Formulario.findOne({where:{
      [Op.or]: [
        { codigo_unidade_gestora_sigefes: codigoUnidadeGestoraSigefes },
        { codigo_unidade_gestora_cidades: codigoUnidadeGestoraCidades},
      ] 
    },})

     if(formExists) {
       return res.json({error: "Unidade Gestora já cadastrada."});
     }

    const formInfo = await Formulario.create({
      user_id: req.userId,
      codigoUnidadeGestoraSigefes,
      codigoUnidadeGestoraCidades,
      nomeUnidadeGestora,
    })

    return res.json(formInfo);
  }

  async update(req, res) {

    const { form_id } = req.params;

    const form = await Formulario.findByPk(form_id);

    if(!form) {
      return res.status(400).json({error:"Formulário não existe."})
    }
   
   if(form.user_id !== req.userId) {
    return res.status(401).json({error:"Formulário não existe para esse usuários."})
   }

    await form.update(req.body);
    return res.json(form);
  }
}

export default new FormularioController();