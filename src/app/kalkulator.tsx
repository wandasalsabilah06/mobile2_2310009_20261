import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Kalkulator() {
  const [angka1, setAngka1] = useState("");
  const [angka2, setAngka2] = useState("");
  const [hasil, setHasil] = useState("-");

  const hitung = (operasi: string) => {
    const a = parseFloat(angka1);
    const b = parseFloat(angka2);

    if (isNaN(a) || isNaN(b)) {
      setHasil("Masukkan kedua angka dengan benar");
      return;
    }

    if (operasi === "+") setHasil(String(a + b));
    else if (operasi === "-") setHasil(String(a - b));
    else if (operasi === "×") setHasil(String(a * b));
    else if (operasi === "÷") {
      if (b === 0) {
        setHasil("Angka pembagi tidak boleh nol");
      } else {
        setHasil(String(a / b));
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalkulator Sederhana</Text>

      <Text style={styles.label}>Angka Pertama:</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: 10"
        placeholderTextColor="#94a3b8"
        value={angka1}
        onChangeText={setAngka1}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Angka Kedua:</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: 5"
        placeholderTextColor="#94a3b8"
        value={angka2}
        onChangeText={setAngka2}
        keyboardType="numeric"
      />

      <View style={styles.rowTombol}>
        <Pressable style={styles.tombol} onPress={() => hitung("+")}>
          <Text style={styles.tombolText}>+</Text>
        </Pressable>
        <Pressable style={styles.tombol} onPress={() => hitung("-")}>
          <Text style={styles.tombolText}>-</Text>
        </Pressable>
        <Pressable style={styles.tombol} onPress={() => hitung("×")}>
          <Text style={styles.tombolText}>×</Text>
        </Pressable>
        <Pressable style={styles.tombol} onPress={() => hitung("÷")}>
          <Text style={styles.tombolText}>÷</Text>
        </Pressable>
      </View>

      <View style={styles.cardHasil}>
        <Text style={styles.cardTitle}>Hasil Perhitungan:</Text>
        <Text style={styles.hasilText}>{hasil}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: "#0f172a",
  },
  rowTombol: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  tombol: {
    flex: 1,
    backgroundColor: "#072deb",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },
  tombolText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  cardHasil: {
    marginTop: 24,
    backgroundColor: "#e0f2fe",
    borderWidth: 1,
    borderColor: "#bae6fd",
    borderRadius: 10,
    padding: 16,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0369a1",
    marginBottom: 8,
  },
  hasilText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
  },
});
