import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { iLoginFormValues } from "../../pages/LoginPage/@types";
import { iRegisterFormValues } from "../../pages/RegisterPage/@types";
import { iDefaultProviderProps } from "../@types";
import { iUser, iUserContext, iUserLoginResponse } from "./@types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({children}: iDefaultProviderProps) => {
  const [user, setUser] = useState<iUser | (null)>(null);
  // const [productsCart, setProductsCart] = useState([]);

  const navigate = useNavigate();

 

  const userRegister = async (formData: iRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      console.log("Cadastro realizado com sucesso")
      navigate("/");
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  const userLogin = async (formData: iLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      setLoading(true);
      const response = await api.post<iUserLoginResponse>("/login", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken) 
      console.log("Login realizado com sucesso!")
      navigate("/dashboard");
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  const userLogout = () => {
    localStorage.removeItem("@TOKEN")
    setUser(null); 
    navigate("/"); 
  } 



  return (
    <UserContext.Provider value={{ user, userLogin, userRegister, userLogout }}>
      {children}
    </UserContext.Provider>
  )
}