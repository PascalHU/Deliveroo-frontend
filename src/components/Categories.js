import "./categories.css";

import Meals from "./Meals";
const Categories = ({ categories, basket, setBasket }) => {
  return (
    <div className="category">
      <h2>{categories.name}</h2>
      <div className="menu-list">
        {categories.meals.map((product, index) => {
          return (
            <Meals
              key={categories.meals[index].id}
              data={product}
              basket={basket}
              setBasket={setBasket}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
