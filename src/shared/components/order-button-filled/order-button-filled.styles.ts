import styled from "styled-components";

const OrderButton = styled.button`
  margin-top: 60px;
  
  width: 200px;
  height: 50px;
  
  background: #000;
  border: 1px solid #000;
  
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: var(--c-light);
  
  transition: color 0.4s linear, border 0.4s linear, background 0.4s linear;
  
  &:hover {
    color: #000;
    background: transparent;
    border: 1px solid #000; 
  }
`;

const Styled = { OrderButton };

export default Styled;
