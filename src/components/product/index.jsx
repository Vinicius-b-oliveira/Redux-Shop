import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProductsToCart, removeProductFromCart } from "../../store/actions/cart";

const Product = ({ name, price, page, id }) => {

  const dispatch = useDispatch()

  return (
    <ListItem>
      <div>
        <h3>{name}</h3>
        <p>
          {price.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      {
        page === 'home' ?
          <button onClick={() => dispatch(addProductsToCart({ name, price, id }))}>
            Adicionar ao carrinho
          </button>
          :
          <button onClick={() => dispatch(removeProductFromCart(id))}>
            Remover do carrinho
          </button>
      }
    </ListItem>
  );
};

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  background-color: #38405F;

  h3 {
      margin-bottom: 10px;
  }

  button {
      align-self: center;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #DC602E;
      background-color: #DC602E;
      color: #ffffff;
      cursor: pointer;
      transition: .2s ease-in-out;

      &:hover {
        background-color: #38405F;
        color: #DC602E;
      }
  }
`;

export { Product };
