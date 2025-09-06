import "./App.css";

const AppChild = ({ element, handleCart }) => {
  // console.log(element);
  const { title, price, description, image } = element;
  return (
    <div>
      <div className="product">
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{description.slice(0, 75)}</p>
        <h3>Price : {price} Taka </h3>
        <button onClick={() => handleCart(element)} className="btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AppChild;
