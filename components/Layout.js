import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Link href="/">
          <a>Characters</a>
        </Link>
        <Link href="/locations">
          <a>Locations</a>
        </Link>
        <Link href="/episodes">
          <a>Episodes</a>
        </Link>
      </nav>

      <main>{children}</main>

      <footer>
        <a
          href="https://www.github.com/mucahit-sahin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Author mucahit-sahin
        </a>
      </footer>
    </div>
  );
};

export default Layout;
