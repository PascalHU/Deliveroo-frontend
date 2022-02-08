import "./basketlist.css";
const BasketList = ({ meal, basket, setBasket }) => {
  const ModifyBasketRemove = (name) => {
    const newBasket = { ...basket };
    newBasket[name].quantity = newBasket[name].quantity - 1;
    newBasket[name].total = (
      Number(newBasket[name].total) - Number(newBasket[name].price)
    ).toFixed(2);
    if (newBasket[name].quantity === 0) {
      delete newBasket[name];
    }
    setBasket(newBasket);
  };

  const ModifyBasketAdd = (name) => {
    const newBasket = { ...basket };
    newBasket[name].quantity = newBasket[name].quantity + 1;
    newBasket[name].total = (
      Number(newBasket[name].total) + Number(newBasket[name].price)
    ).toFixed(2);
    setBasket(newBasket);
  };

  return (
    <div className="element">
      <button onClick={() => ModifyBasketRemove(meal.name)}>-</button>
      <span>{meal.quantity}</span>
      <button onClick={() => ModifyBasketAdd(meal.name)}>+</button>
      <span>{meal.name}</span>
      <span>{meal.total} €</span>
    </div>
  );
};
export default BasketList;
