module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return  queryInterface.createTable('usuarios', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cpf:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        matricula:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        cargo:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        email:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        telefone:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        senha:{
          type: Sequelize.STRING,
          allowNull: false,
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
 
      return queryInterface.dropTable('usuarios');
   
  }
};
