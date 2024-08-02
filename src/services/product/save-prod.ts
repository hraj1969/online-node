import pModel from '@modules/product/schema';
import { ICreateProduct, IUser } from '@modules/product/model';
/**
 * Save new user into db
 * @param productDetails
 */
export const saveProd = async (productDetails: ICreateProduct): Promise<IUser> => {
  const newProduct: IUser = new pModel({
    pname: productDetails.pname,
    ptype: productDetails.ptype,
    color: productDetails.color,
  });

  await newProduct.save();
  return newProduct;
};
