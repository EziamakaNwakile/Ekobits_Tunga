import React, {Component} from 'react'

class Tweet extends Component {
  render(){
    return (
      <div className="divTweet">
        <div className="tweety">
        <h1>Username: {this.props.username}</h1>
        <h4>Name: {this.props.name}</h4>
        <h4>Date: {this.props.date}</h4>
        <h4>Message: {this.props.message}</h4>
        </div>
      </div>  
    )
    }  
}

export default Tweet;

  
      