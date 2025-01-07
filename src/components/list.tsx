import { IPurchaseList } from "../data/listOfItens";
import { Item } from "./item";

interface IList {
  itens: IPurchaseList[];
}
export function List({ itens }: IList) {
  return (
    <section className="mt-10 space-y-3 ">
      {itens.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
}
