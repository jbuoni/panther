import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header, LoginModal, SignUpModal } from './components/layout'
import React from 'react'
import { CustomerLayout } from './components/customer';

const queryClient = new QueryClient()

function App(){

const [user, setUser] = React.useState(null);
const [loginModalOpen, setLoginModalOpen] = React.useState(false);
const [signUpModalOpen, setSignUpModalOpen] = React.useState(false);
const [authenticated, setAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    let isAuthenticated = false
    if (user) {
        setUser(JSON.parse(user));
        isAuthenticated = true
    }
    setAuthenticated(isAuthenticated)
    setLoginModalOpen(!isAuthenticated)
  }, []);

  const handleSignOut = () => {
    setUser(null);
    setAuthenticated(false);
    localStorage.removeItem('user');
    setLoginModalOpen(true);
  }

  const handleSignUpModalOpen = () => {
    setLoginModalOpen(false);
    setSignUpModalOpen(true); 
  }

  const handleSignInToggle = () => {
    setLoginModalOpen(!loginModalOpen);
    setSignUpModalOpen(false);
  }

  const handleSignIn = (token: any) => {
    if (token && token.username) {
      localStorage.setItem('user', JSON.stringify(token));
      setUser(token);
      setAuthenticated(true);
    }
  }

  const handleSignUp = (token: any) => {
    if (token && token.username) {
      localStorage.setItem('user', JSON.stringify(token));
      setUser(token);
      setAuthenticated(true);
      setSignUpModalOpen(false);
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Header handleSignOut={handleSignOut}/>
        <LoginModal open={!authenticated} handleSignIn={handleSignIn} handleSignUp={handleSignUpModalOpen} />
        <SignUpModal open={signUpModalOpen} handleSignUp={handleSignUp} handleSignInToggle={handleSignInToggle} />
        {
          authenticated  && <CustomerLayout />
        }
      </>
    </QueryClientProvider>
  )
}

export default App
