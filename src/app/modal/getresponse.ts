import { ICustomer } from './customer';

export interface GetResponse {
    _embedded: {
        customers: ICustomer[];
        _links: {self: {href: string}};
    };
}
