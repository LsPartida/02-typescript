import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>Hola mi amor, esta es mi primer página publicada</h1>

      <p>Buenos días {"<3"}</p>
    </MainLayout>
  );
}
