import BottomNav from "../components/BottomNav";
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
      <MidSection />
      <RightPortion />
      <BottomNav />
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
export default MainPage;
