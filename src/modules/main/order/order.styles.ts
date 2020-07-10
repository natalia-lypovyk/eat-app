import styled from 'styled-components';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

const PictureBlock = styled.div`
  width: 500px;
  height: 750px;
  
  background: url('/images/family.jpeg') no-repeat;
  background-size: contain;  
`;

const Container = styled(Flex)`
  max-width: 1300px;
  width: 80%;
  margin: 50px auto 0;
`;

const Heading = styled(Text)`
  margin-bottom: 20px;
  
  font-size: 2em;
  font-weight: bold;
`;

const Content = styled(Flex)`
  margin-left: 50px;
`;

const Option = styled(Text)`
  margin: 10px 0;
  
  color: #a2a2a2;
  text-transform: uppercase;  
`;

const Styled = { PictureBlock, Container, Content, Heading, Option };

export default Styled;
