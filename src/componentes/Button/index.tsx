import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
  // the type is required for button, but ...props will replace the button type if it is diferente
  <Container type="button" {...rest} >{children}</Container>
);

export default Button;
