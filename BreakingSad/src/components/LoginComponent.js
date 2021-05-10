import React, { useState, Component } from "react";
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth'
import firebaseConfig from './FirebaseConfig';
import '../assets/css/LoginComponent.css'

const firebaseApp = firebase.initializeApp(firebaseConfig);

class LoginComponent extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    return (
      <div>
        {
          user
            ? <p>Hello, {user.displayName} </p>
            : <p>Please, sign in </p>
        }
        {
          user
            ? <button className='signout-btn' onClick={signOut}>Sign out</button>
            : <button className='google-btn' onClick={signInWithGoogle}>Sign in with Google</button>
        }
      </div>
    );
  }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(LoginComponent);

// class Login extends Component {
// state = {
//   form: {
//     username: '',
//     password: ''
//   }
// }

// handleChange = async e => {
//   await this.setState({
//     form: {
//       ...this.state.form,
//       [e.target.name]: e.target.value
//     }
//   });
// }

// iniciarSesion = async () => {
//   await axios.get(baseUrl, { params: { username: this.state.form.username, password: md5(this.state.form.password) } })
//     .then(response => {
//       return response.data;
//     })
//     .then(response => {
//       if (response.length > 0) {
//         var respuesta = response[0];
//         cookies.set('id', respuesta.id, { path: "/" });
//         cookies.set('first_name', respuesta.first_name, { path: "/" });
//         cookies.set('last_name', respuesta.last_name, { path: "/" });
//         cookies.set('username', respuesta.username, { path: "/" });
//         alert(`Welcome ${respuesta.first_name}`);
//         window.location.href = "./home";
//       } else {
//         alert('Username or Password are incorrect');
//       }
//     })
//     .catch(error => {
//       console.log(error);
//     })

// }

// componentDidMount() {
//   if (cookies.get('username')) {
//     window.location.href = "./home";
//   }
// }

// render() {
//   return (
//     <div className="Login">
//       <div className="containerPrincipal">
//         <div className="containerSecundario">
//           <div className="form-group">
//             <label className="lbUser">User </label>
//             <br />
//             <input
//               type="text"
//               className="form-control"
//               name="username"
//               onChange={this.handleChange}
//             />
//             <br />
//             <label className="lbPass">Password </label>
//             <br />
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               onChange={this.handleChange}
//             />
//             <br />
//             <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>Log In</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// }