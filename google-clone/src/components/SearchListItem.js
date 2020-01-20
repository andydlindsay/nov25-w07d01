import React from 'react';

const SearchListItem = (props) => {
  const { website, title, content } = props;
  return (
    <div className="search-list-item">
      <h2>{ title }</h2>
      <p>{ content }</p>
      <a href={website}>{website}</a>
    </div>
  );
};

export default SearchListItem;
