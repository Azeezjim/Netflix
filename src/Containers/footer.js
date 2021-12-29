import React from 'react';
import { Footer } from '../Components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row />
      <Footer.Column>
        <Footer.Link href="#">FAQ</Footer.Link>
        <Footer.Link href="#">Investo r Relationn</Footer.Link>
        <Footer.Link href="#">Ways to Watch</Footer.Link>
        <Footer.Link href="#">Coporate Information</Footer.Link>
        <Footer.Link href="#">Netflix Originals</Footer.Link>
      </Footer.Column>

      <Footer.Column>
        <Footer.Link href="#">Help Centere</Footer.Link>
        <Footer.Link href="#">Juobs</Footer.Link>
        <Footer.Link href="#">Term of Use</Footer.Link>
        <Footer.Link href="#">Contact Us</Footer.Link>
      </Footer.Column>

      <Footer.Column>
        <Footer.Link href="#">Account</Footer.Link>
        <Footer.Link href="#">Radeem Gift Cards</Footer.Link>
        <Footer.Link href="#">Privac</Footer.Link>
        <Footer.Link href="#">Speed Test</Footer.Link>
      </Footer.Column>

      <Footer.Column>
        <Footer.Link href="#">Mesia Centere</Footer.Link>
        <Footer.Link href="#">BHuy Gift Cards</Footer.Link>
        <Footer.Link href="#">Cookes Prefences</Footer.Link>
        <Footer.Link href="#">Ligal Notices</Footer.Link>
      </Footer.Column>
      <Footer.Break />
      <Footer.Text>Netflix United Kingdom</Footer.Text>
    </Footer>
  );
}
