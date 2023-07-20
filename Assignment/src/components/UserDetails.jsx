import styled from "styled-components";
import GirlLogo from "./assets/GirlImage.webp";

const UserDetails = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);

  return (
    <Wrapper>
      <div className="image_container">
        <img src={GirlLogo} alt="GirlLogo" className="Girllogo" />
        <ul className="userDetail">
          <li>
            <b>Hi, Mike</b>
          </li>
          <li>
            <h1>Welcome Back</h1>
          </li>
        </ul>
      </div>
      <div className="todays-transactions">
        <ul>
          <span>Today</span>
          <li>
            <b>$ 19, 999</b>
          </li>
          <li>
            <h5>Account Balance</h5>
          </li>
          <li>
            <span>$ 4,000</span>
          </li>
          <li>
            <h5>Year-to-date contribution</h5>
          </li>
          <li>
            <span>$ 1,787</span>
          </li>
          <li>
            <h5>Total Interest</h5>
          </li>
        </ul>
        <select name="transaction" id="transaction" className="select-bar">
          <option value="withdraw">Withdraw</option>
          <option value="deposit">Deposit</option>
          <option value="transfer">Transfer</option>
          <option value="balance">Check Balance</option>
        </select>

        <div>
          <ul className="recent-transactions">
            <span>Recent Transactions</span>
            <li>
              <h4>{formattedDate}</h4>
            </li>
            <li>
              <h5 className="dates">Withdrawal Transfer to bank XXXX</h5>
            </li>
            <li>
              <h4>{formattedDate}</h4>
            </li>
            <li>
              <h5 className="dates">Withdrawal Transfer to bank XXXX</h5>
            </li>
            <li>
              <h4>{formattedDate}</h4>
            </li>
            <li>
              <h5 className="dates">Withdrawal Transfer to bank XXXX</h5>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .image_container {
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:40px;
  }

  b {
    font-size: 24px;
  }

  h2 {
    color: var(--grayshades);
    margin-bottom: 10px;
  }
  h4 {
    color: var(--grayshades);
    margin-top: 20px;
  }
  h5 {
    margin-bottom: 20px;
    color: var(--grayshades);
  }

  .dates {
    margin-bottom: 30px;
    color: black !important;
  }

  .Girllogo {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }

  .userDetail { 
    margin-left: 10px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .todays-transactions {
    margin-left: 80px;
  }

  .select-bar {
    background-color: var(--primary);
    width: var(--btnwidth);
    height: var(--btnheight);
    border-radius: var(--btnborderRadiusBtn);
    margin-bottom: 20px;
    color:white;
    padding:5px;
  }
`;

export default UserDetails;
