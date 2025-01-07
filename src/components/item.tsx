import { IPurchaseList } from "../data/listOfItens";
import trash from "../assets/trash.svg";
import done from "../assets/done.svg";
import todo from "../assets/todo.svg";

interface IItem {
  item: IPurchaseList;
}

export function Item({ item }: IItem) {
  return (
    <>
      <article className="flex w-full gap-4" >
        <img src={item.purchased ? done : todo} alt="#" />
        <div className="flex-1">
          <p className={`${item.purchased && 'line-through'}`}>{item.item}</p>
          <p className={`${item.purchased && 'line-through'} text-sm text-slate-400`}>{item.amount}</p>
        </div>
        <img src={trash} alt="ícone de lixeira" className="justify-self-end" />
      </article>
      <hr />
    </>
  );
}
