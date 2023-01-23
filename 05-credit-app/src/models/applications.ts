export interface Application {
  id: number;
  name: string;
  amount: number;
  payed: boolean;
  detail: ApplicationDetail
}

export interface ApplicationDetail {
  payCapacity: number;
  paymentMethods: string[];
}
