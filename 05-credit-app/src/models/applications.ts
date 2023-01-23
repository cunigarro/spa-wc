export interface Application {
  id: number;
  name: string;
  amount: number;
  payed: boolean;
}

export interface CreditApplication {
  applications: Application[];
}
