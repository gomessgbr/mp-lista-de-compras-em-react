import { IPurchaseList } from "../data/listOfItens";
import { Item } from "./item";

export interface IList {
  itens: IPurchaseList[];
  onDelete: (itemId: string, isPurchased: boolean) =>void;
  onMarked: (itemId:string) =>void
}
export function List({ itens, onMarked, onDelete }: IList) {
  return (
    <section className="mt-10 space-y-3 ">
      {itens.map((item) => (
        <Item key={item.id} item={item} onAction={{onMarked, onDelete}}  />
      ))}
    </section>
  );
}
