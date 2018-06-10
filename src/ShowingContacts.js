import React from 'react';
import PropTypes from 'prop-types';

export default function ShowingContacts({ contactsLength, filteredContactsLength, onClearQuery }) {
  if (contactsLength === filteredContactsLength) {
    return null;
  }

  let message = `Now showing ${filteredContactsLength} of ${contactsLength} total`
  if (filteredContactsLength === 0) {
    message = 'No result';
  }

  return (
    <div className='showing-contacts'>
      <span>{ message }</span>
      <button onClick={ onClearQuery }>Show all</button>
    </div>
  );
}

ShowingContacts.propTypes = {
  contactsLength: PropTypes.number.isRequired,
  filteredContactsLength: PropTypes.number.isRequired,
  onClearQuery: PropTypes.func.isRequired
};
