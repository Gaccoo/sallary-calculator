import React, { useState } from 'react';
import style from './input.module.scss';

type InputProps = {
  title: String
  children: React.ReactNode
}

const Input = ({ title, children }: InputProps) => {
  const [input, setInput] = useState();
  return (
    <div className={style.window}>
      <div className={style.title}>{title}</div>
      <div className={style.text}>{children}</div>
    </div>
  );
};

export default Input;
