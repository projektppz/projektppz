import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';

const StyledLink = styled.a`
  color: ${colors.black};
  text-decoration: none;
  width: 100%;
`;

interface Props {
  href: string;
}

export const NextLink: React.FC<Props> = ({ children, href }) => {
  return (
    <Link href={href}>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};
