import styled from 'styled-components'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  align-items: center;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  border: 2px solid #ffffff;
  border-radius: 7px;
  background-color: transparent;
  padding: 15px;
  padding-left: 18px;
  padding-right: 18px;
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 19px;
  width: 40px;
  font-family: 'Bree Serif';
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 500;
`
export const Score = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 120px;
  background-color: #ffffff;
  border-radius: 9px;
`

export const Paragraph = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 18px;
  margin-bottom: 0;
  margin-top: 0;
`
export const Paragraph2 = styled(Paragraph)`
  font-family: 'Roboto';
  font-size: 30px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 400px;
`
export const ButtonsContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const ButtonsContainer3 = styled(ButtonsContainer2)`
  width: 450px;
  height: 450px;
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const Image = styled.img`
  height: 150px;
  width: 150px;
`

export const Button2 = styled.button`
  border: none;
  background-color: #ffffff;
  color: #223a5f;
  font-size: 14px;
  font-family: 'Bree Serif';
  cursor: pointer;
  height: 30px;
  width: 70px;
  border-radius: 8px;
  align-self: flex-end;
`
export const PopupElement = styled(Popup)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 50vw;
  height: 50vh;
  align-self: flex-end;
`

export const ModelContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 50px;
  padding-top: 0;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 10px;
  height: 10px;
  border: none;
  margin-top: 32px;
  outline: none;
  cursor: pointer;
  margin-bottom: 40px;
`

export const CloseIcon = styled(RiCloseLine)`
  align-self: flex-end;
`
export const Image2 = styled.img`
  height: 400px;
  width: 500px;
`
export const Container4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading2 = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
`
export const Para = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
`
export const Button3 = styled.button`
  border: none;
  background-color: #ffffff;
  color: #223a5f;
  font-size: 13px;
  font-family: 'Bree Serif';
  cursor: pointer;
  height: 40px;
  width: 140px;
  border-radius: 8px;
`
export const Container5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 450px;
`
