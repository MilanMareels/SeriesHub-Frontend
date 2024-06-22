import axios from "axios";

const baseUrl = process.env.BASE_URL;

export interface RegisterResponse {
  userId?: string;
}

export interface RegisterError {
  error: true;
  status?: number;
  data?: any;
  message?: string;
  userId?: string;
}

export const postRegister = async (
  userName: string,
  email: string,
  password: string
): Promise<RegisterResponse | RegisterError> => {
  try {
    const response = await axios.post(`${baseUrl}/register`, { userName, email, password });
    return response.data as RegisterResponse;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        error: true,
        status: error.response.status,
        data: error.response.data,
      };
    } else {
      return {
        error: true,
        message: error.message,
      };
    }
  }
};
