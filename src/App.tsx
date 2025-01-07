import logo from "./assets/logo.svg";
import { List } from "./components/list";
import { IPurchaseList, purchaseList } from "./data/listOfItens";
import { FormEvent, useId, useState } from "react";

function App() {
  const id = useId();
  const [toBuy, setToBuy] = useState<IPurchaseList[]>(purchaseList);
  const [purchasedItems, setPurchasedItems] = useState<IPurchaseList[]>([]);


  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    const name = formData.get("name") as string;
    const quantity = formData.get("quantity") as string;

    const newItem: IPurchaseList = {
      id: (purchaseList[purchaseList.length - 1].id + 1).toString(),
      item: name,
      amount: quantity,
      purchased: false,
    };
    setToBuy([...toBuy, newItem]);
  }

  function addPurchaseItem (){
    setPurchasedItems([])
  }
  return (
    <main className="max-w-2xl px-6 py-12 pb-20 mx-auto my-10 bg-white md:my-20 md:px-32 md:rounded-3xl">
      <header className="text-center">
        <img src={logo} alt="logotipo" className="mx-auto" />
        <h1 className="mt-4 text-3xl font-medium font-display">
          Lista de Compras
        </h1>
        <p className="text-sm text-slate-500">
          Facilite sua ida ao supermercado!
        </p>
        <hr className="w-1/3 mx-auto mt-6 mb-8" />
      </header>
      <form className="flex gap-2" onSubmit={handleSubmit} id={id}>
        <div className="flex-shrink">
          <label htmlFor="name" className="block text-xs text-slate-400">
            Item
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
            data-testid="name"
          />
        </div>
        <div className="flex-shrink">
          <label htmlFor="quantity" className="block text-xs text-slate-400">
            Quantidade
          </label>
          <input
            type="text"
            name="quantity"
            id="quantity"
            className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
          />
        </div>
        <button
          form={id}
          className="self-end flex-shrink h-10 px-4 font-extrabold text-white rounded-lg bg-fuchsia-300"
          data-testid="button-add"
        >
          +
        </button>
      </form>
      <List itens={toBuy} />
      <section className="mt-16 space-y-3">
        <h2 className="mb-10 text-3xl text-center font-display">
          Itens já comprados
        </h2>
        <List itens={purchasedItems} />
      </section>
    </main>
  );
}

export default App;
