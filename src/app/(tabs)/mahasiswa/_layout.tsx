import { Ionicons } from "@expo/vector-icons";
import { TopTabs } from "expo-router/js-top-tabs";
import { MahasiswaProvider } from "../../../context/MahasiswaContext";

export default function MahasiswaTopTabsLayout() {
  return (
    <MahasiswaProvider>
      <TopTabs
        screenOptions={{
          tabBarActiveTintColor: "#072deb",
          tabBarInactiveTintColor: "#64748b",
          tabBarShowIcon: true,
          tabBarIndicatorStyle: {
            backgroundColor: "#072deb",
            height: 3,
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: "bold",
            textTransform: "none",
          },
          tabBarStyle: {
            backgroundColor: "#ffffff",
            elevation: 2,
            shadowOpacity: 0.08,
          },
        }}
      >
        <TopTabs.Screen
          name="index"
          options={{
            title: "Data",
            tabBarIcon: ({ color }) => (
              <Ionicons name="list" size={20} color={color} />
            ),
          }}
        />

        <TopTabs.Screen
          name="input"
          options={{
            title: "Input",
            tabBarIcon: ({ color }) => (
              <Ionicons name="add-circle" size={20} color={color} />
            ),
          }}
        />

        <TopTabs.Screen
          name="report"
          options={{
            title: "Report",
            tabBarIcon: ({ color }) => (
              <Ionicons name="stats-chart" size={20} color={color} />
            ),
          }}
        />
      </TopTabs>
    </MahasiswaProvider>
  );
}
