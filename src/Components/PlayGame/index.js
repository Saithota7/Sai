import {Component} from 'react'

import {
  Container,
  ScoreContainer,
  HeadingContainer,
  Heading,
  Score,
  Paragraph,
  Paragraph2,
  Button,
  ButtonsContainer,
  ButtonsContainer2,
  Image,
  Button2,
  PopupElement,
  ModelContainer,
  CloseButton,
  CloseIcon,
  Image2,
  Container4,
  Heading2,
  Para,
  Button3,
  Container5,
} from './styledComponent'

const rule = ['ROCKSCISSORS', 'SCISSORSPAPER', 'PAPERROCK']

class PlayGame extends Component {
  state = {
    score: 0,
    clickedButton: '',
    randomSelection: '',
    buttonClicked: false,
    output: [],
    result: '',
  }

  onClickPlayButton = id => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * 3)
    this.setState(
      {
        buttonClicked: true,
        clickedButton: id,
        randomSelection: choicesList[randomNumber].id,
        output: id + choicesList[randomNumber].id,
      },
      () => this.results(),
    )
  }

  results = () => {
    const {score, randomSelection, output, clickedButton} = this.state
    if (clickedButton === randomSelection) {
      this.setState({score, result: 'IT IS DRAW'})
    } else if (rule.includes(output)) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    }
  }

  onClickPlayAgainButton = () => {
    this.setState({buttonClicked: false})
  }

  resultContainer = () => {
    const {choicesList} = this.props
    const {clickedButton, randomSelection, result} = this.state
    const imageItem1 = choicesList.filter(each => each.id === clickedButton)
    const imageItem2 = choicesList.filter(each => each.id === randomSelection)

    return (
      <Container5>
        <ButtonsContainer2>
          <Container4>
            <Heading2>YOU</Heading2>
            <Button
              type="button"
              data-testid={`${clickedButton.toLowerCase()}Button`}
            >
              <Image src={imageItem1[0].imageUrl} alt="your choice" />
            </Button>
          </Container4>
          <Container4>
            <Heading2>OPPONENT</Heading2>
            <Button
              type="button"
              data-testid={`${randomSelection.toLowerCase()}Button`}
            >
              <Image src={imageItem2[0].imageUrl} alt="opponent choice" />
            </Button>
          </Container4>
        </ButtonsContainer2>
        <Para>{result}</Para>
        <Button3 type="button" onClick={this.onClickPlayAgainButton}>
          PLAY AGAIN
        </Button3>
      </Container5>
    )
  }

  render() {
    const {score, buttonClicked, result} = this.state
    console.log(score, result)
    const {choicesList} = this.props
    return (
      <Container>
        <ScoreContainer>
          <HeadingContainer>
            <Heading>Rock Paper Scissors</Heading>
          </HeadingContainer>
          <Score>
            <Paragraph>Score</Paragraph>
            <Paragraph2>{score}</Paragraph2>
          </Score>
        </ScoreContainer>
        {!buttonClicked ? (
          <ButtonsContainer>
            <ButtonsContainer2>
              <Button
                type="button"
                data-testid="rockButton"
                onClick={() => this.onClickPlayButton(choicesList[0].id)}
              >
                <Image src={choicesList[0].imageUrl} alt={choicesList[0].id} />
              </Button>
              <Button
                type="button"
                data-testid="paperButton"
                onClick={() => this.onClickPlayButton(choicesList[1].id)}
              >
                <Image src={choicesList[1].imageUrl} alt={choicesList[1].id} />
              </Button>
            </ButtonsContainer2>
            <Button
              type="button"
              data-testid="scissorsButton"
              onClick={() => this.onClickPlayButton(choicesList[2].id)}
            >
              <Image src={choicesList[2].imageUrl} alt={choicesList[2].id} />
            </Button>
          </ButtonsContainer>
        ) : (
          this.resultContainer()
        )}
        <PopupElement modal trigger={<Button2 type="button">Rules</Button2>}>
          {close => (
            <ModelContainer>
              <CloseButton
                type="button"
                aria-label="close"
                onClick={() => close()}
              >
                <CloseIcon size="30" color="#616e7c" />
              </CloseButton>
              <Image2
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </ModelContainer>
          )}
        </PopupElement>
      </Container>
    )
  }
}

export default PlayGame
