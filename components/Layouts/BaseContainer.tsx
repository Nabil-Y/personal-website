import Head from "next/head";
import { useState } from "react";
import { BaseContainerProps } from "../../types/types";
import Header from "./Header/Header";

const BaseContainer = (props: BaseContainerProps) => {
  const { children, ...customMeta } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const meta = {
    title: "Nabil Yassine - Frontend developer",
    description:
      "Frontend developer, React and TypeScript enthusiast, I talk about web dev",
    image: "https://nabil-y.com/static/nabil_irl.jpg",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta name="author" content="Nabil Yassine" />
        <meta property="type" content={meta.type} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}

        <meta property="og:site_name" content="Nabil-Y" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:description" content={meta.description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nabil_io" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <Header menuState={{ isMenuOpen, setIsMenuOpen }} />
      <main id="skipNav" className={isMenuOpen ? "hidden" : ""}>
        {children}
      </main>
    </>
  );
};

export default BaseContainer;
