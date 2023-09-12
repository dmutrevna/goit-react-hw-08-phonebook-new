import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notify from 'notiflix';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

import { selectContacts } from 'redux/store/selectors';
import { addContact } from 'redux/store/operations';

import { FormContainer, SubTitle } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const preferredCountries = ['ua', 'pl', 'de'];

  return (
    <FormContainer onSubmit={handleSubmit}>
      <SubTitle>Name</SubTitle>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChange}
        required
      />
      <SubTitle>Number</SubTitle>
      <PhoneInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={setNumber}
        required
        country={'ua'}
        placeholder="+380"
        preferredCountries={preferredCountries}
        inputStyle={{ width: '380px', borderRadius: '10px' }}
        dropdownStyle={{
          backgroundColor: '#f5f5f5',
          borderRadius: '5px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgb(146, 148, 248);',
        }}
      />
      <button type="submit">Add contact</button>
    </FormContainer>
  );
};
