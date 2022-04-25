

import { ButtonsParent, CustomButton } from "./Styles/buttons";
import { ContactInfo, DateContainer, Dates, Document, Experience, ProfDiv, ProfileContainer, SplitBar, Title } from "./Styles/document"
import { Contact, H1, H2, Nombre } from "./Styles/fonts";
import { DatesContainer, Education, Triangle, Ul, UlCat, Ulvertical } from "./Styles/Lists";
import { Header } from "./Styles/topLine";
import Vector34 from "../src/Vector34.svg";

function App() {
  return (

    <Document className="App">

      <Header></Header>
      <SplitBar src={Vector34} alt="" />

      <Title>
        <Nombre>DANIEL RICARDO CORREDOR ACOSTA</Nombre>
        <ProfDiv>FRONT-END DEVELOPER</ProfDiv>

        <Contact>Contact</Contact>

      </Title>
      <ButtonsParent>
        <ContactInfo href="https://github.com/dann95moz">
          <CustomButton>
            <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1650644804/uim_github-alt_q7qv3g.svg"
              alt="" />

          </CustomButton>
          <p>/dann95moz</p>
        </ContactInfo>
        <ContactInfo href="mailto:dann95moz@gmail.com">
          <CustomButton>
            <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1650642423/mail_y3xhfw.svg" alt="" />
          </CustomButton>
          <p>Dann95.moz@gmail.com</p>
        </ContactInfo>
        <ContactInfo href="tel:+573204362076">
          <CustomButton>
            <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1650642423/phone_eim1cx.svg" alt="" />
          </CustomButton>
          <p>+57 320 436 2076</p>
        </ContactInfo>
        <ContactInfo href="https://www.linkedin.com/in/daniel-corredor-acosta/">
          <CustomButton>
            <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1650642423/in_sfqcog.svg" alt="" />
          </CustomButton>
          <p>Daniel Corredor Acosta</p>
        </ContactInfo>
      </ButtonsParent>
      <ProfileContainer>
        <H1>Profile</H1>
        <H2>I am a person passionate about technologies, in constant search of new knowledge and growth, a professional capable of solving problems by providing new ideas and solutions to problems. An empathetic person, able to solve conflicts and understand the work teams generating the ideal climate for the fulfillment of the objectives.</H2>
      </ProfileContainer>
      <Experience>
        <H1>Experience</H1>
        <DateContainer>
          <Ul>
            <li>Academia Geek &nbsp;</li>
          </Ul>

          <Dates>01/2022 </Dates> | <Dates> 04/2022</Dates>
        </DateContainer>
        <H2>HTML | Javascript | CSS | React | React hooks | class and functional components | Restful API’s | web deployment | Styled components | bootstrap | materialUI.</H2>

        <Dates>Trainee </Dates>
      </Experience>
      <H1>Software Tools</H1>
      <UlCat>
        <li>ReactJs</li>
        <li>Javascript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Git/GitHub</li>
        <li>Responsive UI</li>
        <li>Firebase</li>
        <li>Redux</li>
        <li>Bootstrap / MUI</li>
      </UlCat>
      <H1>Education</H1>
      <Education>

        <li>Front-end development BootCamp </li>

        <Dates>Academia Geek </Dates>
        <DatesContainer>
          <Dates>1/2022</Dates>
          <p>|</p>
          <Dates>4/2022</Dates>
        </DatesContainer>
        <li>Frontend developer</li>

        <Dates>Platzi </Dates>
        <DatesContainer>
          <Dates>1/2022</Dates>
          <p>|</p>
          <Dates>4/2022</Dates>
        </DatesContainer>
        <li>Fundamentals of coding I & II</li>

        <Dates>Grasshopper </Dates>

        <DatesContainer>
          <Dates>1/2022</Dates>
          <p>|</p>
          <Dates>4/2022</Dates>
        </DatesContainer>
        <li>Basic Javascript course</li>
        <Dates>Platzi </Dates>

        <DatesContainer>
          <Dates>1/2022</Dates>
          <p>|</p>
          <Dates>4/2022</Dates>
        </DatesContainer>
        <li>Practical Javascript course</li>
        <Dates>Platzi </Dates>

        <DatesContainer>
          <Dates>1/2022</Dates>
          <p>|</p>
          <Dates>4/2022</Dates>
        </DatesContainer>
        <li>Environment manager</li>
        <Dates> University “universidad Piloto de Colombia” </Dates>
        <DatesContainer>
          <Dates>1/2022</Dates>
          <p>|</p>
          <Dates>4/2022</Dates>
        </DatesContainer>

      </Education>
      <H1>Soft Skills</H1>
      <Ulvertical>
        <li>Compromise.</li>
        <li>Leadership.</li>
        <li>Listening.</li>
        <li>Teamwork.</li>
        <li>Patience.</li>
        <li>Communication.</li>

      </Ulvertical>
      <H1>Languages</H1>

      <Triangle>
        <Ulvertical>
          <li>English B1</li>
          <li>French B2</li>
          <li>Spanish Native</li>
        </Ulvertical>
      </Triangle>
    </Document>

  );
}

export default App;
