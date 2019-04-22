import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    highScore: 0,
    overallHighScore: "",
    clicked: []
  };

  clickedImage = id => {
    // alert(id);
    // If the ID of the image is already in the clicked array, reset the game
      if(this.state.clicked.includes(id)) {
        alert("You clicked this image already!");
        this.setState({score: 0});
        // If the game high score is greater than the current highest score, set the game high score to be the new highest score, otherwise keep the highest score the same
        if(this.state.highScore > this.state.overallHighScore) {
          this.setState({overallHighScore: this.state.highScore});
        } else {
          this.setState({overallHighScore: this.state.overallHighScore});
        }
        this.setState({clicked: []});
        this.setState({highScore: 0});
        console.log(this.state);
      } 
      // Otherwise, push the image's ID into the clicked array and increment the scores
      else {
        let score = this.state.score;
        score++;
        this.setState({score: score});
        let highScore = this.state.highScore;
        highScore++;   
        this.setState({highScore: highScore});
        let clicked = this.state.clicked;
        clicked.push(id);
        this.setState({clicked: clicked});
        console.log(this.state);
      }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
        <h2>Score: {this.state.score}</h2>
        <h2>High Score: {this.state.overallHighScore}</h2>
          {this.state.friends.map(friend => (
            <FriendCard
              clickedImage={this.clickedImage}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
      </Wrapper>
    );
  }
}

export default App;
