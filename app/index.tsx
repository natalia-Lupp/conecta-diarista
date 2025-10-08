import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { diaristas } from "../data/diaristas";
import { colors, spacing, text } from "../styles/design";

export default function HomeScreen() {
  const cidades = Array.from(new Set(diaristas.map((d) => d.cidade)));

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.titulo}>Selecione uma cidade</Text>

        <FlatList
          data={cidades}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Link href={`/city/${item}`} asChild>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>{item}</Text>
              </TouchableOpacity>
            </Link>
          )}
          scrollEnabled={false} // FlatList dentro do ScrollView
        />
      </ScrollView>

      {/* Menu inferior fixo acima da barra do celular */}
      <View style={styles.menuInferior}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.menuBotao}>
            <FontAwesome name="home" size={28} color="black" />
            <Text style={styles.menuTexto}>Home</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity
          style={styles.menuBotao}
          onPress={() => alert("Usuário saiu!")}
        >
          <FontAwesome name="sign-out" size={28} color="black" />
          <Text style={styles.menuTexto}>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: spacing.l,
    paddingBottom: 100, // espaço para o menu
  },
  titulo: { ...text.title, marginBottom: spacing.m },
  botao: {
    backgroundColor: colors.primary,
    padding: spacing.m,
    borderRadius: 8,
    marginBottom: spacing.s,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menuTexto: {
    fontSize: 12,
    color: colors.text,
    marginTop: 2,
  },
});
