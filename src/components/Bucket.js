import React, { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  // console.log(props.bucket);

  const submitUpdate = (value) => {

    // TODO: Write logic to update the `edit` value in state after a user updates an entry in the list
    props.editBucketItem(edit.id, value);
    setEdit({id: null, value: '', eagerness: ''})


    // TODO: Set the key:value pairs in the `edit` object back to empty strings




  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    <div className={
      item.isComplete 
        ? `bucket-row complete ${item.eagerness}` 
        : `bucket-row ${item.eagerness}`
      } 
      key={index}>
      <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
          {item.text}
      </div>
      <div className="icons">
        <p onClick={() => setEdit({id: item.id, value: item.text, eagerness: item.eagerness})}> ✏️</p>
        <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
