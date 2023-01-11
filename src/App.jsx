import "./App.css";
import { useQuery, gql } from "@apollo/client";
function App() {
  const GET_ALLPOSTS = gql`
    query getAllPosts {
      allPosts(count: 100) {
        id
        createdAt
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_ALLPOSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const posts = data.allPosts;
  const date = posts.map((post) => new Date(+post.createdAt));
  console.log(JSON.stringify(date[0]));
  const month = JSON.stringify(date[92]);
  console.log(month.slice(6, 8));
  return (
    <div className="App">
      <h2>Hello</h2>
    </div>
  );
}

export default App;
