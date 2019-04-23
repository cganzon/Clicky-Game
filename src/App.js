import React, { Component } from "react";
import HeroCard from "./components/HeroCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// Using an external npm package to shuffle the friends array
import heroes from "./heroes.json";
import shuffle from "shuffle-array";

class App extends Component {
  state = {
    heroes: heroes,
    score: 0,
    highScore: 0,
    overallHighScore: "",
    clicked: []
  };

  clickedImage = id => {
    // alert(id);
    // If the ID of the image is already in the clicked array, reset the game
    if (this.state.clicked.includes(id)) {
      alert("Sorry you clicked this image alreaady!");
      this.setState({ score: 0 });
      // If the game high score is greater than the current highest score, set the game high score to be the new highest score, otherwise keep the highest score the same
      if (this.state.highScore > this.state.overallHighScore) {
        this.setState({ overallHighScore: this.state.highScore });
      } else {
        this.setState({ overallHighScore: this.state.overallHighScore });
      }
      this.setState({ clicked: [] });
      this.setState({ highScore: 0 });
      shuffle(this.state.heroes);
      // console.log(this.state);
    }
    // Otherwise, push the image's ID into the clicked array and increment the scores
    else {
      let score = this.state.score;
      score++;
      this.setState({ score: score });
      let highScore = this.state.highScore;
      highScore++;
      this.setState({ highScore: highScore });
      let clicked = this.state.clicked;
      clicked.push(id);
      this.setState({ clicked: clicked });
      shuffle(this.state.heroes);
      // console.log(this.state);
    }
  };

  // Map over this.state.heroes and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Overwatch Clicky Game!</Title>
        <Title>Score: {this.state.score}</Title>
        <Title>High Score: {this.state.overallHighScore}</Title>
        {this.state.heroes.map(friend => (
          <HeroCard
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
