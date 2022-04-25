import styled from "styled-components"

export const ButtonsParent = styled.div`
margin:0 2%;
display: flex;
flex-direction: column;
@media only screen and (max-width: 720px) {
flex-direction:row;
align-items:center;
    text-align:center;
    justify-content:space-between;
  margin:4% 15%;
    width:70%;

button{
    display: flex;
    align-items:center;
    text-align:center;
    justify-content:center;
}
}
`
export const CustomButton = styled.button` //made for mobile
display: flex;
align-items: center;
justify-content: center;
border:none;
width: 24px;
height: 24px;
border-radius:28px;
margin-bottom:8px;
margin-left:21px;
img{
  width: 12px;
  height: 12px;
}
background: linear-gradient(180deg, #2F924D 0%, #6BB847 100%);
@media only screen and (max-width: 720px) {
  width: 48px;
height: 48px;
margin:4px;
img{
  width: 24px;
  height: 24px;
}
}

`