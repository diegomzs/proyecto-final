const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
nombre: {
type: String,
required: true
},
apellido: {
type: String,
required: true
},
documento: {
type: String,
required: true
},
residencia: {
type: String,
required: true
},
email: {
type: String,
required: true
},
usuario: {
type: String,
required: true
},
createAt: {
type: Date,
default: Date.now()
}
});

module.exports = mongoose.model('Product', ProductSchema);