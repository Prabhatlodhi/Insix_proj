import Navbar from "../components/Navbar";
import UserDetails from "../components/UserDetails";
import styled from "styled-components";

const MainPage = () => {
  return (
    <MainWrapper>
      <Navbar />
      <UserDetails />
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  display: flex;
`;
export default MainPage;
