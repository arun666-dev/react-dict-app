import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { Header } from "./Components/Header/Header";
import { Definitions } from "./Components/Definitions/Definitions";

function App() {
  // we use array as the data api gives is an array
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");

  console.log(meanings);

  useEffect(() => {
    const dictApi = async () => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
        );
        // console.log(data);
        setMeanings(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    // call dictApi func.
    dictApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "#fff" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {/* if there is meanings then only render Definitions comp. */}
        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
