import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchListItem from '../components/SearchListItem';

const result = {
  id: 1,
  website: 'http://www.example.com',
  title: 'Lorem ipsum dolor sit amet',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices sagittis justo et faucibus. Sed volutpat tempus lectus vel laoreet. Proin et lectus et nisl posuere mollis vitae sed felis.'
};

storiesOf('Search List Item Component')
  .add('renders a search item', () => {
    return (<SearchListItem
      website={result.website}
      title={result.title}
      content={result.content}
    />);
  });