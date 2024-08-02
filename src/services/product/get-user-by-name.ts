import mongoose from 'mongoose';
import userModel from '@modules/product/schema';
import { IUser } from '@modules/product/model';

export const getuserbyname = async (pname: string): Promise<IUser | null> => {
  const condition = {
    _pname: mongoose.Types.ObjectId(pname),
  };
  const selection = {
    //_id: 1,
    pname: 1,
    type: 1,
  };
  const productDetails = await userModel.findOne(condition, selection);
  return productDetails;
};
