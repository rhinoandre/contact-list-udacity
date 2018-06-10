import React from 'react';

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
