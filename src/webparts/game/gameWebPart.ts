import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'HelloWorldWebPartStrings';
import Card from './components/card/Card';
import Game from './components/game/game';
import { IGameProps } from './components/game/IGameProps';

export interface GameWebPartProps {
  deck: Card[];
  style: string;
}


export default class gameWebPart extends BaseClientSideWebPart <GameWebPartProps> {

    public render(): void {
      const element: React.ReactElement<IGameProps> = React.createElement(
        Game,
        {
          deck: this.properties.deck,
          style: this.properties.style
  
        }
      );
  
      ReactDom.render(element, this.domElement);
    }
  
    protected onDispose(): void {
      ReactDom.unmountComponentAtNode(this.domElement);
    }
  
    protected get dataVersion(): Version {
      return Version.parse('1.0');
    }
  
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
      return {
        pages: [
          {
            header: {
              description: strings.PropertyPaneDescription
            },
            groups: [
              {
                groupName: strings.BasicGroupName,
                groupFields: [
                  PropertyPaneTextField('description', {
                    label: strings.DescriptionFieldLabel
                  })
                ]
              }
            ]
          }
        ]
      };
    }
  }