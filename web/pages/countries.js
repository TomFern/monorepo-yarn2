import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
        query Countries {
          countries {
            name
          }
        }
      `,
    });

    return {
      props: {
        countries: data.countries.slice(0, 4),
      },
   };
}

// export async function getServerSideProps() {
//     return {
//         props: {
//             countries: [{ "name" : "argentina"}, { "name": "brasil"}]
//         }
//     };
// }

export default function Countries({countries}) {
    console.log(countries);
    return (
        <>
        <div>
          <ul>
            {countries.map((country, index) => (
              <li>{index} 👉 {country.name}</li>
            ))}
          </ul>
          </div>
        </>
      );
}