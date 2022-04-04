const mysql = require('mysql2/promise');
import keys from './keys';
const pool = mysql.createPool(keys.database);
mysql.createConnection(keys.database)
pool.getConnection();
export default pool;