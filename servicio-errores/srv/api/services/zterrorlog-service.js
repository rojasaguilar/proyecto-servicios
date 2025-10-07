import zterrorlog from '../models/mongodb/zterrorlog.js';

const GetAllErrors = async () => {
  try {
    const errors = await zterrorlog.find().lean();
    return JSON.stringify({
      status: 200,
      results: errors.length,
      data: errors,
    });
  } catch (error) {
    throw Error(300, error);
  }
};

const InsertOneError = async (error) => {
  try {
    const newError = await zterrorlog.insertOne(error);
    console.log(newError);
    return JSON.stringify({
      status: 201,
      message: 'Error inserted sucessfully',
      data: newError,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default {
  GetAllErrors,
  InsertOneError,
};
