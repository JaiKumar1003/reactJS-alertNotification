// Write your code here

import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="alert-notification-card">
      {children[0]}
      <div className="heading-description-card">
        {children[1]}
        {children[2]}
      </div>
      <GrFormClose className="error-icon" />
    </div>
  )
}

export default Notification
