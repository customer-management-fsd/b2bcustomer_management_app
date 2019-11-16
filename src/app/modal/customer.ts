
import { IOrders } from './orders';

export interface ICustomer {
    customerId: number;
        customerFirstName: string;
        customerLastName: string;
        state: string;
        country: string;
        latitude: number;
        longitude: number;
        imageUrl: string;
        orders: IOrders[];
}
