import React from 'react'
import {Container,FormWrap,Icon,Form,FormH1,FormInput,FormButton,Text,FormContent, FormLabel } from './SigninElements'

const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">dollar</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='pasword' required/>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
