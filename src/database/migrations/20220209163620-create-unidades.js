module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return  queryInterface.createTable('unidades', {
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
        unidadeGestoraIdNumRegistro: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'unidade_gestora_id_num_registro',
        },
        unidadeGestoraNivelControleInterno: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'unidade_gestora_nivel_controle_interno',
        },
        unidadeGestoraCodigoUnidadeGestora: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'unidade_gestora_codigo_unidade_gestora',
        },
        unidadeGestoraOpiniaoPrestacaoContasControleInterno: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'unidade_gestora_opiniao_prestacao_contas_controle_interno',
        },
        unidadeGestoraFatoRelevanteRelaci: {
          type: Sequelize.NUMBER,
          allowNull: false,
          defaultValue: "",
          field: 'unidade_gestora_fato_relevante_relaci',
        },
        unidadeGestoraAssuntoPrincipalFatoRelevanteRelaci: {
          type: Sequelize.NUMBER,
          allowNull: false,
          defaultValue: "",
          field: 'unidade_gestora_assunto_principal_fato_relevante_relaci',
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
 
      return queryInterface.dropTable('unidades');
   
  }
};
