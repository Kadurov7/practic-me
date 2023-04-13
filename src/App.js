import { useState } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import PostItem from "./components/post/PostItem";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "Description",
    },
    {
      id: 2,
      title: "JavaScript2",
      body: "Description",
    },
    {
      id: 3,
      title: "JavaScript3",
      body: "Description",
    },
  ]);
  return (
    <div className="App">
      <h1>Cписок постов</h1>
      {posts.map((item) => (
        <PostItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
