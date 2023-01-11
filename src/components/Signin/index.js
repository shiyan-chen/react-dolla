import React from 'react'
import {
  Btn,
  Container,
  Form,
  FormContent,
  FormWrap,
  H1,
  Icon,
  Input,
  Label,
  Text,
} from './SigninElements'

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to='/'>dolla</Icon>
        <FormContent>
          <Form action='#'>
            <H1>Sign in to your account</H1>
            <Label htmlFor='for'>Email</Label>
            <Input type='email' />
            <Label htmlFor='for'>Password</Label>
            <Input type='password' />
            <Btn type='submit'>Continue</Btn>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  )
}

export default SignIn
