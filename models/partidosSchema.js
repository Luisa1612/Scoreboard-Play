const mongoose = require("mongoose");

//Establecer Schema (esquema)
const partidosSchema = mongoose.Schema({
  partido: {
    type: String,
    required: true,
    trim: true,
  },
  
  actualizado_en: {
    type: Date, 
    default: Date.now
},

});

module.exports = mongoose.model("partidos", partidosSchema);
