import { FontAwesome } from "@expo/vector-icons";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Diarista, diaristas } from "../../data/diaristas";
import { colors, spacing, text } from "../../styles/design";
import DiaristaCard from "@/components/DiaristaCard";

export default function CityScreen() {
  const { city } = useLocalSearchParams<{ city: string }>();
  const [lista, setLista] = useState<Diarista[]>([]);

  useEffect(() => {
    const filtradas = diaristas.filter((d) => d.cidade === city);
    setLista(filtradas);
  }, [city]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Diaristas em {city}</Text>

          <FlatList
            data={lista}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <DiaristaCard diarista={item} />
                <Link href={`/profile/${item.id}`} asChild>
                  <Pressable style={styles.botaoDetalhes}>
                    <Text style={styles.textoBotaoDetalhes}>Ver detalhes</Text>
                  </Pressable>
                </Link>
              </View>
            )}
            scrollEnabled={false} // FlatList dentro do ScrollView
          />
        </View>
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
    padding: spacing.m,
    paddingBottom: 100, // garante espaço para o menu
  },
  container: {
    flex: 1,
  },
  titulo: {
    ...text.title,
    color: colors.primary,
    marginBottom: spacing.m,
  },
  cardContainer: {
    marginBottom: spacing.s,
  },
  botaoDetalhes: {
    alignSelf: "flex-end",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  textoBotaoDetalhes: {
    color: colors.primary,
    fontWeight: "700",
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
