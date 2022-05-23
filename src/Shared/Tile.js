import styled from "styled-components";

import { subtleBoxShadow, color, greenBoxShadow, redBoxShadow } from "./Styles";

export const Tile = styled.div`
  ${subtleBoxShadow};
  background-color: ${color};
  padding: 10px;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow};
  }
`;

export const DeletableTile = styled(SelectableTile)`
  &:hover {
    ${redBoxShadow}
  }
`;

export const DisabledTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`;
