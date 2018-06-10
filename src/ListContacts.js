import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import ContactDisplay from './ContactDisplay';

export default class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired
  };

  render() {
    const { contacts, onRemoveContact } = this.props;

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
}
