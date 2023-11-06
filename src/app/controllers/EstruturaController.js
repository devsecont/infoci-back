import Estrutura from '../models/Estrutura'
import Formulario from '../models/Formulario'

class EstruturaController {
  async index(req, res) {
    const { form_id } = req.params

    const formExists = await Formulario.findByPk(form_id)

    if (!formExists) {
      return res.status(400).json({ error: 'Formulário não existe.' })
    }

    if (formExists.user_id !== req.userId) {
      return res.status(401).json({ error: 'O formulário não pertence a este usuário.' })
    }

    const estruturaInfo = await Estrutura.findAll({
      where: { form_id },
    })
    return res.json(estruturaInfo)
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

    const estruturaInfo = await Estrutura.create({
      form_id,
      ...req.body,
    })

    return res.json(estruturaInfo)
  }

  async update(req, res) {
    const { form_id, estrutura_id } = req.params

    const formExists = await Formulario.findByPk(form_id)

    if (!formExists) {
      return res.status(400).json({ error: 'Formulário não existe.' })
    }

    if (formExists.user_id !== req.userId) {
      return res.status(401).json({ error: 'O formulário não pertence a este usuário.' })
    }

    const estrutura = await Estrutura.findByPk(estrutura_id)

    if (!estrutura) {
      return res.status(400).json({ error: 'Estrutura Inicial não existe.' })
    }

    if (estrutura.form_id !== formExists.id) {
      return res.status(401).json({
        error: 'A estrutura inicial não pertence a este formulário.',
      })
    }

    await estrutura.update(req.body)

    return res.json(estrutura)
  }

  async delete(req, res) {
    const { form_id, estrutura_id } = req.params

    const formExists = await Formulario.findByPk(form_id)

    if (!formExists) {
      return res.status(400).json({ error: 'Formulário não existe.' })
    }

    if (formExists.user_id !== req.userId) {
      return res.status(401).json({ error: 'O formulário não pertence a este usuário.' })
    }

    const estrutura = await Estrutura.findByPk(estrutura_id)

    if (!estrutura) {
      return res.status(400).json({ error: 'Estrutura Inicial não existe.' })
    }

    if (estrutura.form_id !== formExists.id) {
      return res.status(401).json({
        error: 'A estrutura inicial não pertence a este formulário.',
      })
    }

    await estrutura.destroy()

    return res.send();
  }
}

export default new EstruturaController()
