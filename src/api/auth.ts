import axios from 'axios';
import { AuthResponse } from '@/types/user';

const registerUser = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post('http://localhost:4000/register', {
    email, // équivalent à email: email
    password,
  });
  return response.data;
};

const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post('http://localhost:4000/login', {
    email,
    password,
  });
  return response.data
}


export { registerUser, loginUser };
