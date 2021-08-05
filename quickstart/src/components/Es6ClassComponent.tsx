import React, { Component } from 'react'
import flag from '../images/Indian.png';
import {Props,State} from '../model/models'
export default class Es6ClassComponent extends Component<Props,State> {
   
       constructor(props:Props){
          super(props);
          this.state={
              clap:1
          }
       }
          
      handleClick = (event:React.MouseEvent<HTMLElement>) =>{
          this.setState({clap:this.state.clap+1});
      }  
    render() {
        return (
            <div>
                <img src={flag} alt='Indian Flag'></img>
                <div>
                    <p>{this.state.clap}</p>
                <button onClick={this.handleClick}>Like</button>
                </div>
            </div>
        )
    }
}
