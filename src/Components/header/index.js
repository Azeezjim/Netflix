import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, ButtonLink, Container, Logo } from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restPropds }) {
  return <Container {...restPropds}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restPropds }) {
  return <ButtonLink {...restPropds}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restPropds }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restPropds} />
    </ReactRouterLink>
  );
};
