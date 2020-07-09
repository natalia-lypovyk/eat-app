import styled from 'styled-components';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

const Wrapper = styled(Flex)`
  background: url('/images/bg.jpeg') no-repeat center;
  background-size: cover;
`;

const Container = styled(Flex)`
  max-width: 1300px;
  width: 80%;
  margin: 50px auto;  
`;

const Heading = styled(Text)`
  font-size: 2em;
  font-weight: bold;
  color: var(--c-light);
`;

const Styled = { Container, Wrapper, Heading };

export default Styled;
