import React, { Component } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import TitlePicture from "./components/TitlePicture";


function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    fail: "",
    clicked: [],
  };

  userClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.scoreUp();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.resetScore();
    }
  };

  resetScore = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      fail: "Oooops!",
      clicked: []
    });
    this.shuffle();
  };

  
  scoreUp = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      fail: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ fail: "You win!" });
    }
    this.shuffle();
  };

  shuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };


  // Map over this.state.friends and render a Cards component for each friend object
  render() {
    return (
      <Wrapper>
        <TitlePicture />
        <Navbar
          title="Don't click the same character twice!"
          score={this.state.score}
          topScore={this.state.topScore}
          fail={this.state.fail}
        />
        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <Cards
                  id={friend.id}
                  key={friend.id}
                  image={friend.image}
                  userClick={this.userClick}
                  scoreUp={this.scoreUp}
                  resetScore={this.resetScore}
                  shuffle={this.shuffle}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;