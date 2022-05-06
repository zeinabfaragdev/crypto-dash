import styled from "styled-components";

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

const AppBar = () => {
  return (
    <Bar>
      <div> CryptoDash</div>
      <div />
      <div> Dashboard</div>
      <div> Settings</div>
    </Bar>
  );
};

export default AppBar;
