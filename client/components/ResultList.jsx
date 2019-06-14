import React from 'react';
import ListItem from './ListItem';

export default function ResultList({businesses}) {
  return (
    <div>
      {businesses.map((business) => {
        return (
          <ListItem 
            key={business.alias} 
            business={business}
            />
        );
      })}
    </div>
  );
}