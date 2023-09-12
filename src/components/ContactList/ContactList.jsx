import React from 'react';
import { useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem ';
import { selectFilteredContacts } from 'redux/store/selectors';

import { ListContact } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ListContact>
      {filteredContacts.map((contact, index) => {
        return <ContactItem {...contact} key={contact.id} index={index} />;
      })}
    </ListContact>
  );
};
