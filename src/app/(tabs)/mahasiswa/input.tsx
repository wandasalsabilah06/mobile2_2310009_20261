import { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useMahasiswa } from "../../../context/MahasiswaContext";

const PILIHAN_PRODI = ["Teknik Informatika", "Sistem Informasi"];

export default function InputMahasiswaScreen() {
  const { daftar, tambahMahasiswa } = useMahasiswa();

  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [prodi, setProdi] = useState(PILIHAN_PRODI[0]);
  const [noHp, setNoHp] = useState("");
  const [angkatan, setAngkatan] = useState("");

  const handleSimpan = () => {
    if (!nim.trim() || !nama.trim()) {
      Alert.alert(
        "Validasi Gagal",
        "NIM dan Nama Lengkap mahasiswa wajib diisi!",
      );
      return;
    }

    // Cegah NIM ganda
    if (daftar.some((m) => m.nim === nim.trim())) {
      Alert.alert("Validasi Gagal", `NIM ${nim} sudah terdaftar.`);
      return;
    }

    // Kirim data ke context, otomatis muncul di Tab Data dan Tab Report
    tambahMahasiswa({
      nim: nim.trim(),
      nama: nama.trim(),
      prodi,
      status: "Aktif",
      noHp: noHp.trim() || "-",
      angkatan: angkatan.trim() || "-",
    });

    Alert.alert(
      "Data Berhasil Disimpan",
      `Mahasiswa baru atas nama ${nama} (${nim}) telah ditambahkan.`,
    );

    // Reset formulir setelah disimpan
    setNim("");
    setNama("");
    setProdi(PILIHAN_PRODI[0]);
    setNoHp("");
    setAngkatan("");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Formulir Pendaftaran Mahasiswa</Text>
      <Text style={styles.subtitle}>
        Isikan data mahasiswa baru secara teliti pada kolom formulir di bawah
        ini:
      </Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nomor Induk Mahasiswa (NIM)</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 230101006"
          placeholderTextColor="#94a3b8"
          value={nim}
          onChangeText={setNim}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nama Lengkap Mahasiswa</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Muhammad Rizki"
          placeholderTextColor="#94a3b8"
          value={nama}
          onChangeText={setNama}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Program Studi</Text>
        <View style={styles.pilihanRow}>
          {PILIHAN_PRODI.map((item) => {
            const aktif = prodi === item;
            return (
              <TouchableOpacity
                key={item}
                style={[styles.pilihan, aktif && styles.pilihanAktif]}
                onPress={() => setProdi(item)}
                activeOpacity={0.8}
              >
                <Text
                  style={[styles.pilihanText, aktif && styles.pilihanTextAktif]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nomor HP</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 081234567006"
          placeholderTextColor="#94a3b8"
          value={noHp}
          onChangeText={setNoHp}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Tahun Angkatan</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 2024"
          placeholderTextColor="#94a3b8"
          value={angkatan}
          onChangeText={setAngkatan}
          keyboardType="numeric"
          maxLength={4}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSimpan}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Simpan Data Mahasiswa</Text>
      </TouchableOpacity>
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
  formGroup: {
    marginBottom: 14,
  },
  label: {
    fontSize: 12.5,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
    color: "#0f172a",
  },
  pilihanRow: {
    flexDirection: "row",
    gap: 10,
  },
  pilihan: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  pilihanAktif: {
    backgroundColor: "#eff6ff",
    borderColor: "#072deb",
  },
  pilihanText: {
    fontSize: 12.5,
    color: "#64748b",
    fontWeight: "500",
  },
  pilihanTextAktif: {
    color: "#072deb",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#072deb",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 13.5,
    fontWeight: "bold",
  },
});
