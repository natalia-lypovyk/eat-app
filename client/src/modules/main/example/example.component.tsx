import React, { FC } from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';
import { css } from 'styled-components';

import Styled from './example.styles';

interface Props {
  title: string;
  description: string;
  picture: string;
}

export const Example: FC<{ info: Props }> = ({ info }) => {
  return (
    <Flex direction="row">
      <Styled.PictureBlock picture={info.picture} />
      <Flex direction="column">
        <Styled.Heading>{info.title}</Styled.Heading>
        <Text
          styled={{
            Text: css`
              color: var(--c-light);
            `,
          }}
        >
          {info.description}
        </Text>
      </Flex>
    </Flex>
  );
};
