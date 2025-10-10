const mongoose = require('mongoose');

module.exports = mongoose.models.ZTPRODUCTS || mongoose.model('ZTPRODUCTS', new mongoose.Schema({
  SKUID: { type: Number, required: true, unique: true },
  DESSKU: { type: String, required: true },
  IDUNIDADMEDIDA: { type: String, required: true },
  BARCODE: { type: String },
  IMAGE: { type: String },
  INFOAD: { type: String },
  REGUSER: { type: String },
  REGDATE: { type: Date },
  REGTIME: { type: String },
  MODUSER: { type: String },
  MODDATE: { type: Date },
  MODTIME: { type: String },
  ACTIVED: { type: Boolean, default: true },
  DELETED: { type: Boolean, default: false }
}));
