import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import  {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function App() {
  const [session]  = useAuthState(auth);
  return (
    <div className="app">

      {!session ? (<Login />) 
      :(
        <>
         <Header />
          <div className='app_body'>
           <Sidebar />
           <Feed />
           {/* <Widgets /> */}
          </div>
        </>
      )}
     
    </div>
  );
}

export default App;
