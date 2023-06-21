import React, { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { ButtonGreenLogin, InputForm } from '../../styles/Styles';
import { FormLogin } from '../LoginPage/style';
import { iRegisterFormValues } from './@types';
import { DivTop } from './style';

const RegisterPage = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: {errors}, reset} = useForm<iRegisterFormValues>();
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<iRegisterFormValues> = async (formData) => {
    await userRegister(formData, setLoading);
    reset();
    
  }
  return (
    <div>
      <DivTop>
        <h3>Cadastro</h3>
        <button onClick={() => navigate("/")}>Retornar para login</button>
      </DivTop>
      <FormLogin onSubmit={handleSubmit(submit)} noValidate>
        <InputForm type="text" placeholder="Digite seu Nome" {...register("name")} disabled={loading}/>
        <InputForm type="email" placeholder="Digite seu Email" {...register("email")} disabled={loading}/>
        <InputForm type="password" placeholder="Digite uma Senha" {...register("password")} disabled={loading}/>
    <ButtonGreenLogin type="submit" disabled={loading}>{loading ? "Cadastrando..." : "Cadastrar"}</ButtonGreenLogin>
      </FormLogin>
    </div>
  )
}

export default RegisterPage
