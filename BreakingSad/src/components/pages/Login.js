import React, { useState, Component } from "react";
import axios from 'axios';
import "../../assets/css/Login.css";
import md5 from 'md5';
import Cookies from 'universal-cookie';
import GoogleLogin from 'react-google-login';

const baseUrl = "http://localhost:3001/users";
const cookies = new Cookies();

const responseGoogle = (response) => {
  console.log(response);

  if (response.length > 0) {
    var respuesta = response[0];
    // cookies.set('id', respuesta.googleId, { path: "/" });
    // window.location.href = "./home";
  } else {
    alert('Username or Password are incorrect');
  }
}

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <br /><br />
        {/* <GoogleLogin
          clientId="429986159951-ki8laiuqaojhm5bn5te9jsolgfbbkc4f.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        /> */}
      </div>
    )
  }
}

export default Login;

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