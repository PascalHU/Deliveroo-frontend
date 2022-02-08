import "./basket.css";
import "./basketlist.css";
import BasketList from "./BasketList";
import BasketTotal from "./BasketTotal";

const Basket = ({ basket, setBasket }) => {
  const list = [];
  let totalPrice = "";
  let totalQuantity = 0;
  for (let i = 0; i < Object.keys(basket).length; i++) {
    list.push({
      name: Object.keys(basket)[i],
      quantity: Object.values(basket)[i].quantity,
      price: Object.values(basket)[i].price,
      total: Object.values(basket)[i].total,
    });
    totalPrice = (
      Number(totalPrice) + Number(Object.values(basket)[i].total)
    ).toFixed(2);
    totalQuantity += Object.values(basket)[i].quantity;
  }

  const showBasket = () => {
    document.getElementById("mini-basket").classList.add("hidden");
    document.getElementById("mini-basket-info").classList.remove("hidden");
  };

  return list.length > 0 ? (
    <>
      <div className="basket">
        <button className="valid-basket">Valider mon panier</button>
        <div className="basket-article">
          {list.map((meal, index) => {
            return (
              <BasketList
                key={index}
                meal={meal}
                setBasket={setBasket}
                basket={basket}
              />
            );
          })}
          <BasketTotal preTotal={totalPrice} />
        </div>
      </div>
      <div id="mini-basket" className="minimize-basket">
        <div onClick={showBasket} className="minimize-basket-button">
          <div>
            <span>{totalQuantity}</span>
          </div>
          <span>Voir le Panier</span>
          <span>{(Number(totalPrice) + 2.5).toFixed(2)} €</span>
        </div>
      </div>
      <div id="mini-basket-info" className="minimize-basket-info hidden">
        {list.map((meal, index) => {
          return (
            <BasketList
              key={index}
              meal={meal}
              setBasket={setBasket}
              basket={basket}
            />
          );
        })}
        <BasketTotal preTotal={totalPrice} />
        <div className="mini-basket-valid-btn">Valider mon panier</div>
      </div>
    </>
  ) : (
    <>
      <div className="empty-basket">
        <button disabled>Valider mon panier</button>
        <div>
          <span>Votre panier est vide</span>
        </div>
      </div>
      <div className="minimize-empty-basket">
        <button disabled>Voir le panier</button>
      </div>
    </>
  );
};
export default Basket;
