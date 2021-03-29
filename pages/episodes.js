import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

const episodes = ({ episodes }) => {
  return (
    <Layout>
      <div className="episodes">
        <h1>Episodes</h1>
        <table>
          <tr>
            <th>Episode</th>
            <th>Name</th>
            <th>Release Date</th>
          </tr>
          {episodes.results.map((episode) => (
            <tr key={episode.id}>
              <td>{episode.episode}</td>
              <td>{episode.name}</td>
              <td>{episode.air_date}</td>
            </tr>
          ))}
        </table>
      </div>
    </Layout>
  );
};

export default episodes;

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const response = await fetch("https://rickandmortyapi.com/api/episode");
  const episodes = await response.json();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { episodes },
  };
}
