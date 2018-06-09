import React from 'react';
import { PropTypes } from 'prop-types';

export default function ContactDisplay({ contact, removeContact }) {
  return (
    <li className='contact-list-item'>
      <div className='contact-avatar' style={{backgroundImage: `url(${contact.avatarURL})`}} />
      <div className='contact-details'>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
      </div>
      <button onClick={() => removeContact(contact)} className='contact-remove'>
        Remove
      </button>
    </li>
  );
}

ContactDisplay.propTypes = {
  contact: PropTypes.object.isRequired,
  removeContact: PropTypes.func.isRequired
};