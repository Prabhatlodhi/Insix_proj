import styled from "styled-components";
import Grapha from "./Grapha";  
import CircularProgressbarComponent from "./CircularProgressBard";

const MidSection = () => {
  return (
    <Wrapper>
      <div className="retire-income">
        <h4>Retirement Income</h4>
        <h1>Staring Year 2056</h1>
      </div>
      <div className="wrapper">
        <div className="goal">
          <h1>$ 300,000</h1>
          <h5>My Goal</h5>
          <hr />
        </div>
        <div className="goal">
          <h1>$ 300,000</h1>
          <h5>My Goal</h5>
          <hr />
        </div>
        <div className="goal">
          <h1>$ 300,000</h1>
          <h5>My Goal</h5>
          <hr />
        </div>
      </div>
        <Grapha />
        <div>
       <CircularProgressbarComponent/>
        </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border: 1px solid red;
  padding: 40px;
  width: 50%;
  hr {
    margin-top: 10px;
  }
  h4{
    color:var(--primary)
  }
  h5{
    color:var(--grayshades)
  }
  .retire-income { 
    padding-left:35px;
  }
  .goal { 
    width:200px;
    margin:40px;
  }

  .wrapper {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default MidSection;
