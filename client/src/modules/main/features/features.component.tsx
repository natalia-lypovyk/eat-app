import React, { FC } from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

import Styled from './features.styles';

export const Features: FC = () => {
  return (
    <Styled.Container direction="column">
      <Flex
        direction="row"
        alignment={{
          horizontal: 'space-between',
        }}
      >
        <Styled.ImageContainer1 />
        <Flex direction="column">
          <Styled.Heading>Enjoyable place for all family</Styled.Heading>
          <Text>
            Our relaxed surroundings make dining with us a great experiment for everyone. We can even arrange a tour of
            the farm before your meal.
          </Text>
        </Flex>
      </Flex>

      <Flex direction="row">
        <Styled.ImageContainer2 />
        <Flex direction="column">
          <Styled.Heading>The most locally sourced food</Styled.Heading>
          <Text>
            All our ingredients come directly from our farm or local fishery. So you can be sure that you are eating
            most sustainable food.
          </Text>
        </Flex>
      </Flex>
    </Styled.Container>
  );
};
