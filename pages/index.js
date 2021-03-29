import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import slug from "slug";
import Head from "next/head";

export default function Home({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Characters</title>
      </Head>
      <div className="characters">
        <h1>Rick and Morty</h1>
        <ul className="characterList">
          {characters.results.map((character) => (
            <li key={character.id}>
              <Link
                href="/character/[slug]"
                as={`/character/${slug(character.name)}-${character.id}`}
              >
                <a>{character.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await response.json();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { characters },
  };
}
