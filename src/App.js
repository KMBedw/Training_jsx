import './App.css';
import NotificationComponent from './components/NotificationComponent';
import WrapperComponent from './components/WrapperComponent';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="container">
      <div className='columns'>
        <div className='column'>
          <WrapperComponent/>
          <NotificationComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
