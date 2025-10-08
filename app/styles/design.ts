// styles/design.ts
export const colors = {
  primary: "#007AFF",
  background: "#FAFAFA",
  text: "#333",
  card: "#FFFFFF",
  border: "#E0E0E0",
};

export const spacing = {
  s: 8,
  m: 16,
  l: 24,
};

export const text = {
  title: {
    fontSize: 22,
    fontWeight: "bold" as const,
    color: colors.text,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text,
  },
};
