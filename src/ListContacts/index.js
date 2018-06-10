import React from 'react';
import { PropTypes } from 'prop-types';

import ContactDisplay from './ContactDisplay';

export default function ListContacts({ contacts, onRemoveContact }) {
  return (
    <ol className='contact-list'>
      {
        contacts.map(
          contact => (<ContactDisplay key={contact.id} contact={contact} removeContact={onRemoveContact} />)
        )
      }
    </ol>
  );
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired
};
