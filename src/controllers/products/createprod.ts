import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { IProductRequestObject } from '@modules/product/model';
import { prodService } from '@services/index';

/**
 * This function is used to create a new product
 * @param req
 * @param res
 */
export const createProduct = controller(async (req: Request, res: Response): Promise<void> => {
  const { productDetails }: { productDetails: IProductRequestObject } = req.body;

  // Assuming you have a service to handle product creation
  const newProduct = await prodService.createProduct(productDetails);

  res.status(201).send(newProduct);
});
