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
      <div className="bottom-container" >
        <div>
          <h5>These numbers represents current goal achievement</h5>
          <h3>How do I compare my peers?</h3>
        </div>
        <div className="circular-portion-wrapper">
          <ul>
            <li>
              Age:
              <select>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
              </select>
            </li>
            <li>
              Salary:
              <select>
                <option value="20K">20K</option>
                <option value="25K">25K</option>
                <option value="30K">30K</option>
              </select>
            </li>
            <li>
              Gender:
              <select>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </li>
          </ul>

          <div className="circular-part">
            <CircularProgressbarComponent percentage={11} />
            <CircularProgressbarComponent percentage={22} />
            <CircularProgressbarComponent percentage={33} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`  
margin: 0px 40px;
  padding: 0px 40px;
  padding-top:10px;
  width: 50%;
  hr {
    margin-top: 10px;
  }
  li{
    font-size:14px;
  }
  h4 {
    color: var(--primary);
  }
  h5 {
    color: var(--grayshades);
  }
  .retire-income {
    padding-left: 18px;
    padding-top:35px;
  }
  .goal {
    width: 200px;
    margin: 20px 20px;
  }

  .hh {
    border: 1px solid red;
  }
   

  .wrapper {
    display: flex;
    justify-content: space-evenly;
  }
  .circular-portion-wrapper {
    display: flex;
    align-items:center; 
    margin-top:15px;
  }
  .circular-part {
    display: flex; 
    width:500px;
    justify-content:space-evenly;
    padding:0px 20px; 
  }
  select {
    border: none;
    margin-bottom:9px;
  }
  .bottom-container{
    margin-top:30px;
    margin-left:20px;
  }
`;

export default MidSection;
