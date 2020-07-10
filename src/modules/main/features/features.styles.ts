import styled from 'styled-components';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

const Container = styled(Flex)`
  max-width: 1300px;
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
`;

const Heading = styled(Text)`
  margin: 100px 0 30px;
  
  font-size: 2em;
  font-weight: bold;  
`;

const ImageContainer1 = styled.div`
  width: 400px;
  height: 700px;
  
  background: url('/images/pexels-photo-1673876.jpeg') no-repeat;
  background-size: contain;  
`;

const ImageContainer2 = styled.div`
  width: 400px;
  height: 700px;
  
  background: url('/images/cooking.jpeg') no-repeat;
  background-size: contain;  
`;

const Styled = { Container, Heading, ImageContainer1, ImageContainer2 };

export default Styled;
