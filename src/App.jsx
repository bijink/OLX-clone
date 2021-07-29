import React, { useEffect, useContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import { AuthContext, FirebaseContext } from './Store/Context';
import CreatePage from './Pages/CreatePage';
import ViewPost from './Pages/ViewPost';
import * as ReactBootstrap from 'react-bootstrap';
// import LoadingBar from 'react-top-loading-bar';

function App() {

   const { setUser } = useContext(AuthContext);
   const { firebase } = useContext(FirebaseContext);
   const [loading, setLoading] = useState(null);
   // const [progress, setProgress] = useState(0);

   // const loader = css`
   //    margin : 45%;
   // `;

   useEffect(() => {
      // console.log(user);
      firebase.auth().onAuthStateChanged(user => {
         setUser(user);
         setLoading(true);
         // setProgress(100);
      });
   });

   return (
      <div>
         {
            loading
               ?
               <Router>
                  <Route exact path='/'>
                     <HomePage />
                  </Route>
                  <Route path='/signup' >
                     <SignupPage />
                  </Route>
                  <Route path='/login' >
                     <LoginPage />
                  </Route>
                  <Route path='/create' >
                     <CreatePage />
                  </Route>
                  <Route path='/view' >
                     <ViewPost />
                  </Route>
               </Router>
               :
               <div className="parentSpinnerDiv">
                  <div className="spinner"><ReactBootstrap.Spinner animation="grow" variant="danger" size="sm" /></div>
                  <div className="spinner"><ReactBootstrap.Spinner animation="grow" variant="primary" size="lg" /></div>
                  <div className="spinner"><ReactBootstrap.Spinner animation="grow" variant="danger" size="sm" /></div>
               </div>
         }
      </div>
   );
}

export default App;
