import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

import * as ContactAPI from './utils/ContactsAPI';
import ListContacts from './ListContacts';
import PageTop from './PageTop';
import ShowingContacts from './ShowingContacts';

export default class App extends Component {
  state = {
    contacts: [],
    query: ''
  };

  componentDidMount() {
    ContactAPI.getAll().then(contacts => this.setState({ contacts }));
  }

  removeContact = (contact) => {
    this.setState(state => ({
      contacts: state.contacts.filter(c => c.id !== contact.id)
    }));

    ContactAPI.remove(contact);
  };

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    });
  };

  clearQuery = () => {
    this.updateQuery('');
  };

  _filterContacts(query, contacts) {
    if (query) {
      const regex = new RegExp(escapeRegExp(query), 'i');
      return contacts.filter(contact => regex.test(contact.name));
    } else {
      return contacts;
    }
  }

  render() {
    const { contacts, query } = this.state;

    const filteredContacts = this._filterContacts(query, contacts);
    filteredContacts.sort(sortBy('name'));

    return (
      <div className="App">
        <div className='list-contacts'>
          <PageTop query={this.state.query} onQueryChange={this.updateQuery} />

          <ShowingContacts onClearQuery={this.clearQuery} contactsLength={contacts.length} filteredContactsLength={filteredContacts.length} />

          <ListContacts onRemoveContact={this.removeContact} contacts={filteredContacts} />
        </div>
      </div>
    );
  }
};
