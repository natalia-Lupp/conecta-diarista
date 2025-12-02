import { useActionSheet } from "@expo/react-native-action-sheet";
import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  Linking,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { diaristas } from "../../data/diaristas";
import { colors, spacing, text } from "../../styles/design";

interface Diarista {
  id: number;
  nome: string;
  cidade: string;
  servico: string;
  valor: string;
  telefone: string;
  foto: string;
}

export default function ProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [diarista, setDiarista] = useState<Diarista | null>(null);
  const [bloqueada, setBloqueada] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [mensagemModal, setMensagemModal] = useState("");

  const { showActionSheetWithOptions } = useActionSheet();

  useEffect(() => {
    if (id) {
      const encontrada = diaristas.find((d) => d.id === Number(id));
      setDiarista(encontrada || null);
    }
  }, [id]);

  const mostrarModal = (mensagem: string) => {
    setMensagemModal(mensagem);
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 2000);
  };

  const openActionSheet = () => {
    const options = bloqueada
      ? ["Desbloquear", "Cancelar"]
      : ["WhatsApp", "Contratar", "Bloquear", "Cancelar"];
    const cancelButtonIndex = bloqueada ? 1 : 3;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        title: `Opções para ${diarista?.nome}`,
      },
      (buttonIndex?: number) => {
        if (buttonIndex === undefined || !diarista) return;

        if (!bloqueada) {
          if (buttonIndex === 0) {
            const numeroWhatsApp = diarista.telefone.replace(/\D/g, "");
            const mensagem = `Olá ${diarista.nome}, vi seu perfil no Conecta Diarista e gostaria de saber mais sobre seus serviços.`;
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
              mensagem
            )}`;
            Linking.openURL(url);
          }

          if (buttonIndex === 1) {
            mostrarModal(`${diarista.nome} foi contratada com sucesso!`);
          }

          if (buttonIndex === 2) {
            setBloqueada(true);
            mostrarModal(`${diarista.nome} foi bloqueada.`);
          }
        } else {
          if (buttonIndex === 0) {
            setBloqueada(false);
            mostrarModal(`${diarista.nome} foi desbloqueada.`);
          }
        }
      }
    );
  };

  if (!diarista) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ fontSize: 18, color: colors.muted }}>
          Carregando informações...
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Conteúdo rolável */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* Foto */}
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: diarista.foto }}
              style={[
                styles.foto,
                bloqueada && { tintColor: "#888", opacity: 0.5 },
              ]}
            />
            {bloqueada && (
              <Text style={styles.overlayText}>🚫 Usuária bloqueada</Text>
            )}
          </View>

          {/* Nome e cidade */}
          <Text style={styles.nome}>{diarista.nome}</Text>
          <Text style={styles.cidade}>{diarista.cidade}</Text>

          {/* Informações */}
          <View style={styles.infoBox}>
            <Text style={styles.label}>Serviço:</Text>
            <Text style={styles.info}>{diarista.servico}</Text>

            <Text style={styles.label}>Valor da diária:</Text>
            <Text style={styles.info}>{diarista.valor}</Text>

            <Text style={styles.label}>Telefone:</Text>
            <Text style={styles.info}>{diarista.telefone}</Text>
          </View>

          {/* Botão contratar */}
          <TouchableOpacity
            style={[
              styles.botaoContato,
              bloqueada && { backgroundColor: "#777" },
            ]}
            onPress={openActionSheet}
          >
            <Text style={styles.textoBotao}>
              {bloqueada
                ? "Usuária bloqueada (desbloquear)"
                : "Quero Contratar"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Menu inferior fixo acima da barra do celular */}
      <View style={styles.menuInferior}>
        <TouchableOpacity style={styles.menuBotao}>
          <FontAwesome name="home" size={28} color="black" />
          <Text style={styles.menuTexto}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBotao}
          onPress={() => alert("Usuário saiu!")}
        >
          <FontAwesome name="sign-out" size={28} color="black" />
          <Text style={styles.menuTexto}>Sair</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de feedback */}
      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>{mensagemModal}</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: spacing.m,
    paddingBottom: 100, // garante espaço para o menu
  },
  container: {
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    position: "relative",
    marginBottom: spacing.m,
  },
  foto: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  overlayText: {
    position: "absolute",
    bottom: 12,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    backgroundColor: "rgba(0,0,0,0.45)",
    paddingVertical: 6,
    borderRadius: 8,
    marginHorizontal: 20,
  },
  nome: {
    ...text.title,
    color: colors.primary,
    marginBottom: spacing.s,
  },
  cidade: {
    ...text.subtitle,
    color: colors.muted,
    marginBottom: spacing.l,
  },
  infoBox: {
    width: "100%",
    backgroundColor: colors.surface,
    padding: spacing.m,
    borderRadius: 12,
    marginBottom: spacing.l,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontWeight: "700",
    color: colors.text,
    marginTop: spacing.s,
  },
  info: {
    marginBottom: spacing.s,
    color: colors.text,
  },
  botaoContato: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.m,
    paddingHorizontal: spacing.l,
    borderRadius: 12,
    alignSelf: "stretch",
    marginHorizontal: spacing.m,
    marginBottom: spacing.l,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: spacing.l,
    borderRadius: 12,
  },
  modalText: {
    fontSize: 16,
    color: colors.text,
  },
  menuInferior: {
    flexDirection: "row",
    height: 60,
    backgroundColor: colors.surface,
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  menuBotao: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  menuTexto: {
    fontSize: 12,
    color: colors.text,
    marginTop: 2,
  },
});
