import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "./redux/pageActions";

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 40px;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;
const ControlButtomElem = styled.div`
  cursor: pointer;
  text-transform: capitalize;
  ${(props) =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
    `}
`;

const ControlButton = ({ name }) => {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  return (
    <ControlButtomElem
      onClick={() => dispatch(setPage(name))}
      active={page === name}
    >
      {name}
    </ControlButtomElem>
  );
};

const AppBar = () => {
  return (
    <Bar>
      <Logo> CryptoDash</Logo>
      <div />
      <ControlButton name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
};

export default AppBar;
