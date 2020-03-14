const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'rivasgames.mysql',
    user: 'rivasgames_mysql',
    database: 'rivasgames_cango',
    password: 'Ae4K_hop'
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;