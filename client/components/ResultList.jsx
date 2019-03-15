import React from 'react';
import ListItem from './ListItem/ListItem';

export default function ResultList({businesses}) {
  return (
    <div>
      {businesses.map((business) => {
        return (
          <ListItem 
            key={business.alias} 
            businessName={business.name}
            rating={business.rating}
            imgUrl={business.photos[0]} 
            url={business.url}
            />
        );
      })}
    </div>
  );
}