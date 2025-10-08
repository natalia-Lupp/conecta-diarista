// data/diaristas.ts
export interface Diarista {
  id: number;
  nome: string;
  cidade: string;
  servico: string;
  valor: string;
  telefone: string;
  foto: string;
}

export const diaristas: Diarista[] = [
  {
    id: 1,
    nome: "Maria Souza",
    cidade: "São Paulo",
    servico: "Faxina completa",
    valor: "R$ 150",
    telefone: "(11) 99999-0001",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    nome: "Joana Silva",
    cidade: "Rio de Janeiro",
    servico: "Cozinhar e limpar",
    valor: "R$ 180",
    telefone: "(21) 98888-0002",
    foto: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    nome: "Ana Lima",
    cidade: "São Paulo",
    servico: "Passar roupa e arrumar casa",
    valor: "R$ 120",
    telefone: "(11) 97777-0003",
    foto: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];
