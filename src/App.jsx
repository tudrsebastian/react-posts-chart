import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { Graph } from "./Components";
function App() {
  const GET_ALLPOSTS = gql`
    query getAllPosts {
      allPosts(count: 1000) {
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

  return (
    <div className="App">
      <Graph props={date} />
    </div>
  );
}

export default App;
