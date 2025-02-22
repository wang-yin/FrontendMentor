import "./App.css";
import Card from "./components/Card";

const profiles = [
  {
    name: "Victor Crest",
    age: "26",
    country: "London",
    avatar: "/images/image-victor.jpg",
    stats: [{ Followers: "80K" }, { Likes: "803K" }, { Photos: "1.4K" }],
  },
];

function App() {
  return (
    <main>
      <Card profiles={profiles} />
    </main>
  );
}

export default App;
