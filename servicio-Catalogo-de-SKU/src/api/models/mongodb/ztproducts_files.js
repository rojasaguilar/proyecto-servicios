const mongoose = require('mongoose');

module.exports = mongoose.models.ZTPRODUCTS_FILES || mongoose.model('ZTPRODUCTS_FILES', new mongoose.Schema({
  SKUID: { type: Number, required: true },
  FILEID: { type: Number, required: true },
  FILETYPE: { type: String, required: true },
  FILE: { type: String, required: true },
  PRINCIPAL: { type: Boolean, default: false },
  SEQUENCE: { type: Number, default: 0 },
  INFOAD: { type: String },
  REGUSER: { type: String },
  REGDATE: { type: Date },
  REGTIME: { type: String },
  MODUSER: { type: String },
  MODDATE: { type: Date },
  MODTIME: { type: String },
  ACTIVED: { type: Boolean, default: true },
  DELETED: { type: Boolean, default: false }
}, { _id: false }));
