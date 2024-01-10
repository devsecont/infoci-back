import Sequelize, { Model } from 'sequelize'

class TomadaContas extends Model {
  static init(sequelize) {
    super.init(
      {
        tomadaContasEspecialIdNumRegistro: Sequelize.STRING,
        tomadaContasEspecialExisteTceInstaurada: Sequelize.STRING,
        tomadaContasEspecialCodigoUnidadeGestora: Sequelize.STRING,
        tomadaContasEspecialTipoTce: Sequelize.STRING,
        tomadaContasEspecialProcesso: Sequelize.STRING,
        tomadaContasEspecialAnoProcesso: Sequelize.STRING,
        tomadaContasEspecialFatoMotivo: Sequelize.STRING,
        tomadaContasEspecialDataCiencia: Sequelize.STRING,
        tomadaContasEspecialDataInstauracao: Sequelize.STRING,
        tomadaContasEspecialDataEnvioTribunalContas: Sequelize.STRING,
        tomadaContasEspecialValorDebito: Sequelize.STRING,
        tomadaContasEspecialSituacaoEm31do12InstauradaUg: Sequelize.STRING,
        tomadaContasEspecialSituacaoEm31do12EnviadaTcees: Sequelize.STRING,
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

export default TomadaContas;
