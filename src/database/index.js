import Sequelize from 'sequelize'
import databaseConfig from '../config/database'

import Usuario from '../app/models/Usuario'
import Formulario from '../app/models/Formulario'
import Estrutura from '../app/models/Estrutura';
import Unidade from '../app/models/Unidade';
import Procedimento from '../app/models/Procedimento';
import TomadaContas from '../app/models/TomadaContas';

const models = [Usuario,Formulario, Estrutura, Unidade, Procedimento, TomadaContas];

class Database {
  constructor() {
    this.init();
  }

  init() {
    //Conexão do banco de dados com os Models
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
