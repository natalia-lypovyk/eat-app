import React, { FC } from 'react';

import { OrderButton } from '../../../shared/components/order-button';

import Styled from './reservation.styles';

export const Reservation: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container direction='row'>
        <Styled.Heading>Ready to make a reservation?</Styled.Heading>
        <OrderButton />
      </Styled.Container>
    </Styled.Wrapper>
  )
};
