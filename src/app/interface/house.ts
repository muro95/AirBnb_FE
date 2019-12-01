import {CategoryHouse} from './category-house';

export interface House {
  // success: boolean;
  // message: string;
  // data: {
  //   id: string,
  //   name: string;
  //   catName: string;
  //   userName: string;
  //   userId: string;
  // };
  id?: string;
  houseName: string;
  categoryHouse?: CategoryHouse;
  address: string;
  bedroomNumber: string;
  bathroomNumber: string;
  description: string;
  price: string;
  area: string;

}
