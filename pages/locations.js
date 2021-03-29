import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

const locations = ({ locations }) => {
  return (
    <Layout>
      <Head>
        <title>Locations</title>
      </Head>
      <div className="locations">
        <h1>Location</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Dimension</th>
          </tr>
          {locations.results.map((location) => (
            <tr key={location.id}>
              <td>{location.name}</td>
              <td>{location.type}</td>
              <td>{location.dimension}</td>
            </tr>
          ))}
        </table>
      </div>
    </Layout>
  );
};

export default locations;

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const response = await fetch("https://rickandmortyapi.com/api/location");
  const locations = await response.json();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { locations },
  };
}
