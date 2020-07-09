import styled from 'styled-components';

const OrderButton = styled.button`
  display: block;
  width: 200px;
  height: 50px;
  border: 1px solid var(--c-light);
  
  background: transparent;
  
  font-weight: bold;
  color: var(--c-light);
  text-transform: uppercase;
  text-align: center; 
  
  transition: color 0.4s linear, background 0.4s linear;
  
  &:hover {    
    color: #000; 
    background: var(--c-light);
  }
`;

const Styled = { OrderButton };

export default Styled;
