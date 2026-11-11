import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useMahasiswa } from "../../../context/MahasiswaContext";

export default function ReportMahasiswaScreen() {
  const { daftar } = useMahasiswa();

  // Semua angka dihitung otomatis dari data
  const total = daftar.length;
  const aktif = daftar.filter((m) => m.status === "Aktif").length;
  const cuti = total - aktif;
  const teknikInformatika = daftar.filter(
    (m) => m.prodi === "Teknik Informatika",
  ).length;
  const sistemInformasi = daftar.filter(
    (m) => m.prodi === "Sistem Informasi",
  ).length;
  const rasioAktif = total > 0 ? ((aktif / total) * 100).toFixed(1) : "0.0";

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Laporan & Ringkasan Data</Text>
      <Text style={styles.subtitle}>
        Rekapitulasi statistik mahasiswa aktif per semester berjalan:
      </Text>

      {/* Grid 2x2 Kartu Statistik */}
      <View style={styles.grid}>
        <View style={[styles.card, { borderLeftColor: "#072deb" }]}>
          <Text style={styles.number}>{total}</Text>
          <Text style={styles.cardLabel}>Total Mahasiswa</Text>
        </View>

        <View style={[styles.card, { borderLeftColor: "#16a34a" }]}>
          <Text style={styles.number}>{aktif}</Text>
          <Text style={styles.cardLabel}>Mahasiswa Aktif</Text>
        </View>

        <View style={[styles.card, { borderLeftColor: "#d97706" }]}>
          <Text style={styles.number}>{teknikInformatika}</Text>
          <Text style={styles.cardLabel}>Teknik Informatika</Text>
        </View>

        <View style={[styles.card, { borderLeftColor: "#7c3aed" }]}>
          <Text style={styles.number}>{sistemInformasi}</Text>
          <Text style={styles.cardLabel}>Sistem Informasi</Text>
        </View>
      </View>

      {/* Kotak Ringkasan Catatan */}
      <View style={styles.summaryBox}>
        <Text style={styles.summaryTitle}>📌 Catatan Akademik Terkini</Text>
        <Text style={styles.summaryDesc}>
          • Rasio keaktifan mahasiswa semester ini mencapai {rasioAktif}%.{"\n"}
          • Sebanyak {cuti} mahasiswa tercatat sedang mengambil cuti kuliah.
          {"\n"}• Pendaftaran mahasiswa baru jalur transfer masih berlangsung.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    padding: 18,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },
  subtitle: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 4,
    marginBottom: 18,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  card: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 14,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderLeftWidth: 4,
  },
  number: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
  },
  cardLabel: {
    fontSize: 11.5,
    color: "#64748b",
    marginTop: 4,
    fontWeight: "500",
  },
  summaryBox: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 14,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    marginTop: 14,
  },
  summaryTitle: {
    fontSize: 12.5,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 6,
  },
  summaryDesc: {
    fontSize: 12,
    color: "#475569",
    lineHeight: 18,
  },
});
