import React, { useEffect, useContext } from 'react';
import {Redirect} from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import env from 'react-dotenv';
import { gapi } from 'gapi-script';
import {UserContext} from '../../context/user';
import { MessageContext } from '../../context/message';


function AuthPage() {  
   const {login, user, setUser} = useContext(UserContext);
   const {setMessage} = useContext(MessageContext);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "781784725438-7rjsrk7bn41r6cpif9h55ur6u0cep7d5.apps.googleusercontent.com",
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);


  // **you can access the token like this**
  // const accessToken = gapi.auth.getToken().access_token;
  // console.log(accessToken);

  const onSuccess = response => {
    console.log('SUCCESS', response)
  }
  const onFailure = response => {
    console.log('FAILED', response);
  };
  const onLogoutSuccess = () => {
    console.log('SUCESS LOG OUT');
  };

  const responseGoogle = (response) => {
    console.log('SUCCESS', response)
      const requestOptions = ({
          method: 'GET',
          headers: {
          //     // 'Authorization': `Bearer ${response.Zi.accessToken}`,
              'Content-Type': 'application/json',
          //     // 'access_token': `${response.Zi.accessToken}`
          },
          body: JSON.stringify(response),
      });
      fetch(`/api/v1/auth/google_oauth2/callback`, requestOptions)
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            setUser({...data.data.attributes, items: data.data.relationships.items.data})
            setMessage({message: "User successfully logged in", color: "green"})
            console.log(data)
          })
        }
        else {
          res.json().then(data => {
            setMessage({message: data.error, color: "red"})
          })
        }
      })
      .catch(err => setMessage({message: err.message, color: "red"}))
      }
  
    if (user) return <Redirect to="/profile" />

  return (
    <div>
      <GoogleLogin
        clientId="781784725438-7rjsrk7bn41r6cpif9h55ur6u0cep7d5.apps.googleusercontent.com"
        scope="email profile"
        onSuccess={responseGoogle}
        onFailure={onFailure}
      />
      {/* <GoogleLogout
        clientId="781784725438-7rjsrk7bn41r6cpif9h55ur6u0cep7d5.apps.googleusercontent.com"
        onLogoutSuccess={onLogoutSuccess}
      /> */}
    </div>
  );
}

export default AuthPage;