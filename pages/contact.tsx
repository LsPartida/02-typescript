import Head from "next/head";
import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import NavBar from "../components/NavBar/NavBar";

export default function contact() {
  return (
    <MainLayout>
      <h1>
        Ir a <Link href="/about">Next.js!</Link>
      </h1>

      <p>
        Get started by editing <code>pages/contact.js</code>
      </p>
    </MainLayout>
  );
}
