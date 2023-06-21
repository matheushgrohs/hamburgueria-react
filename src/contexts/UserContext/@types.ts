import { iLoginFormValues } from "../../pages/LoginPage/@types";
import { iRegisterFormValues } from "../../pages/RegisterPage/@types";

export interface iUserLoginResponse{
  accessToken: string;
  user: iUser;
}



export interface iUser{
  id: string;
  name: string;
  email: string;
}


export interface iUserContext{
  user: iUser | null;
  userRegister: (formData: iRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
  userLogin: (formData: iLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
  userLogout: () => void;

}