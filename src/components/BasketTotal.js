import "./baskettotal.css";
const BasketTotal = ({ preTotal }) => {
  const total = (Number(preTotal) + 2.5).toFixed(2);
  return (
    <div className="price">
      <div className="pre-total">
        <div className="sous-total">
          <span>Sous-total</span>
          <span>{preTotal} €</span>
        </div>
        <div className="fee">
          <span>Frais de livraison</span>
          <span>2.50 €</span>
        </div>
      </div>
      <div className="total">
        <span>Total</span>
        <span>{total} €</span>
      </div>
    </div>
  );
};

export default BasketTotal;
