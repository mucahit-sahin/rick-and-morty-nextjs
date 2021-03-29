import Head from "next/head";
import fetch from "isomorphic-unfetch";
import slug from "slug";
import Layout from "../../components/Layout";

const CharacterDetails = ({ character }) => {
  return (
    <Layout>
      <Head>
        <title>Character Details</title>
      </Head>
      <div className="characterDetailsCard">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <h3>{character.gender}</h3>
        <h3>{character.species}</h3>
        <h3>{character.status}</h3>
      </div>
    </Layout>
  );
};

export default CharacterDetails;

export async function getStaticPaths() {
  const data = await fetch("https://rickandmortyapi.com/api/character/");
  const characters = await data.json();

  const paths = characters.results.map((character) => {
    return { params: { slug: `${slug(character.name)}-${character.id}` } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Get external data from the file system, API, DB, etc.
  const id = params.slug.split("-").slice(-1)[0];
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/" + id
  );
  const character = await response.json();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { character },
  };
}
