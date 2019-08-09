import React from 'react';
import styles from './ListItem.css';
import SaveButton from '../../containers/SaveButton';
import DeleteButton from '../../containers/DeleteButton';

export function ListItem({business, buttonType}) { 
  let Button = buttonType === 'save' ? SaveButton : DeleteButton;

  let {name, photos, rating, review_count, url, price} = business;
  return (
    <div className={styles.listItem}>
      <img className={styles.img} src={photos[0]} />
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.price}>{price}</p>
        <div className={styles.ratingReview}>
          <span className={styles.rating}>{rating} stars</span>
          <span className={styles.reviews}>{review_count} reviews</span>
        </div>
        <p><a target="_blank" href={url}>View on Yelp</a></p>
        <Button business={business} />
      </div>
    </div>
  )
}

export default ListItem;