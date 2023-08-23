import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCog, faTrash } from '@fortawesome/free-solid-svg-icons';

const Item = ({id, title, remove, complete, inProgress}) => {
    console.log(id);
  return (
        <div className="list-item">
            <p>{title}</p>
            <p>{id}</p>
            {complete && (
                <button onClick={() => complete(id)} className='check-icon'>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </button>
            )}

            {inProgress && (
                <button onClick={() => inProgress(id)} className='inProgress-icon'>
                    <FontAwesomeIcon icon={faCog} spin />
                </button>
            )}

            <button onClick={() => remove(id)} className='trash-icon'>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
  )
}

export default React.memo(Item);