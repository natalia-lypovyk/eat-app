import styled from 'styled-components';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

const Wrapper = styled(Flex)`
  background: #000;
  width: 100%;
`;

const Container = styled(Flex)`
  max-width: 1300px;
  width: 80%;
  margin: 50px auto 0;
`;

const Heading = styled(Text)`
  font-size: 2em;
  font-weight: bold;
  color: var(--c-light);
`;

const Styled = { Wrapper, Container, Heading };

export default Styled;
