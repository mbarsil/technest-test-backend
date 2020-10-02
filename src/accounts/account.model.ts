export interface Account {
  id: number;
  name: string;
  category: string;
  tag: string;
  balance: number;
  availableBalance: number;
}

export interface ExchangeRate {
  rate: number;
}