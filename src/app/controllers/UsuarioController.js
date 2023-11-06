import * as Yup from 'yup'
import { Op }  from 'sequelize'

import Usuario from '../models/Usuario'

class UsuarioController {
  async store(req, res) {
    const schema = Yup.object().shape({
     
        nome: Yup.string().required(),
        cpf: Yup.string(),
        matricula:Yup.string(),
        cargo:Yup.string(),
        email:Yup.string().email().required(),
        telefone:Yup.string(),
        senha:Yup.string().required().min(6),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação.' })
    }

    const userExists = await Usuario.findOne({
      where:{
        [Op.or]: [
          { email: req.body.email },
          { cpf: req.body.cpf},
        ] 
      },
    })

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe.' })
    }

    const { id, nome, matricula, cargo, email, telefone } = await Usuario.create(req.body)

    return res.json({
      id,
      nome,
      email,
      matricula,
      cargo,
      email,
      telefone,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      cpf: Yup.string(),
      matricula:Yup.string(),
      cargo:Yup.string(),
      email:Yup.string().email().required(),
      telefone:Yup.string(),
      senhaAntiga:Yup.string().min(6),
      senha: Yup.string()
        .min(6)
        .when('senhaAntiga', (senhaAntiga, field) => 
          senhaAntiga ? field.required() : field
        ),
      confirmaSenha: Yup.string().when('senha', (senha, field) => 
        senha ? field.required().oneOf([Yup.ref('senha')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação.' })
    }

    const { email, senhaAntiga } = req.body

    const user = await Usuario.findByPk(req.userId)

    if (email !== user.email) {
      const userExists = await Usuario.findOne({
        where: { email },
      })

      if (userExists) {
        return res.status(400).json({ error: 'Usuário já existe.' })
      }
    }

    if (senhaAntiga && !(await user.checkPassword(senhaAntiga))) {
      return res.status(401).json({ error: 'Senha inválida.' })
    }

    const { id, nome, matricula, cargo, telefone } = await user.update(req.body)

    return res.json({
      id,
      nome,
      email,
      matricula,
      cargo,
      email,
      telefone,
    })
  }
}

export default new UsuarioController()
