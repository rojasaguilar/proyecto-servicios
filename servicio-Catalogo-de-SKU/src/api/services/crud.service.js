
const mapOut = (doc) => {
  const o = doc?.toObject ? doc.toObject() : doc;
  const { _id, __v, ...rest } = o || {};
  return { ID: _id?.toString?.(), ...rest };
};

const mapIn = (data) => {
  const { ID, ...rest } = data || {};
  return rest;
};

function registerZTProductsCRUD(srv, cdsEntity) {
  srv.on('READ', cdsEntity, async (req) => {
    if (req.data.ID) {
      const doc = await ZTProductsModel.findById(req.data.ID);
      return doc ? [mapOut(doc)] : [];
    }

    const top = Number(req._query?.$top ?? 0);
    const skip = Number(req._query?.$skip ?? 0);
    let query = ZTProductsModel.find();

    if (skip) query = query.skip(skip);
    if (top) query = query.limit(top);

    const docs = await query;
    return docs.map(mapOut);
  });

  srv.on('CREATE', cdsEntity, async (req) => {
    const created = await ZTProductsModel.create(mapIn(req.data));
    return mapOut(created);
  });

  srv.on('UPDATE', cdsEntity, async (req) => {
    if (!req.data.ID) req.reject(400, 'ID requerido');
    const updated = await ZTProductsModel.findByIdAndUpdate(
      req.data.ID,
      mapIn(req.data),
      { new: true, runValidators: true }
    );
    if (!updated) req.reject(404, 'No encontrado');
    return mapOut(updated);
  });

  srv.on('DELETE', cdsEntity, async (req) => {
    const ok = await ZTProductsModel.findByIdAndDelete(req.data.ID);
    if (!ok) req.reject(404, 'No encontrado');
  });
}

module.exports = { registerZTProductsCRUD };
