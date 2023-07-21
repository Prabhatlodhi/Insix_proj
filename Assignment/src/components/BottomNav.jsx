import styled from "styled-components";
import {
  FaArchway,
  FaBook,
  FaCalendarWeek,
  FaFolder,
  FaIdBadge,
} from "react-icons/fa";
const BottomNav = () => {
  return (
    <Wrapper>
      <ul className="app_navigation">
        <li className="tooltip">
          <FaArchway size={22} />
        </li>
        <li className="tooltip">
          <FaBook size={22} />
        </li>
        <li className="tooltip">
          <FaFolder size={22} />
        </li>
        <li className="tooltip">
          <FaCalendarWeek size={22} />
        </li>
        <li className="tooltip">
          <FaIdBadge size={22} />
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (max-width: 380px) {
    width: 100vw;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    position:fixed;
    bottom:0px;
    left:0px;
    background:white;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li {
      margin: 10px 12px;
      border: 1px solid gray;
      border-radius: 5px;
      padding: 5px;
    }
  }
`;
export default BottomNav;
