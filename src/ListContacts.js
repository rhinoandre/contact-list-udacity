import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ContactDisplay from './ContactDisplay';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

export default class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired
  };

  state = {
    query: ''
  };

  updateQuery(query) {
    this.setState({
      query: query.trim()
    });
  }

  filterContacts(query, contacts) {
    const regex = new RegExp(escapeRegExp(query), 'i');
    return contacts.filter(contact => regex.test(contact.name));
  }
  
  render() {
    const { contacts, onRemoveContact } = this.props;
    const { query } = this.state;

    const filteredContacts = this.filterContacts(query, contacts);
    filteredContacts.sort(sortBy('name'));

    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Seach Contacts'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
        <ol className='contact-list'>
          {
            filteredContacts.map(
              contact => (<ContactDisplay key={contact.id} contact={contact} removeContact={onRemoveContact} />)
            )
          }
        </ol>
      </div>
    );
  }
}
