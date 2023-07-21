import { ProgressBar,   } from 'react-bootstrap';

const ProgressBarCompo = () => {
  return (
    <div>
      <ProgressBar now={11} label={`${11}% completed`} />
    </div>
  )
}

export default ProgressBarCompo
