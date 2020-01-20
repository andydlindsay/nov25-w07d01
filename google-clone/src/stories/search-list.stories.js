import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchList from '../components/SearchList';
import allResults from '../data/db';

storiesOf('Search List Component', module)
  .add('all results', () => {
    return(<SearchList results={allResults} />);
  })
  .add('filtered for "est"', () => {
    const filteredResults = allResults.filter(result => result.content.includes('est'));
    return(<SearchList results={filteredResults} />);
  });
