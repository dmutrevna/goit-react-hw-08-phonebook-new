import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { requestContacts } from 'redux/store/operations';

import {
  TitleContacts,
  TitlePhone,
} from 'components/ContactForm/ContactForm.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contacts</title>
      </Helmet>
      <TitlePhone>Phonebook</TitlePhone>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
