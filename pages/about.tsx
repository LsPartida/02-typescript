import Link from "next/link";
import DarkLayout from "../components/layouts/DarkLayout";
import MainLayout from "../components/layouts/MainLayout";

export default function About() {
  return (
    <>
      <h1>
        Ir a <Link href="/about">Next.js!</Link>
      </h1>

      <p>
        Get started by editing <code>pages/about.js</code>
      </p>
    </>
  );
  {
    /* <h1>Tipo de render</h1>
      <hr />
      <ul>
        <li>Static Generation: Muestra elementos que no cambian</li>
        <li>
          Server Side Render: Muestra elementos distintos según la información
          del cliente
        </li>
      </ul> */
  }
}
About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
