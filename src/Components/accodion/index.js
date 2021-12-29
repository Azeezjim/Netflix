import React, { useState, useContext, createContext } from 'react';
import { Container, Frame, Title, Item, Inner, Header, Body } from './styles/accodion';

const ToggleContext = createContext();

export default function Accodion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accodion.Title = function AccodionTilte({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accodion.Frame = function AccodionTilte({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accodion.Item = function AccodionTilte({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accodion.Header = function AccodionTilte({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open"  />
      )}
    </Header>
  );
};

Accodion.Body = function AccodionTilte({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body {...restProps}>{children} </Body> : null;
};
