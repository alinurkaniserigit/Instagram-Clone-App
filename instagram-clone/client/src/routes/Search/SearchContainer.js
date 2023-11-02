import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import SearchPresenter from './SearchPresenter';
import { SEARCH } from './SearchQueries';

const SearchContainer = () => {
  const location = useLocation();
  const search = location.search;
  const term = new URLSearchParams(search).get('term');
  const { data, loading } = useQuery(SEARCH, {
    skip: term === undefined,
    variables: {
      term,
    },
  });

  return <SearchPresenter searchTerm={term} loading={loading} data={data} />;
};

export default SearchContainer;
