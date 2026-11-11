import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets(); // Membaca dimensi area aman layar

  return (
    <Tabs
      screenOptions={{
        // 1. Warna saat menu dipilih (Aktif)
        tabBarActiveTintColor: "#072deb",
        // 2. Warna saat menu tidak dipilih (Tidak Aktif)
        tabBarInactiveTintColor: "#94a3b8",
        // 3. Penataan gaya fisik bilah Tab Bar bawah
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e2e8f0",
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
          paddingTop: 6,
        },
        // 4. Gaya label teks di bawah ikon
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
        // 5. Konfigurasi Header atas bawaan halaman
        headerStyle: {
          backgroundColor: "#072deb",
        },
        headerTintColor: "#ffffff",
        headerTitleAlign: "center",
      }}
    >
      {/* Tab 1: Beranda */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Beranda",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />

      {/* Tab 2: Mahasiswa */}
      <Tabs.Screen
        name="mahasiswa"
        options={{
          title: "Mahasiswa",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />

      {/* Tab 3: Profil */}
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />

      {/* Tab 4: Pengaturan */}
      <Tabs.Screen
        name="pengaturan"
        options={{
          title: "Pengaturan",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}