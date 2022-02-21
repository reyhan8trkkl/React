import axios from "axios";
import React, { useState } from "react";
import Alert from "./Alert";
import Recipe from "./Recipe";


const App = () => {
  const [query, setQery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert,setAlert] = useState("")

  const appid = ".....";
  const appkey = "......";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${appid}&app_key=${appkey}`;

  const getData = async () => {
    if(query !==""){
      const result = await axios.get(url, {
        params: {
          q: "chicken",
          app_key: appid,
          app_id: appkey,
          origin: "*",
          format: "json",
        },
      });
      if(!result.data.more){
       return setAlert("No food with such a name")
      }
      setRecipes(result.data.hits);
      console.log(result);
      setAlert("")
      setQery("");
    }else{
      setAlert("Fill the form!")
    }
    }
   
  const onSub = (e) => {
    e.preventDefault();
    getData();
  };
  const onChange = (e) => {
    setQery(e.target.value);
  };

  return (
    <div className="App">
      <h1 onClick={getData}>Food Searching App</h1>
      <form className="search-form" onSubmit={onSub}>
        { alert !== "" && <Alert alert={alert} />}
        <input 
          type="text"
          placeholder="Search Food..."
          autoComplete="off"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] && recipes.map((recipe,i) => <Recipe key={i} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default App;
