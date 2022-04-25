import styled from "styled-components"
export const Ul = styled.ul`
color:#219653;
font-family: 'Source Sans Pro' !important;
font-style: normal;
font-weight: 700;
font-size:18px;`

export const UlCat = styled.ul`


 list-style:none;
 & li::before {
     font-size: 26px;
    content: "•"; 
    height:16px;
            color: #27AE60;
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: -1rem;

  position: relative;
  top:4px;
}

  display: grid; 
  position: absolute;
left: 36%;
width: 700px;
top: 88%;
grid-template-columns: 14rem 14rem 14rem;
grid-template-rows: 3rem 3rem 3rem;
  gap: 8px 0px; 
  grid-template-areas: 
    ". . ."
    ". . ."
    ". . ."; 
  justify-content: center; 
  align-content: center; 
  justify-items: start;  
  align-items: center; 

color:#828282;
font-family: 'Source Sans Pro' !important;
font-style: normal;
font-weight: 400;
@media only screen and (max-width: 720px) {
width:100%;
  position: static;
  margin:0;
  grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
}
margin:0 !important;

`
export const Education = styled.ul`

 list-style:none;
 & li::before {
     font-size: 26px;
    content: "•"; 
    height:16px;
            color: #27AE60;
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: -1rem;
  
  position:relative;
  top:5px;
  
  
}


li{
    color: #4f4f4f;
    
}
   

`
export const LiStrong = styled.li`
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 15px;

margin-bottom: 10px;
color: #4f4f4f;
`
export const DatesContainer = styled.div`
display:flex;
margin-top:-8px;
p{
   color:#828282;
}
`
export const Ulvertical = styled.ul`
 list-style:none;

 display: grid; 
  position: relative;
  left: 3.5%;
grid-template-columns: 15rem 15rem 15rem;
grid-template-rows: 3rem 3rem 3rem;
  gap: 8px 0px; 
  grid-template-areas: 
    ". . ."
    ". . ."
    ". . ."; 
  justify-content: center; 
  align-content: center; 
  justify-items: start;  
  align-items: center; 
& li::before {
     font-size: 26px;
    content: "•"; 
    height:16px;
            color: #27AE60;
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: -1rem;
  position:relative;
  top:3px;
}
@media only screen and (max-width: 720px) {
  display:flex;
  flex-wrap:wrap;
  justify-content: left; 
  align-content: left; 
  justify-items: start;  
  align-items: left; 
  gap: 0px 100%;
  position:static;
}

`
export const Triangle = styled.div`
@media only screen and (max-width: 720px) {
  padding-bottom:10%;
}
`
export const Stools = styled.div`

h1{
  position: absolute;
left: 36%;
top: 80% !important;

}
ul{
  margin-top:10%;
}
@media only screen and (max-width: 720px) {
  h1{
    position: static;
  }
}
`
export const SSkills = styled.div`
position: absolute;
left: 36%;
top: 109%;
color: #828282;
width: 700px;

@media only screen and (max-width: 720px) {
  position:static;
}
`
export const Langs = styled.ul`
color: #828282;
width:700px;
list-style:none;

display: grid; 
 position: relative;
 left: 20%;
 top:-150px;
grid-template-columns: 14rem 14rem ;
grid-template-rows: 3rem 3rem;
 gap: 0px 0px; 
 grid-template-areas: 
   ". . "
   ". . "
   ". . "; 
 justify-content: center; 
 align-content: center; 
 justify-items: start;  
 align-items: center; 
& li::before {
    font-size: 26px;
   content: "•"; 
   height:16px;
           color: #27AE60;
 font-weight: bold;
 display: inline-block; 
 width: 1em;
 margin-left: -1rem;
 position:relative;
 top:3px;
}
@media only screen and (max-width: 720px) {
 display:flex;
 flex-wrap:wrap;
 justify-content: left; 
 align-content: left; 
 justify-items: start;  
 align-items: left; 
 gap: 0px 100%;
 width: auto;
 position:static;
}
`