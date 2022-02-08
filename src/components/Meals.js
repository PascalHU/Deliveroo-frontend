import "./meals.css";

const Meals = ({ data, basket, setBasket }) => {
  const { title, description, popular, picture, price } = data;

  const addToBasket = (title) => {
    const newBasket = { ...basket };

    if (newBasket[title]) {
      newBasket[title].quantity = newBasket[title].quantity + 1;
      newBasket[title].total = (
        Number(newBasket[title].total) + Number(price)
      ).toFixed(2);
    } else {
      newBasket[title] = { quantity: 1, price: price, total: price };
    }
    setBasket(newBasket);
  };
  return (
    <div onClick={() => addToBasket(title)} className="meal">
      <div className="meal-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="price">{price} €</span>
        {popular && <span className="popular">• Populaire</span>}
      </div>
      {picture && <img src={picture} alt=""></img>}
    </div>
  );
};
export default Meals;
