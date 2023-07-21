import PropTypes from "prop-types";
import styled from "styled-components";

const CircularProgressbarComponent = ({ percentage }) => {
  return (
    <Wrapper>
      <div className="progress-bar">
        <progress value="75" min="0" max="100">
          {percentage}
        </progress>
      </div>
    </Wrapper>
  );
};

CircularProgressbarComponent.propTypes = {
  percentage: PropTypes.number.isRequired,
};

const Wrapper = styled.div`
  progress {
    visibility: hidden;
    height: 0;
    width: 0;
    
  }
  .progress-bar {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    ${'' /* margin:0px 50px; */}
    background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
      conic-gradient(var(--primary) 75%, var(--secondary) 0);
  }
  .progress-bar::before {
  content: "75%"; 
  position: relative;
  top:30px;
  left:30px;
}
`;

export default CircularProgressbarComponent;
