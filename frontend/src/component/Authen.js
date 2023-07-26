import { useState, React } from 'react';
import { auth, signInWithGoogle } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';

function Authen() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const signinHandle = async () => {
      // await signInWithGoogle(auth, email, password);
      await signInWithPopup(auth, signInWithGoogle);
      console.log(auth.currentUser);
      toast('Successfully Logged In');
   };

   const signoutHandle = async () => {
      try {
         await auth.signOut();
         toast('Signed Out Successfully');
      } catch (error) {
         console.log(error);
         toast.error(error);
      }
   };
   return (
      <div>
         <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         <button onClick={signinHandle}>Sign In</button>
         <button onClick={signoutHandle}>Sign Out</button>
      </div>
   );
}

export default Authen;
