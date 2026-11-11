import { useState } from "react";
import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

// Struktur tipe data setiap butir mahasiswa
type Mahasiswa = {
  id: string;
  nim: string;
  nama: string;
  prodi: string;
};

// Data awal berbentuk senarai JSON (Array of Objects)
const dataAwal: Mahasiswa[] = [
  {
    id: "1",
    nim: "2026001",
    nama: "Budi Santoso",
    prodi: "Teknik Informatika",
  },
  { id: "2", nim: "2026002", nama: "Siti Rahma", prodi: "Sistem Informasi" },
];

export default function MahasiswaScreen() {
  // State untuk menangani nilai 3 kolom input
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [prodi, setProdi] = useState("");

  // State untuk menampung senarai data JSON
  const [daftarMahasiswa, setDaftarMahasiswa] = useState<Mahasiswa[]>(dataAwal);

  const simpanData = () => {
    // Validasi sederhana: pastikan tidak ada kolom yang kosong
    if (nim.trim() === "" || nama.trim() === "" || prodi.trim() === "") {
      alert("Harap lengkapi NIM, Nama, dan Program Studi!");
      return;
    }

    // Buat objek data baru
    const dataBaru: Mahasiswa = {
      id: Date.now().toString(),
      nim: nim,
      nama: nama,
      prodi: prodi,
    };

    // Sisipkan data baru ke dalam senarai lama
    setDaftarMahasiswa([...daftarMahasiswa, dataBaru]);

    // Bersihkan formulir kembali
    kosongkanFormulir();
  };

  // Dari belajarinput.tsx: tombol reset formulir
  const kosongkanFormulir = () => {
    setNim("");
    setNama("");
    setProdi("");
  };

  const renderCardMahasiswa = ({ item }: { item: Mahasiswa }) => (
    <View style={styles.cardItem}>
      <View style={styles.cardBadge}>
        <Text style={styles.cardBadgeText}>{item.nim}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardNama}>{item.nama}</Text>
        <Text style={styles.cardProdi}>Program Studi: {item.prodi}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 1. Area Formulir Input Data */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Form Pendataan Mahasiswa</Text>

        <Text style={styles.label}>Nomor Induk Mahasiswa (NIM):</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 20260012"
          placeholderTextColor="#94a3b8"
          value={nim}
          onChangeText={setNim}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Nama Lengkap:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Budi Pratama"
          placeholderTextColor="#94a3b8"
          value={nama}
          onChangeText={setNama}
        />

        <Text style={styles.label}>Program Studi:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Teknik Informatika"
          placeholderTextColor="#94a3b8"
          value={prodi}
          onChangeText={setProdi}
        />

        <TouchableOpacity
          style={styles.buttonSimpan}
          activeOpacity={0.7}
          onPress={simpanData}
        >
          <Text style={styles.buttonText}>+ Simpan ke Daftar</Text>
        </TouchableOpacity>

        <Pressable style={styles.buttonReset} onPress={kosongkanFormulir}>
          <Text style={styles.buttonText}>Kosongkan Formulir</Text>
        </Pressable>
      </View>

      {/* 2. Area Tampilan Senarai Data FlatList */}
      <View style={styles.listContainer}>
        <Text style={styles.listHeader}>Daftar Mahasiswa Terdaftar:</Text>

        <FlatList
          data={daftarMahasiswa}
          keyExtractor={(item) => item.id}
          renderItem={renderCardMahasiswa}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Belum ada data mahasiswa.</Text>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 8,
    textAlign: "center",
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 4,
    marginTop: 6,
  },
  input: {
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 9,
    fontSize: 13,
    color: "#0f172a",
  },
  buttonSimpan: {
    backgroundColor: "#072deb",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 14,
  },
  buttonReset: {
    backgroundColor: "#ef4444",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  listHeader: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 24,
  },
  cardItem: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  cardBadge: {
    backgroundColor: "#e0f2fe",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginRight: 12,
  },
  cardBadgeText: {
    color: "#0284c7",
    fontWeight: "bold",
    fontSize: 12,
  },
  cardBody: {
    flex: 1,
  },
  cardNama: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0f172a",
  },
  cardProdi: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },
  emptyText: {
    textAlign: "center",
    color: "#94a3b8",
    marginTop: 20,
    fontStyle: "italic",
  },
});
