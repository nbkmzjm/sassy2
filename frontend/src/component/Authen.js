import { useState, React, useContext } from 'react';
import { auth, signInWithGoogle } from '../configReact/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';

function Authen() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const { state, dispatch: ctxDispatch } = useContext(Store);
   const { userInfo } = state;
   const navigate = useNavigate();
   console.log('State:', state);

   const signinHandle = async () => {
      await signInWithPopup(auth, signInWithGoogle);
      // await signInWithPopup(auth, signInWithGoogle);
      console.log(auth.currentUser);
      toast('Successfully Logged In');
      if (auth.currentUser.email === 'sassynails2.buckeye@gmail.com') {
         ctxDispatch({ type: 'USER_SIGNIN', payload: auth.currentUser });
         localStorage.setItem('userInfo', JSON.stringify(auth.currentUser));
         navigate('/');
      } else {
         ctxDispatch({ type: 'USER_SIGNOUT' });
         localStorage.removeItem('userInfo');
         toast.error('You are not authorized to enter Admin menu');
         window.location.reload();
      }
   };

   const signoutHandle = async () => {
      try {
         await auth.signOut();
         toast('Signed Out Successfully');
         ctxDispatch({ type: 'USER_SIGNOUT' });
         localStorage.removeItem('userInfo');
         console.log(auth.currentUser);
      } catch (error) {
         console.log(error);
         toast.error(error);
      }
   };
   return (
      <div className="signInBtn">
         {/* <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         /> */}
         {console.log(userInfo)}
         {userInfo ? (
            <button className="btn btn-primary" onClick={signoutHandle}>
               SignOut <br></br>SignOut
            </button>
         ) : (
            <button className="btn btn-primary" onClick={signinHandle}>
               SignIn <br></br>SignIn
            </button>
         )}
      </div>
   );
}

export default Authen;
