/* eslint-disable react/prop-types */
import s from "./Card.module.css"
import {Link} from "react-router-dom"

//esto es nuevo
const Card = ({ product, handleAddProduct }) => {
  const { name, price, colour, image, id } = product;
  return (
    <div className={s.productCard}>        
      {/* {image && <img src={https://${image}} alt={name} className={s.productImage} />} */}
      {image && <img src={image} alt={name} className={s.productImage} />}

      <Link to={`/product/${id}`}> <h3>{name}</h3></Link>
      <p>Precio: {`$${price}`}</p>
      <p>Color: {colour}</p>
      <button
       className={s.productAddButton} 
       onClick={() => handleAddProduct(product)}>Añadir al carrito</button>
    </div>
  );
}

export default Card