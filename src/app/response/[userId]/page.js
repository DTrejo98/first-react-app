'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FactCard from '@/components/Card';
import { readFacts } from '../../../api/facts';

export default function ResponseYesPage({ params, searchParams }) {
  const [facts, setFacts] = useState([]);

  const getFacts = () => {
    readFacts(params.userId, searchParams.value).then(setFacts);
  };

  useEffect(() => {
    getFacts();
  }, []);

  return (
    <div>
      {Object.values(facts).map((fact) => (
        <FactCard key={fact.firebaseKey} fact={fact} deleteFunc={getFacts} />
      ))}
    </div>
  );
}

ResponseYesPage.propTypes = {
  params: PropTypes.string.isRequired,
  searchParams: PropTypes.string.isRequired,
};
