import React, { type FormEvent } from 'react'
import cls from './register.module.scss'
import Input from 'shared/ui/input'


export const Register: React.FC = () => {
  function handleSubmit(e: FormEvent): void {

  }
  return (
    <div className={cls.formContainer}>
      <form onSubmit={(event) => { handleSubmit(event) }}>
        <div className={cls.brand}>
          <img src={""} alt='logo'></img>
          <h1>snappy</h1>
        </div>
          <Input name='username' type='text' onChange={()=>{}} placeHolder='username'></Input>
          <Input name='email' type='text' onChange={()=>{}} placeHolder='email'></Input>
          <Input name='password' type='text' onChange={()=>{}} placeHolder='password'></Input>
          <Input name='confirmPassword' type='text' onChange={()=>{}} placeHolder='confirm password'></Input>
          <button type='submit' onClick={()=>{}}>Register</button>
      </form>
    </div>
  )
}
