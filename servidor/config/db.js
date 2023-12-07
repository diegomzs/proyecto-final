const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
require('dotenv').config({ path: 'variables.env' });

const DBconnect = async () => {

try {

await mongoose.connect(process.env.DB_MONGO, {
})
console.log('BD Conectada');

} catch (error) {
console.log(error);
process.exit(1); // Detenemos la app
}

}

module.exports = DBconnect