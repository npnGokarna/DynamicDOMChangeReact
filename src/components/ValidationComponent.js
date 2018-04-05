import React, { Component } from 'react';


class ValidationComponent extends Component{

    render() {
        return (
            this.props.wordCount >= 5 ? 
          <div>
               <p style = {{ color: 'green'}}>The length of "{this.props.word}" is good!! {this.props.wordCount}</p>
          </div> : 
          <div>
            <p style = {{color : 'red'}}>The length of "{this.props.word}" is no good!! {this.props.wordCount}</p>
          </div>
        );
      }

}

export default ValidationComponent;
