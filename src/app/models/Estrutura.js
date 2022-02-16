import Sequelize, { Model } from 'sequelize'

class Estrutura extends Model {
  static init(sequelize) {
    super.init(
      {
        estruturaInicialIdNumRegistro: Sequelize.STRING,
        estruturaInicialNivelControleInterno: Sequelize.STRING,
        estruturaInicialQuantidadeTotalServidores: Sequelize.STRING,
        estruturaInicialQuantidadeServidoresEfetivos: Sequelize.STRING,
        estruturaInicialQuantidadeContadores: Sequelize.STRING,
        estruturaInicialNormaInternaGestaoOrcamentaria: Sequelize.STRING,
        estruturaInicialNormaInternaGestaoFinanceira: Sequelize.STRING,
        estruturaInicialNormaInternaGestaoPatrimonial: Sequelize.STRING,
        estruturaInicialNormaInternaGestaoFiscal: Sequelize.STRING,
        estruturaInicialNormaInternaDemContabeis: Sequelize.STRING,

      },
      {
        sequelize,
      },
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Formulario, { foreignKey: 'form_id', as: 'form'});
  }
}

export default Estrutura;
