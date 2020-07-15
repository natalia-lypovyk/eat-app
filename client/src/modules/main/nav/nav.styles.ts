import styled from 'styled-components';
import Text from 'ustudio-ui/components/Text';

const Link = styled(Text)`
  position: relative;

  font-size: 1.5em;
  font-weight: bold;
  color: var(--c-light);
  text-transform: uppercase;

  &::before {
    content: '';

    position: absolute;
    bottom: 0;

    width: 100%;
    height: 2px;
    border-radius: 4px;

    background: var(--c-light);

    transition: opacity 0.4s;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const ListItem = styled.li`
  margin-left: 20px;
`;

const Nav = styled.div`
  max-width: 1300px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled(Text)`
  font-size: 3em;
  font-weight: bold;
  color: var(--c-light);
`;

const Styled = { List, ListItem, Link, Nav, Title };

export default Styled;
