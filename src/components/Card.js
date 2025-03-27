/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */

'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import Form from '@/components/Form';

import Card from 'react-bootstrap/Card';
import { deleteFact } from '../api/facts';

function FactCard({ fact, deleteFunc }) {
  const [localFact, setLocalFact] = useState(fact);
  const [editMode, setEditMode] = useState(false);

  const deleteIndFact = () => {
    deleteFact(fact.firebaseKey, 'Yes').then(() => deleteFunc());
  };

  return (
    <Card>
      <Card.Body>
        {editMode ? (
          <>
            <p>Edit Mode</p>
            <Form obj={localFact} func={setLocalFact} />
            <div>
              <button className="btn btn-success" onClick={() => setEditMode(false)}>
                Exit Edit Mode
              </button>
            </div>
          </>
        ) : (
          <>
            {fact.text}
            <div>
              <button className="btn btn-secondary" onClick={() => setEditMode(true)}>
                Edit Fact
              </button>
              <button className="btn btn-danger" onClick={deleteIndFact}>
                Delete Fact
              </button>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

FactCard.propTypes = {
  fact: PropTypes.string.isRequired,
};

export default FactCard;
