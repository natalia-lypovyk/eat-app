import React, { FC } from 'react';
import Text from 'ustudio-ui/components/Text';
import { css } from 'styled-components';

import { OrderButtonFilled } from '../../../shared/components/order-button-filled';

import Styled from './order.styles';

export const Order: FC = () => {
  return (
    <Styled.Container direction="row">
      <Styled.PictureBlock />

      <Styled.Content direction="column">
        <Styled.Heading>Family Gathering</Styled.Heading>
        <Text>
          We love catering for entire families. So please bring everyone along for a special meal with your loved ones.
          We will provide a memorable experience for all.
        </Text>
        <OrderButtonFilled />

        <Text
          styled={{
            Text: css`
              margin-top: 50px;
              text-transform: uppercase;
            `,
          }}
        >
          Family gathering
        </Text>
        <Styled.Option>Special events</Styled.Option>
        <Styled.Option>Social events</Styled.Option>
      </Styled.Content>
    </Styled.Container>
  );
};
