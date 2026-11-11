import { Ionicons } from "@expo/vector-icons";
import {
    Alert,
    FlatList,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useMahasiswa } from "../../../context/MahasiswaContext";

export default function DataMahasiswaScreen() {
  const { daftar } = useMahasiswa();

  const handleHubungi = async (nama: string, noHp: string) => {
    try {
      await Linking.openURL(`tel:${noHp}`);
    } catch (error) {
      Alert.alert("Gagal", `Tidak dapat menghubungi ${nama} di perangkat ini.`);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={daftar}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listArea}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.topRow}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.nama.charAt(0)}</Text>
              </View>

              <View style={styles.infoArea}>
                <Text style={styles.nama}>{item.nama}</Text>
                <Text style={styles.subText}>NIM: {item.nim}</Text>
                <Text style={styles.prodiText}>{item.prodi}</Text>
              </View>

              <View
                style={[
                  styles.badge,
                  item.status === "Aktif"
                    ? styles.badgeActive
                    : styles.badgeInactive,
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    item.status === "Aktif"
                      ? styles.badgeTextActive
                      : styles.badgeTextInactive,
                  ]}
                >
                  {item.status}
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.bottomRow}>
              <View style={styles.detailArea}>
                <View style={styles.detailItem}>
                  <Ionicons name="calendar-outline" size={14} color="#64748b" />
                  <Text style={styles.detailText}>
                    Angkatan {item.angkatan}
                  </Text>
                </View>
                <View style={styles.detailItem}>
                  <Ionicons name="call-outline" size={14} color="#64748b" />
                  <Text style={styles.detailText}>{item.noHp}</Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.callButton}
                onPress={() => handleHubungi(item.nama, item.noHp)}
                activeOpacity={0.8}
              >
                <Ionicons name="call" size={14} color="#ffffff" />
                <Text style={styles.callButtonText}>Hubungi</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  listArea: {
    padding: 16,
    gap: 12,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#072deb",
  },
  infoArea: {
    flex: 1,
  },
  nama: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0f172a",
  },
  subText: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },
  prodiText: {
    fontSize: 12,
    color: "#072deb",
    marginTop: 2,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeActive: {
    backgroundColor: "#dcfce7",
  },
  badgeInactive: {
    backgroundColor: "#fee2e2",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "bold",
  },
  badgeTextActive: {
    color: "#16a34a",
  },
  badgeTextInactive: {
    color: "#dc2626",
  },
  divider: {
    height: 1,
    backgroundColor: "#e2e8f0",
    marginVertical: 12,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailArea: {
    gap: 4,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  detailText: {
    fontSize: 12,
    color: "#475569",
  },
  callButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#072deb",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  callButtonText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
