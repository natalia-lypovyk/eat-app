import styled from 'styled-components';

const OrderButton = styled.button`
  margin-top: 60px;

  width: 200px;
  height: 50px;

  background: #000;
  border: 2px solid #000;

  font-weight: bold;
  color: var(--c-light);
  text-align: center;
  text-transform: uppercase;

  transition: color 0.4s linear, border 0.4s linear, background 0.4s linear;

  &:hover {
    border: 2px solid #000;

    background: transparent;

    color: #000;
  }
`;

const Styled = { OrderButton };

export default Styled;
