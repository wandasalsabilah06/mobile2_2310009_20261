import { Redirect } from "expo-router";

export default function Index() {
  // Saat aplikasi pertama kali dibuka, langsung arahkan ke layar Login
  return <Redirect href="/login" />;
}
