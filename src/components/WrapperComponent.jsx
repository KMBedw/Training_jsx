import React from 'react'
import NotificationComponent from './NotificationComponent'

const WrapperComponent = () => (
  <div className="box mt-6">
    <NotificationComponent type="is-danger" displayCloseBtn={true} >
      Je suis un message d’alerte
    </NotificationComponent>
    <NotificationComponent type="is-success" displayCloseBtn={true}>
     Je suis un message de succès
    </NotificationComponent>
  </div>
)

export default WrapperComponent
