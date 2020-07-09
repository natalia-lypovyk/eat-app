import styled from 'styled-components';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

const Container = styled(Flex)`
  background: url('/images/Optimized-photo-1543393287-9f0212fd245a.jpg') fixed center;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const Content = styled(Flex)`
  max-width: 1300px;
  width: 80%;
  margin: 30px auto 0;
`;

const Title = styled(Text)`
  font-size: 3em;
  font-weight: bold;  
  color: var(--c-light);
`;

const Heading = styled(Text)`
  margin: 150px 0 30px;
  
  font-size: 2em;
  font-weight: bold;    
  
  color: var(--c-light);
`;

const Styled = { Container, Title, Content, Heading };

export default Styled;
