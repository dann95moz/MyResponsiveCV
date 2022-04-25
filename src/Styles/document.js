import styled from "styled-components"


export const Document = styled.div`
width:80%;
margin: 0 10%;
padding-bottom: 20px;
height:auto;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
*{
    
    font-family: "Lato";
}

@media only screen and (max-width: 810px) {
    margin: 0 ;
    width:100%;
    border:none;
    padding-bottom: 0px;
   
}
background-image: url("https://res.cloudinary.com/dn1jeryp3/image/upload/v1650718455/Group_71_cb5jmr.svg" );
background-repeat: no-repeat;
background-size: 300px;
background-position: bottom right;

`
export const Title = styled.div`
text-align:center;

display:flex;
flex-direction:column;
width:16%;
margin-left:1.58%;
@media only screen and (max-width: 810px) {
 justify-content:center;
text-align:center;
width:100%;
margin-left:0;
}
`
export const ProfDiv = styled.div`
margin-left:30%;
font-weight: 400;
width:200px;
color: #4f4f4f;
margin-top:40px;
@media only screen and (max-width: 810px) {
    margin: 0;
    font-size: 20px;
    width: auto;
}
`
export const DateContainer = styled.div`
display:flex;`
export const Dates = styled.p`
font-style:italic;
margin:2px 8px;
color:#828282;
`
export const FooterImg = styled.img`
position: relative;
left:78.3%;


@media only screen and (max-width: 810px) {
    left   :26%;
}`
export const ContactInfo = styled.a`
display:flex;
align-items: baseline;
text-decoration: underline;
color: #828282;
font-size:18px;
&:hover{
    color:#2D8C49
;
}
p{
    display:flex;
    margin-left:4px;
    
}
@media only screen and (max-width: 810px) {
    p{
        display:none;
    }
}
`
export const SplitBar = styled.img`
position: absolute;
top:10%;
left: 35%;
height: 296%;
filter: invert(54%) sepia(0%) saturate(0%) hue-rotate(217deg) brightness(95%) contrast(87%);

@media only screen and (max-width: 810px) {
    display:none;
}
`
export const ProfileContainer = styled.div`
    position: relative;
    left: 34%;
    bottom: 300px;
    width: 764px;
    @media only screen and (max-width: 810px) {
  position:static;
  width:auto;
}
`
export const Experience = styled.div`
`