import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export interface BaseButtonProps {
  className?: string;
  /**
   * Button type
   *
   * @default 'button'
   */
  type?: string;
  /**
   * Button variant
   *
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ternary';
}

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${colors.white};
  cursor: pointer;
`;

export const Button: FC<BaseButtonProps> = React.memo(
  ({ children, className, type = 'button', variant = 'primary', ...props }) => {
    return (
      <StyledButton data-testid="button" {...props}>
        {children}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
