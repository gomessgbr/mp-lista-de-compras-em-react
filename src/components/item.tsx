import { IPurchaseList } from "../data/listOfItens";
import trash from "../assets/trash.svg";
import done from "../assets/done.svg";
import todo from "../assets/todo.svg";
import { IList } from "./list";

interface IItem {
  item: IPurchaseList;
  onAction: Omit<IList, "itens">;
}

export function Item({ item, onAction }: IItem) {
  return (
    <>
      <article className="flex w-full gap-4">
        <img
          src={item.purchased ? done : todo}
          alt="botão de check"
          onClick={() => !item.purchased && onAction.onMarked(item.id)}
        />

        <div className="flex-1">
          <p className={`${item.purchased && "line-through"}`}>{item.item}</p>
          <p
            className={`${
              item.purchased && "line-through"
            } text-sm text-slate-400`}
          >
            {item.amount}
          </p>
        </div>
        <img
          src={trash}
          alt="icone de lixeira"
          className="justify-self-end"
          onClick={() => onAction.onDelete(item.id, item.purchased)}
        />
      </article>
      <hr />
    </>
  );
}
