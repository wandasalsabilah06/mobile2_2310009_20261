import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Layar pembuka & autentikasi menggunakan tampilan full-screen modern */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />

      {/* Homepage sederhana setelah berhasil login (tombol back dimatikan) */}
      <Stack.Screen
        name="home"
        options={{
          title: "Beranda Aplikasi",
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#FFFFFF" },
          headerTintColor: "#0F172A",
          headerTitleStyle: { fontWeight: "700" },
        }}
      />
    </Stack>
  );
}
