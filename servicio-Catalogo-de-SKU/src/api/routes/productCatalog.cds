using  mp  from '../models/schema.cds';

@impl: '/src/api/services/crud.service.js'

service productCatalog {
entity ZTPRODUCTS as projection on mp.ZTPRODUCTS;
entity ZTPRODUCTS_FILES as projection on mp.ZTPRODUCTS_FILES;
}

