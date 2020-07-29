import * as React from 'react';
import { IGameProps } from './IGameProps';
import Card from '../card/Card'
import styles from './game.module.scss';
import { ICardProps } from '../card/ICardProps';
import '../../../branding.css';

export default class Game extends React.Component<IGameProps, {}> {
    deck:ICardProps[] = [
        /*{cardNo: 'A', image:"../../../Images/smol.png"},
        {cardNo: '2', image:"../../../Images/smol.png"},
        {cardNo: '3', image:"../../../Images/smol.png"},
        {cardNo: '4', image:"../../../Images/smol.png"},
        {cardNo: '5', image:"../../../Images/smol.png"},
        {cardNo: '6', image:"../../../Images/smol.png"},
        {cardNo: '7', image:"../../../Images/smol.png"},
        {cardNo: '8', image:"../../../Images/smol.png"},
        {cardNo: '9', image:"../../../Images/smol.png"},
        {cardNo: '10',image:"../../../Images/smol.png"},
        {cardNo: 'J', image:"../../../Images/smol.png"},
        {cardNo: 'Q', image:"../../../Images/smol.png"},
        {cardNo: 'K', image:"../../../Images/smol.png"},
        {cardNo: 'A', image:"../../../Images/heart.png"},
        {cardNo: '2', image:"../../../Images/heart.png"},
        {cardNo: '3', image:"../../../Images/heart.png"},
        {cardNo: '4', image:"../../../Images/heart.png"},
        {cardNo: '5', image:"../../../Images/heart.png"},
        {cardNo: '6', image:"../../../Images/heart.png"},
        {cardNo: '7', image:"../../../Images/heart.png"},
        {cardNo: '8', image:"../../../Images/heart.png"},
        {cardNo: '9', image:"../../../Images/heart.png"},
        {cardNo: '10',image:"../../../Images/heart.png"},
        {cardNo: 'J', image:"../../../Images/heart.png"},
        {cardNo: 'Q', image:"../../../Images/heart.png"},*/
        {cardNo: 'K', image:"../../../Images/diamond.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: 'J', image:"../../../Images/diamond.png", noStyle: 'topLeftRed', style: 'cardContainer'},
    ]; 
 
    public render(): React.ReactElement<IGameProps> {
        return (
            <div className={styles.game}> 
                {this.deck.map((current, index) =>{
                    return <Card
                        cardNo = {current.cardNo}
                        image = {current.image}
                        style = {current.style}
                        noStyle= {current.noStyle}
                    />
                })
                }
            </div>
            );
        }
    }

  