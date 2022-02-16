import Procedimento from '../models/Procedimento'
import Formulario from '../models/Formulario'

class ProcedimentoController {
  async index(req, res) {
    const { form_id } = req.params

    const formExists = await Formulario.findByPk(form_id)

    if (!formExists) {
      return res.status(400).json({ error: 'Formulário não existe.' })
    }

    if (formExists.user_id !== req.userId) {
      return res.status(401).json({ error: 'O formulário não pertence a este usuário.' })
    }

    const procedimentoInfo = await Procedimento.findAll({
      where: { form_id },
    })
    return res.json(procedimentoInfo)
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

    const procedimentoInfo = await Procedimento.create({
      form_id,
      ...req.body,
    })

    return res.json(procedimentoInfo)
  }

  async update(req, res) {
    const { form_id, procedimento_id } = req.params

    const formExists = await Formulario.findByPk(form_id)

    if (!formExists) {
      return res.status(400).json({ error: 'Formulário não existe.' })
    }

    if (formExists.user_id !== req.userId) {
      return res.status(401).json({ error: 'O formulário não pertence a este usuário.' })
    }

    const procedimento = await Procedimento.findByPk(procedimento_id)

    if (!procedimento) {
      return res.status(400).json({ error: 'Procedimento não existe.' })
    }

    if (procedimento.form_id !== formExists.id) {
      return res.status(401).json({
        error: 'O Procedimento não pertence a este formulário.',
      })
    }

    await procedimento.update(req.body)

    return res.json(procedimento)
  }

  async delete(req, res) {
    const { form_id, procedimento_id } = req.params

    const formExists = await Formulario.findByPk(form_id)

    if (!formExists) {
      return res.status(400).json({ error: 'Formulário não existe.' })
    }

    if (formExists.user_id !== req.userId) {
      return res.status(401).json({ error: 'O formulário não pertence a este usuário.' })
    }

    const procedimento = await Procedimento.findByPk(procedimento_id)

    if (!procedimento) {
      return res.status(400).json({ error: 'Procedimento não existe.' })
    }

    if (procedimento.form_id !== formExists.id) {
      return res.status(401).json({
        error: 'O Procedimento não pertence a este formulário.',
      })
    }

    await procedimento.destroy()

    return res.send();
  }
}

export default new ProcedimentoController()
