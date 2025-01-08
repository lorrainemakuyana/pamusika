export interface IUser {
  uid: string;
  name: string;
  email: string;
  createdAt: number;
}

export interface IService {
  id: string;
  ownerId: string;
  name: string;
  description: string;
  price: number;
  createdAt: number;
  updatedAt: number;
}

export interface IOrder {
  id: string;
  serviceProviderId: string;
  customerId: string;
  createdAt: number;
  price: string;
}

export interface IServiceReview {
    id: string;
    serviceId: string;
    customerId: string;
    rating: number;
    comment: string;
}