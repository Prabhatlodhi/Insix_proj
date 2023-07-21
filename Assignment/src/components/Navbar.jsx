import styled from "styled-components";
import {
  FaPhoenixFramework,
  FaSearchengin,
  FaArchway,
  FaBook,
  FaCalendarWeek,
  FaFolder,
  FaIdBadge,
  FaGripfire,
  FaMagento,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <Wrapper>
      <ul>
        <li className="tooltip">
          <span className="tooltiptext">Logo</span>
          <FaPhoenixFramework size={22} />
        </li>
        <li className="tooltip">
          <span className="tooltiptext">Search</span>
          <FaSearchengin size={22} />
        </li>
      </ul>
      <ul className="app_navigation">
        <li className="tooltip">
          <FaArchway size={22} />
        </li>
        <li className="tooltip">
          <span className="tooltiptext">Contact</span>
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
      <ul>
        <li className="tooltip">
          <span className="tooltiptext">Logout</span>
          <FaGripfire size={22} />
        </li>
        <li className="tooltip">
          <FaMagento size={22} />
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section` 
  width: max-content;
  height: 100vh; 
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  li {
    display: flex;
    border: 1px solid gray;
    width: max-content;
    border-radius: 5px;
    padding: 5px;
    margin: 15px;
  }

  .app_navigation {
    margin-top: 100px;
    margin-bottom: 120px;
  }
  .tooltip {
    position: relative;
    border-bottom: 1px dotted black;
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    left: 35px;
    bottom: 1px;
  }
 
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
`;

export default Navbar;
