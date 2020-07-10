import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Styled from './nav.styles';

export const Nav: FC = () => {
  return (
    <Styled.Nav>
      <Styled.Title>Dine</Styled.Title>
      <Styled.List>
        <Styled.ListItem>
          <NavLink to='/' exact>
            <Styled.Link>Home</Styled.Link>
          </NavLink>
        </Styled.ListItem>

        <Styled.ListItem>
          <NavLink to='/menu' exact>
            <Styled.Link>Menu</Styled.Link>
          </NavLink>
        </Styled.ListItem>

        <Styled.ListItem>
          <NavLink to='/reservation' exact>
            <Styled.Link>Reservation</Styled.Link>
          </NavLink>
        </Styled.ListItem>

        <Styled.ListItem>
          <NavLink to='/order' exact>
            <Styled.Link>Order</Styled.Link>
          </NavLink>
        </Styled.ListItem>
      </Styled.List>
    </Styled.Nav>
  )
};
