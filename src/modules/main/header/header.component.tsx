import React, { FC } from 'react';
import { css } from 'styled-components';
import Text from 'ustudio-ui/components/Text';

import { OrderButton } from '../../../shared/components/order-button';

import Styled from './header.styles';

export const Header: FC = () => {
  return (
    <Styled.Container>
      <Styled.Content direction='column'>
        <Styled.Title>Dine</Styled.Title>
        <Styled.Heading>
          Exquisite dining since 1989
        </Styled.Heading>
        <Text styled={{
          Text: css`
            color: var(--c-light);
            margin-bottom: 50px;
          `,
        }}>
          Experience our seasonal menu in beautiful country surroundings.
          Eat the freshest produce from the comfort of our farmhouse.
        </Text>
        <OrderButton />
      </Styled.Content>
    </Styled.Container>
  )
};
