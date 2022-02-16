module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return  queryInterface.createTable('estruturas', {
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
        estruturaInicialIdNumRegistro: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'estrutura_inicial_id_num_registro',
        },
        estruturaInicialNivelControleInterno: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'estrutura_inicial_nivel_controle_interno',
        },
        estruturaInicialQuantidadeTotalServidores: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'estrutura_inicial_quantidade_total_servidores',
          
        },
        estruturaInicialQuantidadeServidoresEfetivos: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'estrutura_inicial_quantidade_servidores_efetivos',
        },
        estruturaInicialQuantidadeContadores: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'estrutura_inicial_quantidade_contadores',
        },
        estruturaInicialNormaInternaGestaoOrcamentaria: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'estrutura_inicial_norma_interna_gestao_orcamentaria',
        },
        estruturaInicialNormaInternaGestaoFinanceira: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'estrutura_inicial_norma_interna_gestao_financeira',
        },
        estruturaInicialNormaInternaGestaoPatrimonial: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'estrutura_inicial_norma_interna_gestao_patrimonial',

        },
        estruturaInicialNormaInternaGestaoFiscal: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'estrutura_inicial_norma_interna_gestao_fiscal',
        },
        estruturaInicialNormaInternaDemContabeis: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          field: 'estrutura_inicial_norma_interna_dem_contabeis',
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
 
      return queryInterface.dropTable('estruturas');
   
  }
};
