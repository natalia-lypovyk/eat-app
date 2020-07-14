import styled, { css } from 'styled-components';
import Text from 'ustudio-ui/components/Text';

interface Picture {
  picture: string;
}

const PictureBlock = styled.div<Picture>(
  ({ picture }) => css`    
    width: 100px;
    height: 100px;
    margin-right: 10px;
    border-radius: 4px;
    
    background: url('${picture}') no-repeat;
    background-size: contain;
  `
);

const Heading = styled(Text)`
  margin-bottom: 10px;

  font-weight: bold;
  color: var(--c-light);
`;

const Styled = { Heading, PictureBlock };

export default Styled;
