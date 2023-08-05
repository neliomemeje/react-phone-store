import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  color: ${(props) =>
    props.$cart ? "var(--main-yellow)" : "var(--main-dark)"};
  font-size: 1.5rem;
  border: 0.125rem solid var(--main-dark);
  border-color: ${(props) =>
    props.$cart ? "var(--main-yellow)" : "var(--main-dark)"};
  border-radius: 0.3rem;
  padding: 0.3rem 0.5rem;
  margin: 0.3rem 0.5rem 0.3rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${(props) =>
      props.$cart ? "var(--main-dark)" : "var(--main-yellow)"};
    background: ${(props) =>
      props.$cart ? "var(--main-yellow)" : "var(--main-dark)"};
  }
`;

export const ProductEl = styled.div`
  .card {
    border: none;
    transition: all 0.5s ease-in-out;
  }

  .card-footer {
    border-top: none;
    background: transparent;
  }

  .card-img-top {
    transition: all 0.5s ease-in-out;
  }

  &:hover .card-img-top {
    transform: scale(1.1);
  }

  &:hover .card {
    border: 0.125rem rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }
  .cart-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0.5rem 0.8rem;
    border: none;
    border-radius: 5px;
    font-size: 1.4rem;
    background: var(--main-blue);
    color: white;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
  }

  .cart-btn:hover {
    background: var(--main-dark);
    color: var(--main-yellow);
  }

  &:hover .cart-btn {
    transform: translate(0, 0);
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  #modal {
    background: #fff;
    border-radius: 5px;
  }
  #item-added {
    animation: blinker 1.5s linear infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;
