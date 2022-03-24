import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties, FC } from "react";
const style: CSSProperties = { color: "#0070f3", textDecoration: "underline" };

interface Props {
  href: string;
}

export const ActiveLink: FC<Props> = ({ href, children }) => {
  const { asPath } = useRouter();
  console.log(asPath);
  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{children}</a>
    </Link>
  );
};
