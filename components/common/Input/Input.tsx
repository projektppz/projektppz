import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';

interface Props {
  variant?: 'big' | 'small';
  $lenght?: number;
}

const StyledInput = styled.input<Props>`
  height: ${({ variant }) => (variant === 'big' ? '30px' : '50px')};
  width: ${props => props.$lenght}'px';
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: ${colors.pink};
`;

const Input = React.forwardRef<HTMLInputElement, Props & JSX.IntrinsicElements['input']>(
  (
    {
      children,
      variant = 'small',
      $lenght = 20,
      className,
      defaultValue,
      disabled,
      name,
      onChange,
      placeholder,
      required = false,
      value,
      ...rest
    },
    forwardRef,
  ) => (
    <StyledInput
      aria-label={name}
      aria-required={required}
      disabled={disabled}
      placeholder={placeholder}
      ref={forwardRef as any}
      value={value || defaultValue}
      name={name}
      onChange={onChange}
      {...rest}
    />
  ),
);

Input.displayName = "Input";

export {Input}