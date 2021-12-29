import React from 'react';
import { Accodion } from '../Components';
import faqsData from '../fixture/faqs.json';
import OptForm from '../Components/opt-form';

export function FaqsContainer() {
  return (
    <Accodion>
      <Accodion.Title>Friquently Asked Questions </Accodion.Title>
      {faqsData.map((item) => (
        <Accodion.Item key={item.id}>
          <Accodion.Header>{item.header}</Accodion.Header>
          <Accodion.Body>{item.body}</Accodion.Body>
        </Accodion.Item>
      ))}
      <Accodion.Item />

      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Ready tom watch? Enter your email to create or restart your membership</OptForm.Text>
      </OptForm>
    </Accodion>
  );
}
