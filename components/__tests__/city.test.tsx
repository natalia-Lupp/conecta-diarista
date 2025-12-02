import React from "react";
import { render, screen } from "@testing-library/react-native";

// Mock do expo-router
jest.mock("expo-router", () => ({
  Link: ({ children }: any) => children,
  useLocalSearchParams: () => ({ city: "Rio de Janeiro" }),
}));

// Mock dos dados
jest.mock("../../data/diaristas", () => ({
  diaristas: [
    { id: 1, nome: "Maria", cidade: "Rio de Janeiro", foto: "" },
    { id: 2, nome: "Ana", cidade: "Rio de Janeiro", foto: "" },
    { id: 3, nome: "João", cidade: "São Paulo", foto: "" },
  ],
}));

import CityScreen from "@/app/city/[city]";

describe("CityScreen", () => {
  test("filtra e exibe apenas diaristas da cidade informada", () => {
    render(<CityScreen />);

    expect(screen.getByText("Diaristas em Rio de Janeiro")).toBeTruthy();
    expect(screen.getByText("Maria")).toBeTruthy();
    expect(screen.getByText("Ana")).toBeTruthy();
    expect(screen.queryByText("João")).toBeNull(); // SP não aparece
  });

  test('botão "Ver detalhes" renderiza corretamente', () => {
    render(<CityScreen />);
    const botao = screen.getAllByText("Ver detalhes")[0];
    expect(botao).toBeTruthy();
  });
});
