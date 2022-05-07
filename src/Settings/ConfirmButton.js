import styled from "styled-components";
import { useDispatch } from "react-redux";
import { confirmFavorites } from "../redux/page/pageActions";
import { fontSize1, greenBoxShadow, color3 } from "../Shared/Styles";

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
  color: ${color3};
  ${fontSize1}
  padding: 5px;
  &:hover {
    ${greenBoxShadow}
  }
`;

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

const ConfirmButton = () => {
  const dispatch = useDispatch();

  return (
    <CenterDiv>
      <ConfirmButtonStyled onClick={() => dispatch(confirmFavorites())}>
        Confirm Favorites
      </ConfirmButtonStyled>
    </CenterDiv>
  );
};

export default ConfirmButton;
