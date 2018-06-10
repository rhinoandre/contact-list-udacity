import React from 'react';
import PropTypes from 'prop-types';

export default function SearchContacts({ query, onQueryChange }) {
  return (
    <input
        className='search-contacts'
        type='text'
        placeholder='Seach Contacts'
        value={ query }
        onChange={(event) => onQueryChange(event.target.value)}
      />
  );
}

SearchContacts.propTypes = {
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired
};
