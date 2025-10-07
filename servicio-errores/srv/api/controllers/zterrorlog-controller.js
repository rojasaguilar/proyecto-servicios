import cds from '@sap/cds';
import zterrorlogService from '../services/zterrorlog-service.js';

class ErrorClass extends cds.ApplicationService {
  async init() {
    this.on('getall', async (req) => {
      return zterrorlogService.GetAllErrors();
    });

    this.on('addOne', async (req) => {
      const newError = req.data.error;
      const result = await zterrorlogService.InsertOneError(newError);
      if (result) {
        req._.res.statusCode = 201;
      }
      return result;
    });
  }
}

export default ErrorClass;
