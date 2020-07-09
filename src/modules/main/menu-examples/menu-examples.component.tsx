import React, { FC } from 'react';
import { css } from 'styled-components';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

import { Example } from '../example';

import Styled from './menu-examples.styles';

const examples = [
  {
    title: 'Seared Salmon Fillet',
    description: 'Our locally sourced salmon served with a refreashing buckwheat summer salad.',
    picture: '/images/salmon.jpg'
  },
  {
    title: 'Rosemary Fillet Mignon',
    description: 'Our prime beef served to your taste with a  delicious choice of seasonal sides.',
    picture: '/images/fillet-mignon.jpeg'
  },
  {
    title: 'Summer Fruit Chocolate Mousse',
    description: 'Creamy mousse combined with summer fruits and dark chocolate shavings',
    picture: '/images/choco-mousse.jpg'
  }
];

export const MenuExamples: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container direction='row'>
        <Flex direction='column'>
          <Styled.Heading>
            A few highlights from our menu
          </Styled.Heading>
          <Text styled={{ Text: css`color: var(--c-light) `}}>
            We cater for all dietary requirements, but here's a glimpse
            at some of our diner;s favourites. Our menu is revamped every season.
          </Text>
        </Flex>

        <Flex direction='column'>
          {examples.map(example => <Example key={example.title} info={example} />)}
        </Flex>
      </Styled.Container>
    </Styled.Wrapper>
  )
};
