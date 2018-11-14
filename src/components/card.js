import React from 'react';
import { Link } from 'react-router-dom';
import localStyles from './local-styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => (
  <article>
      <img src={props.cardInfo.image} alt="Sample photo" />
      <div className={`${localStyles.text}`}>
        <h3>{props.cardInfo.title}</h3>
        <p>{props.cardInfo.description}</p>

          <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${props.cardInfo.uri}`}>Share on Facebook</a> 
          | <a target="_blank" href={`https://plus.google.com/share?url=${props.cardInfo.uri}`}>Plus on Google+</a> 
          | <a target="_blank" href={`https://twitter.com/intent/tweet?text=${props.cardInfo.title}&url=${props.cardInfo.uri}&via=MRKTRS"`}>Tweet</a> 
          | <a target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=${props.cardInfo.uri}&title=${props.cardInfo.title}&summary=${props.cardInfo.description}&source=${props.cardInfo.uri}`}>Share on LinkedIn</a> 
          | <a target="_blank" href={`https://pinterest.com/pin/create/button/?url=${props.cardInfo.uri}&description=${props.cardInfo.description}&media=${props.cardInfo.image}`}>Pin on Pinterest</a> 

      </div>
    </article>
);
