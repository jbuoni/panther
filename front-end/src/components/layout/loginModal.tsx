import { Dialog, Button, Input, Box, Span } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query';
import { signIn } from '../../services/user';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

interface LoginModalProps {
    open: boolean; 
    handleSignIn: (decodedToken: any) => void;
    handleSignUp: () => void;
}

const LoginModal = ({open, handleSignIn, handleSignUp}: LoginModalProps) => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: login,  error }  = useMutation({
    mutationFn: () => signIn(userName, password),
    onSuccess: (token: any) => {
      const { access_token } = token;
      const decoded = jwtDecode(access_token)
      handleSignIn(decoded);
    },
    onError: (error: any) => {
      console.error("Error signing in:", error);
    }
  })
 
  return (
    <Dialog.Root open={open}>    
      <Dialog.Backdrop />
      <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Sign In</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Dialog.Description>
                Enter your user name and password to Sign In.
                {error && <Box color="red">Please enter a user name</Box>}
              </Dialog.Description>
              <Box paddingTop="5px" paddingBottom="5px">
                <Input placeholder="User Name" onChange={(e) => setUserName(e.target.value)}/>
              </Box>
              <Box paddingTop="5px" paddingBottom="5px">
                <Input placeholder="Password" type="password" paddingTop="5px" onChange={(e) => setPassword(e.target.value)}/>
              </Box>
              <Box justifyContent="center" paddingTop="10px">
                <Button bgColor="blue" w="100%" alignContent="center" onClick={() => login()}>Sign In</Button>
                <Button variant="link" w="100%" colorScheme="blue">
                  Don&apos;t have an account?<Span color="blue" onClick={handleSignUp}>Sign Up</Span>
                </Button>
              </Box>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
    </Dialog.Root>
  );
}

export default LoginModal;