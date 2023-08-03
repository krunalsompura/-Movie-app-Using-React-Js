import "./App.css";
import { getMovie } from "./Api";
import { useState } from "react";
import Card from "./Card";
import Cardblank from "./Cardblank";
function App() {
  const [name, setName] = useState("Avenger");
  const [mdata, setMdata] = useState([]);

  const getData = async () => {
    let result = await getMovie(name);
    console.log(result.Search);
    setMdata(result.Search);
    console.log(result.Response);
  };

  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px 40px",
          backgroundColor: "#171717",
        }}
      >
        <h2 style={{ color: "#fff" ,letterSpacing:"2px" }}>MOVI</h2>
        <div>
          <input
            style={{
              height: "40px",
              width: "300px",
              border: "1px solid #fff",
              backgroundColor: "transparent",
              color: "#fff",
              textTransform: "capitalize",
              padding: "0 10px",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
              outline:"0"
            }}
            placeholder="Search Movie.."
            onChange={(e) => setName(e.target.value)}
          />
          <button
            style={{
              height: "40px",
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
              padding: "0 15px",
              cursor: "pointer",
              border:"0",
              outline:"0"
            }}
            onClick={getData}
          >
            Search
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          paddingTop: "15px",
        }}
      >
        {mdata?.length ? (
          mdata.map((item, i) => (
            <Card
              key={i}
              img={item.Poster}
              title={item.Title}
              type={item.Type}
              year={item.Year}
            />
          ))
        ) : (
          <>
            <Cardblank />
            <Cardblank />
            <Cardblank />
            <Cardblank />
          </>
        )}
      </div>
    </div>
  );
}

export default App;