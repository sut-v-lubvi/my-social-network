import React from "react";
import styled from "styled-components";
import { Input } from "../Profile/ProfilePhotoDescription/PRofileStatus";
import { useForm } from "react-hook-form";

const FormContainer = styled.div`
  flex-basis: content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  text-align: center;
  font-size: 40px;
`;

const FlexContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

const InputCheckbox = styled.input`
  height: auto;
`;
const ContainerInput = styled.div`
  margin: 0px auto;
  text-align: center;
`;
const Span = styled.div`
  flex-grow: 0;
  font-size: 16px;
`;
const InputSpan = styled.div`
  display: inline-block;
`;
const Button = styled.button`
  &:active {
    transform: translateY(1.5px);
    box-shadow: inset 0px 1px 1.5px 1px rgba(0, 0, 0, 0.3);
  }
`;
const P = styled.p`
  display: block;
  padding: 20px 0px 10px 0px;
  text-align: center;
  font-size: 28px;
`;

const DivError = styled.div`
  color: red;
  padding-top: 7px;
  font-size: 14px;
`;

const error = (data) => {
  console.log(data);
};

const Login = (props) => {
  const submit = (data) => {
    props.login(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <P>Login</P>
      <form onSubmit={handleSubmit(submit, error)}>
        <FormContainer>
          <ContainerInput>
            <Input
              placeholder="Login"
              name="Login"
              {...register("Login", { required: "Please enter your login" })}
            />
            {errors.Login && <DivError>{errors.Login.message}</DivError>}
          </ContainerInput>
          <ContainerInput>
            <Input
              type="password"
              placeholder="Password"
              name="Password"
              {...register("Password", {
                required: "Please enter your password",
              })}
            />
            {errors.Password && <DivError>{errors.Password.message}</DivError>}
          </ContainerInput>
          <FlexContainerInput>
            <InputCheckbox type="checkbox" {...register("rememberMe")} />
            <Span>Remember me</Span>
          </FlexContainerInput>
          <ContainerInput>
            <Button>Login</Button>
          </ContainerInput>
        </FormContainer>
      </form>
    </>
  );
};

export default Login;
