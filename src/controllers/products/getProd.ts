import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { IProductRequestObject } from '@modules/product/model';

/**
 * This function is used to get logged in user details
 * @param req
 * @param res
 */
export const getCurrentProduct = controller(async (req: Request, res: Response): Promise<void> => {
  const { userDetails }: { userDetails: IProductRequestObject } = req;
  res.status(200).send(userDetails);
});
