import { useState, React } from 'react'
import NotificationButton from './NotificationButton'
import Notificationcontent from './NotificationContent'


const NotificationComponent= ({
    type = '',
    children = 'votre message',
    displayCloseBtn = false,
}) =>{
    const [showNotification, setShowNotification] = useState(true)
    const handleClick = (e) =>{
        setShowNotification(false)
    }
  return showNotification ?(
    <div className={`notification ${type}`}>
      <NotificationButton
        displayCloseBtn = {displayCloseBtn}
        handleClick={handleClick}
      />
      <Notificationcontent>{children}</Notificationcontent>
    </div>
  ) : null
}

export default NotificationComponent
