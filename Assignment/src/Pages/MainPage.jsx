import MidSection from "../components/MidSection";
import Navbar from "../components/Navbar";
import RightPortion from "../components/RightPortion";
import UserDetails from "../components/UserDetails";
import styled from "styled-components";

const MainPage = () => {
  return (
    <MainWrapper>
      <Navbar />
      <UserDetails />
      <MidSection/>
      <RightPortion/>
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  display: flex;
`;
export default MainPage;
