import React from "react";
import { render } from "@testing-library/react-native";
import DiaristaCard from "../DiaristaCard";

const mockDiarista = {
  id: 1,
  nome: "Maria Silva",
  servico: "Limpeza de casas",
  cidade: "São Paulo",
  valor: "R$ 80,00",
  telefone: "(11) 99999-9999",
  foto: "https://via.placeholder.com/150",
};

describe("DiaristaCard", () => {
  it("deve renderizar o nome, serviço e cidade do diarista", () => {
    const { getByText } = render(<DiaristaCard diarista={mockDiarista} />);

    expect(getByText("Maria Silva")).toBeTruthy();
    expect(getByText("Limpeza de casas")).toBeTruthy();
    expect(getByText("São Paulo")).toBeTruthy();
  });

  it("deve renderizar o valor corretamente", () => {
    const { getByText } = render(<DiaristaCard diarista={mockDiarista} />);

    expect(getByText("R$ 80,00")).toBeTruthy();
  });
});
