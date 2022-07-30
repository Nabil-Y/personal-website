import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import ThemeSwitch from "../components/UI/ThemeSwitch";
import { getAllPostsSorted } from "../libs/posts";

const Home = (props: { posts: Record<string, string>[] }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold ">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="text-secondary">
          Get started by editing <code>pages/index.tsx</code>
        </p>
      </main>

      <ThemeSwitch />

      <Link href={"/blog/test"}>Go to Test</Link>

      <ul>
        {props.posts.map((post) => (
          <li key={post.slug}>
            {" "}
            <Link href={`blog/${post.slug}`}>{post.title}</Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const latestPosts = getAllPostsSorted().slice(0, 4);

  return {
    props: { posts: latestPosts },
  };
};

export default Home;
