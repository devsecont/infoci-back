module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return  queryInterface.createTable('tomada_contas', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        form_id: {
          type: Sequelize.INTEGER,
          references: { model: 'formularios', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        tomadaContasEspecialIdNumRegistro: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'tomada_contas_especial_id_num_registro',
        },
        tomadaContasEspecialCodigoUnidadeGestora: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'tomada_contas_especial_codigo_unidade_gestora',
        },
        tomadaContasEspecialTipoTce: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'tomada_contas_especial_tipo_tce',
        },
        tomadaContasEspecialProcesso: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'tomada_contas_especial_processo',
        },
        tomadaContasEspecialAnoProcesso: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'tomada_contas_especial_ano_processo',
        },
        tomadaContasEspecialFatoMotivo: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'tomada_contas_especial_fato_motivo',
        },
        tomadaContasEspecialDataCiencia: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'tomada_contas_especial_data_ciencia',
        },
        tomadaContasEspecialDataInstauracao: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'tomada_contas_especial_data_instauracao',
        },
        tomadaContasEspecialDataEnvioTribunalContas: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'tomada_contas_especial_data_envio_tribunal_contas',
        },
        tomadaContasEspecialValorDebito: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'tomada_contas_especial_valor_debito',
        },
        tomadaContasEspecialSituacaoEm31do12InstauradaUg: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'tomada_contas_especial_situacao_em31do12_instaurada_ug',
        },
        tomadaContasEspecialSituacaoEm31do12EnviadaTcees: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'tomada_contas_especial_situacao_em31do12_enviada_tcees',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: queryInterface => {
 
      return queryInterface.dropTable('tomada_contas');
   
  }
};
