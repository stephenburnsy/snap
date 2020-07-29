import * as React from 'react';
import { ICardNoProps } from './ICardNoProps';

export default class CardNumber extends React.Component<ICardNoProps, {}> {
    public render(): React.ReactElement<ICardNoProps> {
        return (
                <div className= {this.props.style}> {this.props.cardNo} </div>
        );
    }
  }