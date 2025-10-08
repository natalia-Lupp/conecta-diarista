// app/styles/design.ts
export const colors = {
  primary: "#9C27B0",     // lilás principal
  primaryDark: "#7B1FA2", // lilás escuro
  accent: "#E1BEE7",      // lilás claro (para badges/backdrops)
  background: "#FFFFFF",  // fundo principal branco
  surface: "#F7F5FB",     // cards / listas
  text: "#000000",        // preto (texto principal)
  muted: "#666666",       // texto secundário
  border: "#E6E0EB",      // linha divisória suave
  success: "#4CAF50",
  danger: "#E53935",
};
export const spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
};
export const text = {
  title: {
    fontSize: 20,
    fontWeight: "700" as const,
    color: colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: colors.muted,
  },
  body: {
    fontSize: 14,
    color: colors.text,
  },
};
