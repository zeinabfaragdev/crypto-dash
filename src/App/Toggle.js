import DarkModeToggle from "react-dark-mode-toggle";
import { useDispatch } from "react-redux";
import { setTheme } from "../redux/page/pageActions";
import { createGlobalStyle } from "styled-components";
import { bodyStyles } from "../Shared/Styles";
import styled from "styled-components";

const Toggle = ({ theme }) => {
  let checked = theme === "dark" ? true : false;

  const dispatch = useDispatch();

  const handleTheme = () => {
    if (theme === "dark") {
      checked = false;
      dispatch(setTheme("light"));
    } else {
      checked = true;
      dispatch(setTheme("dark"));
    }
  };

  const GlobalStyle = createGlobalStyle`
      body {
        ${bodyStyles}
      }`;

  const ToggleWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 40px;
  `;

  return (
    <ToggleWrapper>
      <GlobalStyle />
      <DarkModeToggle onChange={handleTheme} checked={checked} size={60} />
    </ToggleWrapper>
  );
};

export default Toggle;
