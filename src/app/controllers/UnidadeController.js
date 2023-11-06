import Unidade from '../models/Unidade'
import Formulario from '../models/Formulario'

class UnidadeController {
  async index(req, res) {
    const { form_id } = req.params

    const formExists = await Formulario.findByPk(form_id)

    if (!formExists) {
      return res.status(400).json({ error: 'Formulário não existe.' })
    }

    if (formExists.user_id !== req.userId) {
      return res.status(401).json({ error: 'O formulário não pertence a este usuário.' })
    }

    const UnidadeInfo = await Unidade.findAll({
      where: { form_id },
    })
    return res.json(UnidadeInfo)
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

    const UnidadeInfo = await Unidade.create({
      form_id,
      ...req.body,
    })

    return res.json(UnidadeInfo)
  }

  async update(req, res) {
    const { form_id, unidade_id } = req.params

    const formExists = await Formulario.findByPk(form_id)

    if (!formExists) {
      return res.status(400).json({ error: 'Formulário não existe.' })
    }

    if (formExists.user_id !== req.userId) {
      return res.status(401).json({ error: 'O formulário não pertence a este usuário.' })
    }

    const unidade = await Unidade.findByPk(unidade_id)

    if (!unidade) {
      return res.status(400).json({ error: 'Unidade Gestora não existe.' })
    }

    if (unidade.form_id !== formExists.id) {
      return res.status(401).json({
        error: 'A Unidade Gestora não pertence a este formulário.',
      })
    }

    await unidade.update(req.body)

    return res.json(unidade)
  }

  async delete(req, res) {
    const { form_id, unidade_id } = req.params

    const formExists = await Formulario.findByPk(form_id)

    if (!formExists) {
      return res.status(400).json({ error: 'Formulário não existe.' })
    }

    if (formExists.user_id !== req.userId) {
      return res.status(401).json({ error: 'O formulário não pertence a este usuário.' })
    }

    const unidade = await Unidade.findByPk(unidade_id)

    if (!unidade) {
      return res.status(400).json({ error: 'Unidade Gestora não existe.' })
    }

    if (unidade.form_id !== formExists.id) {
      return res.status(401).json({
        error: 'A Unidade Gestora não pertence a este formulário.',
      })
    }

    await unidade.destroy()

    return res.send();
  }
}

export default new UnidadeController()
