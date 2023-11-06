import TomadaContas from '../models/TomadaContas'
import Formulario from '../models/Formulario'

class TomadaContasController {
  async index(req, res) {
    const { form_id } = req.params

    const formExists = await Formulario.findByPk(form_id)

    if (!formExists) {
      return res.status(400).json({ error: 'Formulário não existe.' })
    }

    if (formExists.user_id !== req.userId) {
      return res.status(401).json({ error: 'O formulário não pertence a este usuário.' })
    }

    const tomadaContasInfo = await TomadaContas.findAll({
      where: { form_id },
    })
    return res.json(tomadaContasInfo)
  }

  async store(req, res) {
    const { form_id } = req.params

    const formExists = await Formulario.findByPk(form_id)

    if (!formExists) {
      return res.status(400).json({ error: 'Formulário não existe.' })
    }

    if (formExists.user_id !== req.userId) {
      return res.status(401).json({ error: 'O formulário não pertence a este usuário.' })
    }

    const tomadaContasInfo = await TomadaContas.create({
      form_id,
      ...req.body,
    })

    return res.json(tomadaContasInfo)
  }

  async update(req, res) {
    const { form_id, tomadaContas_id } = req.params

    const formExists = await Formulario.findByPk(form_id)

    if (!formExists) {
      return res.status(400).json({ error: 'Formulário não existe.' })
    }

    if (formExists.user_id !== req.userId) {
      return res.status(401).json({ error: 'O formulário não pertence a este usuário.' })
    }

    const tomadaContas = await TomadaContas.findByPk(tomadaContas_id)

    if (!tomadaContas) {
      return res.status(400).json({ error: 'Tomada de Contas não existe.' })
    }

    if (tomadaContas.form_id !== formExists.id) {
      return res.status(401).json({
        error: 'A Tomada de Contas não pertence a este formulário.',
      })
    }

    await tomadaContas.update(req.body)

    return res.json(tomadaContas)
  }

  async delete(req, res) {
    const { form_id, tomadaContas_id } = req.params

    const formExists = await Formulario.findByPk(form_id)

    if (!formExists) {
      return res.status(400).json({ error: 'Formulário não existe.' })
    }

    if (formExists.user_id !== req.userId) {
      return res.status(401).json({ error: 'O formulário não pertence a este usuário.' })
    }

    const tomadaContas = await TomadaContas.findByPk(tomadaContas_id)

    if (!tomadaContas) {
      return res.status(400).json({ error: 'Tomada de Contas não existe.' })
    }

    if (tomadaContas.form_id !== formExists.id) {
      return res.status(401).json({
        error: 'A Tomada de Contas não pertence a este formulário.',
      })
    }

    await tomadaContas.destroy()

    return res.send();
  }
}

export default new TomadaContasController()
