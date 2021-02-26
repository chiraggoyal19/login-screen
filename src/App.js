import './App.css';
import { Auth} from 'aws-amplify';
import { FaFacebook, FaGoogle, FaEnvelope } from 'react-icons/fa';
function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err))
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={styles.container}>
        <button
          style={{ ...styles.button, ...styles.facebook }}
          onClick={() => Auth.federatedSignIn({provider: 'Facebook'})}
        >
          <FaFacebook color='white' />
          <p style={styles.text}>Sign in with Facebook</p>
        </button>
        <button
          style={{ ...styles.button, ...styles.google }}
          onClick={() => Auth.federatedSignIn({provider: 'Google'})}
        >
          <FaGoogle color='red' />
          <p style={{...styles.text, ...styles.grayText}}>Sign in with Google</p>
        </button>

        <button
          style={{ ...styles.button, ...styles.hostedUI }}
          onClick={() => Auth.federatedSignIn()}
        >
          <FaEnvelope color= 'orange' />
          <p style={{...styles.text, ...styles.orangeText}}>Sign in with Hosted UI</p>
        </button>

        <button
          style={{ ...styles.button, ...styles.hostedUI }}
          onClick={checkUser}
        >
          <FaEnvelope color= 'orange' />
          <p style={{...styles.text, ...styles.orangeText}}>Check User</p>
        </button>

        <button
          style={{ ...styles.button, ...styles.hostedUI }}
          onClick={signOut}
        >
          <FaEnvelope color= 'orange' />
          <p style={{...styles.text, ...styles.orangeText}}>Sign Out</p>
        </button>
        </div>
      </header>
    </div>
  );
}


const styles = {
  container: {
    height: '80vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  button: {
    width: '100%', 
    maxWidth: 250,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0px 20px',
    borderRadius: 2,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, .3)',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    minHeight: 40
  },
  facebook: {
    backgroundColor: "#3b5998"
  },
  email: {
    backgroundColor: '#db4437'
  },
  checkAuth: {
    backgroundColor: '#02bd7e'
  },
  hostedUI: {
    backgroundColor: 'rgba(0, 0, 0, .6)'
  },
  signOut: {
    backgroundColor: 'black'
  },
  withAuthenticator: {
    backgroundColor: '#FF9900'
  },
  icon: {
    height: 16,
    marginLeft: -1
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  blackText: {
    color: 'black'
  },
  grayText: {
    color: 'rgba(0, 0, 0, .75)'
  },
  orangeText: {
    color: '#FF9900'
  }
}

export default App;





