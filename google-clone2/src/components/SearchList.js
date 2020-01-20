import React from 'react';
import SearchListItem from './SearchListItem';

const SearchList = (props) => {
  return props.results.map(result => {
    return (<SearchListItem 
      key={result.id}
      website={result.website}
      title={result.title}
      content={result.content}
    />);
  });
};

export default SearchList;
