import React from 'react';
import ListItem from './ListItem';

export default function ResultList({businesses}) {
  return (
    <div>
      {businesses.map((business) => {
        return (
          <ListItem 
            key={business.alias} 
            alias={business.alias}
            name={business.name}
            rating={business.rating}
            reviewCount={business.review_count}
            imgUrl={business.photos[0]} 
            url={business.url}
            price={business.price}
            />
        );
      })}
    </div>
  );
}