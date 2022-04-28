import axios, { AxiosResponse } from 'axios';

const SERVER = 'http://127.0.0.1:5000';
const headers = {
  'Content-Type': 'application/json',
  Authorization: 'JWT fefege...',
};

export interface UserType {
  userid: string;
  password: string;
  email: string;
  name: string;
  phone: string;
  birth: string;
  address: string;
}
export const signupApi = async (payload: {
  userid: string;
  password: string;
  email: string;
  name: string;
  phone: string;
  birth: string;
  address: string;
}) => {
  try {
    const response: AxiosResponse<unknown, UserType[]> = await axios.post(
      `${SERVER}/user/signup`,
      payload,
      { headers }
    );
    return response.data;
  } catch (e) {
    return e;
  }
};
