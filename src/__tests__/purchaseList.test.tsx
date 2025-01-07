import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("purchase list", () => {
  it("should add item on list", async() => {
    render(<App />);
    // Seleciona os inputs e o botão
    const itemInput = screen.getByTestId("name");
    const quantityInput = screen.getByLabelText("Quantidade");
    const addButton = screen.getByTestId("button-add");

    // Preenche os valores nos inputs
    fireEvent.change(itemInput, { target: { value: "Novo Item" } });
    fireEvent.change(quantityInput, { target: { value: "2 unidades" } });

    // Clica no botão de adicionar
    fireEvent.click(addButton);

    // Verifica se o novo item aparece na lista
    const newItem = await screen.findByText("Novo Item");
    expect(newItem).toBeTruthy();
  });
});
