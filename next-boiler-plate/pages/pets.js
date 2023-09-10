import Layout from "./layout";
import fetch from "isomorphic-unfetch";
//Note the example that I am given in the book doesn't work, will need to find another fetch example for that later. 


export default function Pets(props) {
  return (
    <Layout>
 
          </>
    </Layout>
  );
}

Pets.getInitialProps = async function() {
  const res = await fetch(
    `http://pet-library.moonhighway.com/api/pets`
  );
  const data = await res.json();
  return {
    pets: data
  };
};
