const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;


async function main() {
    try {
      

        mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@welberdatatabase.776qxzb.mongodb.net/test?retryWrites=true&w=majority`)
        console.log('MongoDB Conectado a projetos!')

        
        
    } catch (error) {
        console.error(`error`, error);
    }
}


module.exports = main;