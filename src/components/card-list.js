import React from 'react';
import { Link } from 'react-router-dom';
import localStyles from './local-styles.css';
import Card from '../components/card';

const CardList = (props) => {
    const RenderedCards = props.cards.map(function(cardInfo) {
        return <Card key={cardInfo._id} cardInfo={cardInfo} />
    });

    return (
        <main className={`${localStyles.grid}`}>
        {RenderedCards}
        </main>
    );
};

export default (props) => (
    <CardList cards={props.cards} />
);
