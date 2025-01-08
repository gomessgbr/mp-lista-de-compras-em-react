import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("purchase list", () => {
  it("should add item on list", async () => {
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

  it("should check item when click it", async () => {
    render(<App />);
    // Obtém as listas pelo data-testid
    const unMarkedList = screen.getByTestId("unmarked-list");
    const markedList = screen.getByTestId("marked-list");

    // Obtém o botão de "check"
    const markedButtons = screen.getAllByAltText("botão de check");

    // Verifica que o item está inicialmente na lista "não marcada"
    expect(unMarkedList).toHaveTextContent("Leite");
    expect(markedList).not.toHaveTextContent("Leite");

    // Clica no botão de "check" do primeiro item
    fireEvent.click(markedButtons[0]);

    // Verifica que o item foi removido da lista "não marcada"
    expect(unMarkedList).not.toHaveTextContent("Leite");

    // Verifica que o item foi adicionado à lista "marcada"
    expect(markedList).toHaveTextContent("Leite");
  });
});
