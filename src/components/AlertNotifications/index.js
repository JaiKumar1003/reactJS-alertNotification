// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning} from 'react-icons/md'
import {MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="app-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle className="icon success" />
      <h1 className="sub-heading success">Success</h1>
      <p className="description">You can access all the files in the folder</p>
    </Notification>
    <Notification>
      <RiErrorWarningFill className="icon error" />
      <h1 className="sub-heading error">Error</h1>
      <p className="description">
        Sorry, you are not authorized to have access to delete the file
      </p>
    </Notification>
    <Notification>
      <MdWarning className="icon warning" />
      <h1 className="sub-heading warning">Warning</h1>
      <p className="description">
        Viewers of this file can see comments and suggestions
      </p>
    </Notification>
    <Notification>
      <MdInfo className="icon info" />
      <h1 className="sub-heading info">Info</h1>
      <p className="description">Anyone on the internet can view these files</p>
    </Notification>
  </div>
)

export default AlertNotifications
