 import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, Group, Profile, Picture, Link, Feature, Dropdown, FeatureCallOut, Text,  ButtonLink, Container, Logo } from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...restPropds }) {
  return <Feature {...restPropds}>{children}</Feature>;
};

Header.Group = function HeaderGroup({ children, ...restPropds }) {
  return <Group {...restPropds}>{children}</Group>;
};

Header.Picture = function HeaderPicture({ src, ...restPropds }) {
  return <Picture {...restPropds} src={`/images/users/${src}.png `}/>
};

Header.Profile = function HeaderProfile({ children, ...restPropds }) {
  return <Profile {...restPropds}>{children}</Profile>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restPropds }) {
  return <FeatureCallOut {...restPropds}>{children}</FeatureCallOut>;
};


Header.Text = function HeaderText({ children, ...restPropds }) {
  return <Text {...restPropds}>{children}</Text>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restPropds }) {
  return <Dropdown {...restPropds}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...restPropds }) {
  return <Link {...restPropds}>{children}</Link>;
};


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
