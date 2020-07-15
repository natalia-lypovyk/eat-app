import styled from 'styled-components';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

const Container = styled(Flex)`
  max-width: 1300px;
  width: 80%;
  margin: 20px auto 0;
`;

const InfoBlock = styled(Flex)`
  width: 30%;
  margin-right: 20px;
`;

const Heading = styled(Text)`
  margin-bottom: 20px;

  font-size: 2em;
  font-weight: bold;
`;

const Form = styled.form`
  max-width: 800px;
  width: 80%;
  margin: 20px auto 0;
  padding: 15px;
  border: 1px solid black;
  box-sizing: border-box;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
`;

const NameInput = styled.input`
  display: inline-block;
  width: 40%;
  height: 40px;
  margin-left: 10px;
  padding-left: 10px;
  border: 1px solid #a2a2a2;

  &:focus {
    border: 1px solid #000;
  }
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #a2a2a2;

  &:focus {
    border: 1px solid #000;
  }
`;

const NumberInput = styled.input`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-left: 20px;
  padding-left: 10px;
  border: 1px solid #a2a2a2;

  &:focus {
    border: 1px solid #000;
  }
`;

const Styled = { Container, InfoBlock, Heading, Form, Label, Input, NameInput, NumberInput };

export default Styled;
