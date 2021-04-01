import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {img1, img2, img3, img4, img5} from './image'

function Cards() {
    return (
        <div className={'cards'}>
            <h1>Check out these EPIC Destinations!</h1>
            <div className={'cards__container'}>
                <div className={'cards__wrapper'}>
                    <ul className={'cards__items'}>
                        <CardItem
                            src={img1}
                            text={'Explore the hidden waterfall deep inside the Amazon Jungle'}
                            label={'Adventure'}
                            path={'/services'}
                        />
                        <CardItem
                            src={img2}
                            text={'Travel through the Islands of Bali in a Private Cruise'}
                            label={'Luxury'}
                            path={'/services'}
                        />
                    </ul>
                    <ul className={'cards__items'}>
                        <CardItem
                            src={img3}
                            text={'Set Sail in the Atlantic Ocean visiting Uncharted Waters'}
                            label={'Mystery'}
                            path={'/services'}
                        />
                        <CardItem
                            src={img4}
                            text={'Experience Football on Top of the Himilayan Mountains'}
                            label={'Adventure'}
                            path={'/products'}
                        />
                        <CardItem
                            src={img5}
                            text={'Ride through the Sahara Desert on a guided camel tour'}
                            label={'Adrenaline'}
                            path={'/sign-up'}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
