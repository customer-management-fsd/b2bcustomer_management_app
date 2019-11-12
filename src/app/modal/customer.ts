import { IAddress } from './address';
import { IOrders } from './orders';

export interface ICustomer {
    customerId: number;
        customerFirstName: string;
        customerLastName: string;
        address: IAddress[];
        orders: IOrders[];
        imageUrl: string;
}
