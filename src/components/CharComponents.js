import React, {Component } from 'react';


class CharComponents extends Component{

    render(){
        return(
            <div>
                <p onClick = {this.props.click}>{this.props.word}</p>
            </div>

        );
    };

}

export default CharComponents;