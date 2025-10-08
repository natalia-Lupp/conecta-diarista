// app/_layout.tsx
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";
import { colors } from "../styles/design";

export default function Layout() {
  return (
    <ActionSheetProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "700" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Conecta Diarista" }} />
        <Stack.Screen name="city/[city]" options={{ title: "Diaristas" }} />
        <Stack.Screen name="profile/[id]" options={{ title: "Perfil" }} />
      </Stack>
    </ActionSheetProvider>
  );
}
