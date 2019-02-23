import React from 'react';
import ListItem from './ListItem';

export default function ResultList(props) {
  return (
    <div>
      {props.businesses.map((business) => {
        return (
          <ListItem 
            key={business.alias} 
            businessName={business.name} 
            />
        );
      })}
    </div>
  );
}