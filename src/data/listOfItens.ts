export interface IPurchaseList {
  id: string;
  item: string;
  amount: string;
  purchased: boolean;
}

export const purchaseList: IPurchaseList[] = [
  {
    id: "1234",
    item: "Leite",
    amount: "3 caixas",
    purchased: false,
  },
  {
    id: "1235",
    item: "Maça",
    amount: "500g",
    purchased: false,
  },
  {
    id: "1236",
    item: "leite",
    amount: "500g",
    purchased: false,
  },
  {
    id: "1237",
    item: "leite",
    amount: "500g",
    purchased: true,
  },
];
