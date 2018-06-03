import * as Sequelize from 'sequelize';
import { name, port, rootPassword } from './config';

const db = new Sequelize(name, 'root', rootPassword, {
  host            : `localhost`,
  dialect         : 'mysql',//'mysql'|'sqlite'|'postgres'|'mssql'
  operatorsAliases: false,
  pool            : {
    max    : 5,
    min    : 0,
    acquire: 30000,
    idle   : 10000
  },
});
// db.authenticate()
  // .then(() => {
  //   console.log('Connection has been established successfully.');
  // });
  // .catch(err => {
  //   console.error('Unable to connect to the database:', err);
  // });



export default db;