import { createContext, ReactNode, useContext, useState } from "react";

export interface MahasiswaItem {
  id: string;
  nim: string;
  nama: string;
  prodi: string;
  status: "Aktif" | "Cuti";
  noHp: string;
  angkatan: string;
}

interface MahasiswaContextType {
  daftar: MahasiswaItem[];
  tambahMahasiswa: (data: Omit<MahasiswaItem, "id">) => void;
}

// Data awal (sama dengan data dummy sebelumnya)
const DATA_AWAL: MahasiswaItem[] = [
  {
    id: "1",
    nim: "230101001",
    nama: "Ahmad Fauzi",
    prodi: "Teknik Informatika",
    status: "Aktif",
    noHp: "081234567001",
    angkatan: "2023",
  },
  {
    id: "2",
    nim: "230101002",
    nama: "Budi Santoso",
    prodi: "Sistem Informasi",
    status: "Aktif",
    noHp: "081234567002",
    angkatan: "2023",
  },
  {
    id: "3",
    nim: "230101003",
    nama: "Citra Dewi",
    prodi: "Teknik Informatika",
    status: "Aktif",
    noHp: "081234567003",
    angkatan: "2023",
  },
  {
    id: "4",
    nim: "230101004",
    nama: "Dedi Kurniawan",
    prodi: "Sistem Informasi",
    status: "Cuti",
    noHp: "081234567004",
    angkatan: "2022",
  },
  {
    id: "5",
    nim: "230101005",
    nama: "Eka Rahmawati",
    prodi: "Teknik Informatika",
    status: "Aktif",
    noHp: "081234567005",
    angkatan: "2024",
  },
];

const MahasiswaContext = createContext<MahasiswaContextType | undefined>(
  undefined,
);

export function MahasiswaProvider({ children }: { children: ReactNode }) {
  const [daftar, setDaftar] = useState<MahasiswaItem[]>(DATA_AWAL);

  const tambahMahasiswa = (data: Omit<MahasiswaItem, "id">) => {
    const mahasiswaBaru: MahasiswaItem = {
      ...data,
      id: Date.now().toString(),
    };
    // Data terbaru ditaruh paling atas
    setDaftar((sebelumnya) => [mahasiswaBaru, ...sebelumnya]);
  };

  return (
    <MahasiswaContext.Provider value={{ daftar, tambahMahasiswa }}>
      {children}
    </MahasiswaContext.Provider>
  );
}

// Hook agar pemakaian di layar lebih singkat
export function useMahasiswa() {
  const context = useContext(MahasiswaContext);
  if (!context) {
    throw new Error("useMahasiswa harus dipakai di dalam MahasiswaProvider");
  }
  return context;
}
