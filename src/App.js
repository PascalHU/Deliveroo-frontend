import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Basket from "./components/Basket";

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState({});
  useEffect(() => {
    const searchData = async () => {
      try {
        // prettier-ignore
        const response = await axios.get("https://reacteur-deliveroo-back.herokuapp.com/")
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    searchData();
  }, []);

  return isLoading ? (
    <span>Loading Screen</span>
  ) : (
    <div>
      <Header data={data.restaurant} />
      <div className="menu container">
        <div className="categories">
          {data.categories.map((categories, index) => {
            return (
              categories.meals.length !== 0 && (
                <Categories
                  key={index}
                  categories={categories}
                  basket={basket}
                  setBasket={setBasket}
                />
              )
            );
          })}
        </div>
        <div className="basket-area">
          <Basket basket={basket} setBasket={setBasket} />
        </div>
      </div>
    </div>
  );
}

export default App;
