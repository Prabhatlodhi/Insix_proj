import styled from "styled-components";

const RightPortion = () => {
  return (
    <Wrapper>
      <div>
        <h3>Retirement Strategy</h3>
        <ul>
          <li>
            <p>Employee Contribution</p>
            <progress value={40} max={100} min={0}></progress>
            <span> 40 %</span>
          </li>
          <li>
            <p>Retirement Age</p>
            <progress value={80} max={100} min={0}></progress>
            <span> 80 %</span>
          </li>
        </ul>
      </div>
      <div className="min-wrapper">
        <p>
          Employer Contribution <span>8.4 %</span>
        </p>
        <p>
          Interest Rate <span>5 %</span>
        </p>
        <button>Update</button>
        <h4 className="link">View Help Docs &gt; </h4>
      </div>
      <div className="bottom-container">
        <p>Are you considering a</p>
        <h3>Housing Advance ?</h3>
        <h5>Limited time reduced interest</h5>
        <h6>Learn More &gt; </h6>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 45px 20px;
  p {
      font-size: 14px;
  }
  .min-wrapper {
    margin: 40px 0px;
    p {
      font-size: 14px;
      margin-bottom: 16px;
    }
    button {
      width: 230px;
      height: var(--btnheight);
      margin-left: 25px;
      background: var(--primary);
      border-radius: 5px;
      color: white;
    }
  }
  .link {
    color: var(--primary);
  }
  li {
    margin-top: 25px;
  }
  span {
    margin-left: 15px;
  }

  h4 {
    margin: 35px 65px;
  }
  h5 {
    color: var(--grayshades);
  }
  h6 {
    color: var(--primary);
  }
  .bottom-container {
    padding-left: 15px;
    border-left: 1px solid gray;
  }
  @media (max-width: 380px) { 
    text-align:center;
    width:100%;
    margin:0px auto;
    padding-bottom:80px;
  }
`;
export default RightPortion;
