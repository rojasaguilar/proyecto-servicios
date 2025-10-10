const cds = require('@sap/cds');

const ZPRODUCTS_FILES              = require('../models/mongodb/ztproducts_files');
const ZPRODUCTS               = require('../models/mongodb/ztproducts');

const { registerZTProductsCRUD } = require('../services/crud.service');

class productCatalogController extends cds.ApplicationService {
  async init() {
    const {
      ZPRODUCTS_FILES, ZPRODUCTS
    } = this.entities;

    const unique = (Model, whereFn, msg) => async (req) => {
      const w = whereFn?.(req); if (!w) return;
      const found = await Model.findOne(w);
      if (found) req.reject(409, msg);
    };
    registerZTProductsCRUD(this, ZPRODUCTS_FILES,ZPRODUCTS_FILES,{
      uniqueCheck: unique(ZPRODUCTS_FILES, req => ({ filename: req.data.filename }), 'filename debe ser único')
    });
    registerZTProductsCRUD(this, ZPRODUCTS,ZPRODUCTS,{
      uniqueCheck: unique(ZPRODUCTS, req => ({ skuid: req.data.skuid }), 'skuid debe ser único')
    });
    return super.init();
  }
}

module.exports = productCatalogController;
