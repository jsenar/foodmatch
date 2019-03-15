import React from 'react';
import styles from './ListItem.css';

export default function ListItem({businessName, imgUrl, rating, url}) {
  return (
    <div className={styles.listItem}>
      <h3 className={styles.title}>{businessName}</h3>
      <img className={styles.img} src={imgUrl} />
      <p>{rating} stars</p>
      <p><a target="_blank" href={url}>View on Yelp</a></p>
    </div>
  )
}