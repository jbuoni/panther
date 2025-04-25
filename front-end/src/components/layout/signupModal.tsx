import { Dialog, Button, Input, Box, Span } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query';
import { jwtDecode } from 'jwt-decode';
import { useState } from "react";
import { signUp } from '../../services/user';

interface SignUpModalProps {
    open: boolean; 
    handleSignUp: (token: any) => void;
    handleSignInToggle: () => void;
}

const SignUpModal = ({open, handleSignUp, handleSignInToggle}: SignUpModalProps) => {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayPasswordError, setDisplayPasswordError] = useState(false);
  const [displayUserError, setDisplayUserError] = useState(false);
  const [displayEmailError, setDisplayEmailError] = useState(false);

  const { mutate: signUpMutation,  error }  = useMutation({
    mutationFn: () => signUp(userName, password, email),
    onSuccess: (token: any) => {
      const { access_token } = token;
      const decoded = jwtDecode(access_token)
      handleSignUp(decoded);
    },
    onError: (error: any) => {
      console.error("Error signing in:", error);
    }
  })

  const handleUserSignUp = () => {
      setDisplayUserError(!userName)
      setDisplayPasswordError(password !== confirmPassword)
      setDisplayEmailError(!email)

      if (userName && email && password === confirmPassword){
        signUpMutation()
      }
  }

  return (
    <Dialog.Root open={open}>  
      <Dialog.Backdrop />
      <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Create an Account</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Dialog.Description>
                Please create an account below.
              </Dialog.Description>
              {displayUserError && <Box color="red">Please enter a user name</Box>}
              {displayEmailError && <Box color="red">Please enter a valid email</Box>}
              {displayPasswordError && <Box color="red">Passwords do not match</Box>}
              <Box paddingTop="5px" paddingBottom="5px">
                <Input placeholder="User Name" onChange={(e) => setUserName(e.target.value)}/>
              </Box>
              <Box paddingTop="5px" paddingBottom="5px">
                <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              </Box>
              <Box paddingTop="5px" paddingBottom="5px">
                <Input placeholder="Password" type="password" paddingTop="5px" onChange={(e) => setPassword(e.target.value)}/>
              </Box>
              <Box paddingTop="5px" paddingBottom="5px">
                <Input placeholder="Confirm Password" type="password" paddingTop="5px" onChange={(e) => setConfirmPassword(e.target.value)}/>
              </Box>
              <Box justifyContent="center" alignContent="center" paddingTop="10px">
                <Button bgColor="blue" w="100%" alignContent="center" onClick={handleUserSignUp}>Sign Up</Button>
                <Button variant="link" w="100%" colorScheme="blue">
                  Already have an account?<Span color="blue" onClick={handleSignInToggle}>Sign In</Span> 
                </Button>
              </Box>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
    </Dialog.Root>
  );
}

export default SignUpModal;