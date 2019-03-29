import React from 'react';
import styles from './ListItem.css';
import SaveButton from '../../containers/SaveButton';

export default function ListItem(props) {
  let {businessName, imgUrl, rating, reviewCount, url, price} = props;
  return (
    <div className={styles.listItem}>
      <img className={styles.img} src={imgUrl} />
      <div className={styles.content}>
        <h3 className={styles.title}>{businessName}</h3>
        <p className={styles.price}>{price}</p>
        <div className={styles.ratingReview}>
          <span className={styles.rating}>{rating} stars</span>
          <span className={styles.reviews}>{reviewCount} reviews</span>
        </div>
        <p><a target="_blank" href={url}>View on Yelp</a></p>
        <SaveButton business={props} />
      </div>
    </div>
  )
}