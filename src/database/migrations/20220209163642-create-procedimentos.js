module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return  queryInterface.createTable('procedimentos', {
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
        procedimentosIdNumRegistro: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'procedimentos_id_num_registro',
        },
        procedimentosNivelControleInterno: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'procedimentos_nivel_controle_interno',
        },
        procedimentosCodigoUnidadeGestora: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'procedimentos_codigo_unidade_gestora',
        },
        procedimentosCodigoProcedimento: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'procedimentos_codigo_procedimento',
        },
        procedimentosTipoPontoControle: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'procedimentos_tipo_ponto_controle',
        },
        procedimentosUniversoAnalisado: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'procedimentos_universo_analisado',
        },
        procedimentosAmostraSelecionada: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'procedimentos_amostra_selecionada',
        },
        procedimentosUnidadeAmostraSelecionada: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'procedimentos_unidade_amostra_selecionada',
        },
        procedimentosDescricaoAmostraSelecionada: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'procedimentos_descricao_amostra_selecionada',
        },
        procedimentosDescricaoAnalise: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'procedimentos_descricao_analise',
        },
        procedimentosTipoProcedimentoAnalisado: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'procedimentos_tipo_procedimento_analisado',
        },
        procedimentosSituacaoAnalise: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'procedimentos_situacao_analise',
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
 
      return queryInterface.dropTable('procedimentos');
   
  }
};
