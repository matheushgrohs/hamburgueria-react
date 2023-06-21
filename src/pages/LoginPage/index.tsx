import React, { useContext, useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form"
import { UserContext } from '../../contexts/UserContext';
import { ButtonCadastrar, ButtonGreenLogin, InputForm, LabelLogin } from '../../styles/Styles';
import { iLoginFormValues } from './@types';
import { DivShoppingBag, FormLogin, ImgBalls, ImgLogo, ImgShoppingBag, MainDiv, RightSide } from './style';
import logo from "../../assets/logo.png"
import shoppingbag from "../../assets/shoppingbag.png"
import Group135 from "../../assets/Group135.png"
import { Link, useNavigate } from 'react-router-dom';



const LoginPage = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: {errors}, reset} = useForm<iLoginFormValues>();
  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<iLoginFormValues>= async (formData) => {
    await userLogin(formData, setLoading);
    reset();
  }
  return (
    <MainDiv>
      <RightSide>
        <ImgLogo src={logo} alt="" />
          <DivShoppingBag>
            <ImgShoppingBag src={shoppingbag} alt="" />
            <p> A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> <p>ingredientes.</p></p>
          </DivShoppingBag>
        {/* <ImgBalls src={Group135} alt="" /> */}
      </RightSide>
      <FormLogin noValidate onSubmit={handleSubmit(submit)}>
        <LabelLogin htmlFor="">Login</LabelLogin>
        <InputForm type="text" placeholder='Digite seu Email'{...register("email")} disabled={loading}/>
        <InputForm type="password" placeholder='Digite sua Senha' {...register("password")} disabled={loading}/>
        <ButtonGreenLogin type='submit' disabled={loading}>
          {loading ? "Logando..." : "Logar"}</ButtonGreenLogin>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      </FormLogin>
      
      <ButtonCadastrar onClick={() => navigate("/register")} >Cadastrar</ButtonCadastrar>
     
    </MainDiv>
  )
}

export default LoginPage
