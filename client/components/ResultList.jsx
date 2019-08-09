import React from 'react';
import ListItem from './ListItem';

export default function ResultList({businesses, listType}) {
  let buttonType = listType === 'search' ? 'save' : 'delete'

  return (
    <div>
      {businesses.map((business) => {
        return (
          <ListItem 
            key={business.alias}
            business={business}
            buttonType={buttonType}
            />
        );
      })}
    </div>
  );
}