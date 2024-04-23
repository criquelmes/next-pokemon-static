import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

type Props = {
  children: ReactNode;
  title?: string;
};

const origin = typeof window !== "undefined" ? window.location.origin : "";
export const Layout: FC<Props> = ({ children, title = "Pokemon app" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Christopher Riquelme" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`pokemon, pokedex, ${title}`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
