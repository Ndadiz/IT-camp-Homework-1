import React from 'react'
import classes from './MyInput.module.css'

type Props = {
  placeholder:string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function MyInput({...props}:Props) {
  return (
      <input className={classes.MyInput} type="text"{...props} />
  )
}
