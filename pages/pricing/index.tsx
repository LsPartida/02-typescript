import MainLayout from "../../components/layouts/MainLayout";
import Link from "next/link";
export default function PricingPage() {
  return (
    <>
      <h1>
        Ir a <Link href="/">Next.js!</Link>
      </h1>

      <p>
        Get started by editing <code>pages/pricing.js</code>
      </p>
    </>
  );
}

PricingPage.getLayout = function getLayout(page: any) {
  return <MainLayout>{page}</MainLayout>;
};
