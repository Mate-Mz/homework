import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

const Item = ({id, title, remove, complete, showCompleteButton}) => {
  return (
        <div className="list-item">
            <p>{title}</p>
            {showCompleteButton && (
                <button onClick={() => complete(id)} className='check-icon'>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </button>
            )}
            <button onClick={() => remove(id)} className='trash-icon'>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
  )
}

export default Item