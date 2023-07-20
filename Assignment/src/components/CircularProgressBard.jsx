import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

const percentage = 66;

const CircularProgressbarComponent = () => {
  return (
    <Wrapper>
      <hr /> 
      <div className="progressbar"> 
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 80px;
  hr {
    border: 2px solid #ddd;
  }
  display: flex;
  margin-top: 30px;

  .content {
    width: 5%;
    padding-right: 30px;
    h3 {
      font-size: 14px;
      color: #333;
    }
  }

  .progressbar {
    width: 10%;
    h3 {
      font-size: 18px;
      color: #333;
    }
    p {
      font-size: 14px;
      color: #777;
    }
  }
`;
export default CircularProgressbarComponent;
