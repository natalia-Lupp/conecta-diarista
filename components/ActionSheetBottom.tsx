import React from "react";
import {
  Linking,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, spacing } from "../styles/design";

interface Props {
  visible: boolean;
  onClose: () => void;
  telefone: string;
  nome: string;
}

export default function ActionSheetBottom({
  visible,
  onClose,
  telefone,
  nome,
}: Props) {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${telefone.replace(
      /\D/g,
      ""
    )}?text=Olá ${nome}, vi seu perfil no aplicativo!`;
    Linking.openURL(url);
  };

  const handleLigar = () => {
    Linking.openURL(`tel:${telefone}`);
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <Text style={styles.titulo}>Entrar em contato com {nome}</Text>

          <TouchableOpacity style={styles.botao} onPress={handleWhatsApp}>
            <Text style={styles.textoBotao}>💬 WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={handleLigar}>
            <Text style={styles.textoBotao}>📞 Ligar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelar} onPress={onClose}>
            <Text style={styles.cancelarTexto}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  sheet: {
    backgroundColor: colors.card,
    padding: spacing.l,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: spacing.m,
  },
  botao: {
    backgroundColor: colors.primary,
    padding: spacing.m,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: spacing.s,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  cancelar: {
    alignItems: "center",
    marginTop: spacing.s,
  },
  cancelarTexto: {
    color: colors.text, // alterado de textLight
    fontSize: 15,
  },
});
