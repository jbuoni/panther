import { User } from "../models/user";

const signIn = async (name: string, password: string): Promise<User> => {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, password })
    })
    if (!response.ok)
      throw new Error(`Failed on sign in request ${response}`);
  
    return await response.json();
  }

  const signUp = async (name: string, password: string, email: string): Promise<User> => {

    const response = await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, password, email })
    })
    if (!response.ok)
      throw new Error(`Failed on sign up request ${response}`);

    return await response.json();
  }

  export { signIn, signUp }