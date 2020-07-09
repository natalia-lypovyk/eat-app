import styled from 'styled-components';
import Text from 'ustudio-ui/components/Text';

const Wrapper = styled.section`
  background-color: #000;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  width: 80%;
  margin: 0 auto;
`;

const Title = styled(Text)`
  color: var(--c-light);
  font-size: 2em;
  font-weight: bold;
`;

const Info = styled(Text)`
  color: #ddd;
  text-transform: uppercase;
`;

const Styled = { Wrapper, Container, Title, Info };
export default Styled;
