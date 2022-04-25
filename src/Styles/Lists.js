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
  margin-right: 1rem;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
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

display:flex;
flex-direction: column;
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
`
export const Triangle = styled.div`
@media only screen and (max-width: 720px) {
  padding-bottom:10%;
}
`