import React, { FC } from 'react';
import Flex from 'ustudio-ui/components/Flex';

import Styled from './footer.styles';

export const Footer: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Title>dine</Styled.Title>
        <Flex direction="row">
          <Flex direction="column">
            <Styled.Info>Phone: 800-2345-6789</Styled.Info>
            <Styled.Info>Address: 4578 Marmora Road, Glasgow D04 89GR</Styled.Info>
            <Styled.Info>E-mail: dine@gmail.com</Styled.Info>
          </Flex>

          <Flex direction="column">
            <Styled.Info>Hours:</Styled.Info>
            <Styled.Info>mon - fri: 09:00 am - 10:00 pm</Styled.Info>
            <Styled.Info>sat - sun: 09:00 am - 11:30 pm</Styled.Info>
          </Flex>
        </Flex>
        <Flex />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
