import React from 'react';
import PropTypes from 'prop-types';

import SearchContacts from './SearchContacts';

export default function PageTop({ query, onQueryChange }) {
  return (
    <div className='list-contacts-top'>
      <SearchContacts query={query} onQueryChange={onQueryChange} />
    </div>
  );
}

PageTop.propTypes = {
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired
};
