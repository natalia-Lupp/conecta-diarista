// components/DiaristaCard.tsx
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors, spacing, text } from "../styles/design";
import { Diarista } from "../data/diaristas";

interface Props {
  diarista: Diarista;
}

export default function DiaristaCard({ diarista }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: diarista.foto }} style={styles.foto} />
      <View style={styles.info}>
        <Text style={styles.nome}>{diarista.nome}</Text>
        <Text style={styles.servico}>{diarista.servico}</Text>
        <Text style={styles.cidade}>{diarista.cidade}</Text>
      </View>

      <View style={styles.valorBox}>
        <Text style={styles.valor}>{diarista.valor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.m,
    marginBottom: spacing.m,
    borderWidth: 1,
    borderColor: colors.border,
  },
  foto: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  info: {
    flex: 1,
    marginLeft: spacing.m,
  },
  nome: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
  servico: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 4,
  },
  cidade: {
    fontSize: 12,
    color: colors.muted,
    marginTop: 4,
  },
  valorBox: {
    backgroundColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  valor: {
    color: "#fff",
    fontWeight: "700",
  },
});
