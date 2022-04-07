import React, { useContext } from 'react';
import './UserProfile.scss';
import { useNavigate } from 'react-router-dom';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { SignUpUsernameContext } from '../../Store/SignUpUsernameContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Config';
// import { UserProfilePopUpTriggerCon } from '../../Store/UserProfilePopUpTriggerContext';


const UserProfile = () => {
   const navigate = useNavigate();

   const { user } = useContext(AuthContext);
   // const { firebase } = useContext(FirebaseContext);
   const { setSignUpName } = useContext(SignUpUsernameContext);
   // const { userProfilePopUpTrigger, setUserProfilePopUpTrigger } = useContext(UserProfilePopUpTriggerCon);

   return (
      <div className="userProfileParentDiv">
         <div className="userProfileChildDiv">
            <div className="userDetails">
               <div className="icon"><h1>{user ? (user.displayName.charAt(0).toUpperCase()) : ''}</h1></div>
               <div className="details">
                  <p>Hello,</p>
                  {/* <h2>{user && user.displayName}</h2> */}
                  <h2>{user && user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)}</h2>
                  {/* <h3>{user && uu}</h3> */}
                  <h3>{user && user.email}</h3>
               </div>
            </div>
            <div className="features">
               <div className="rows favourite" onClick={() => {
                  // setUserProfilePopUpTrigger(false);
                  navigate('/favourite');
               }}>
                  <div className="logo">
                     <i className="far fa-heart"></i>
                  </div>
                  <span>Favorite</span>
               </div>
               <div className="rows logout" onClick={() => {
                  // setUserProfilePopUpTrigger(false);
                  let confirmLogout = window.confirm("Are you sure you want to logout ?");
                  if (confirmLogout) {
                     // // setValue(null);
                     // firebase.auth().signOut();
                     // navigate('/');
                     // // navigate('/login');
                     // setSignUpName('');


                     signOut(auth).then(() => {
                        // console.log('The user signed out');
                        navigate('/');
                        // navigate('/login');
                        setSignUpName('');
                     }).catch(err => {
                        console.log(err.message);
                     });
                  }
               }} >
                  <div className="logo">
                     <i className="fas fa-sign-out-alt"></i>
                  </div>
                  <span>Logout</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UserProfile;
