import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>
        Ir a <Link href="/about">Next.js!</Link>
      </h1>

      <p>
        Get started by editing <code>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
