import styled from 'styled-components';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

const Container = styled(Flex)`
  height: 100vh;
  width: 100%;
  margin-top: -66px;
  background: url('/images/Optimized-photo-1543393287-9f0212fd245a.jpg') fixed center;
  background-size: cover;  
`;

const Content = styled(Flex)`  
  max-width: 1300px;
  width: 80%;
  margin: 30px auto 0;
`;

const Heading = styled(Text)`
  margin: 150px 0 30px;
  
  font-size: 2em;
  font-weight: bold;    
  
  color: var(--c-light);
`;

const Styled = { Container, Content, Heading };

export default Styled;
