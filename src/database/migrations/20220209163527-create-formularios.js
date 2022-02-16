module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return  queryInterface.createTable('formularios', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: { model: 'usuarios', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
         
        },
        codigoUnidadeGestoraSigefes: {
          type: Sequelize.STRING,
          allowNull: false,
          field:'codigo_unidade_gestora_sigefes',
        },
        codigoUnidadeGestoraCidades: {
          type: Sequelize.STRING,
          allowNull: false,
          field:'codigo_unidade_gestora_cidades',
        },
        nomeUnidadeGestora: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'nome_unidade_gestora',
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
 
      return queryInterface.dropTable('formularios');
   
  }
};
