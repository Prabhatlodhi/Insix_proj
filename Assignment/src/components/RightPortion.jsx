import styled from "styled-components";
import ProgressBarCompo from "./ProgressBarCompo";

const RightPortion = () => {
  return (
    <Wrapper>
      <div>
        <h3>Retirement Strategy</h3>
        <ul>
          <span>dd</span>
          <li>
            <span>ff</span>
            <ProgressBarCompo/>
          </li>
          <li>kk</li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;
`;
export default RightPortion;
