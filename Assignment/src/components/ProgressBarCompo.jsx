import { ProgressBar } from "react-bootstrap";

const ProgressBarCompo = () => {
  const percentage = 73;

  return (
    <div className="progressBar">
      <ProgressBar now={percentage} label={`${percentage}% completed`} />
    </div>
  );
};

export default ProgressBarCompo;
