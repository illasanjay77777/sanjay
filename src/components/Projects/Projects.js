import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import code from "../../Assets/Projects/codeEditor.png";
import sim from "../../Assets/Projects/simon.png";
import fyle from "../../Assets/Projects/fyle.png";
import Kepp from "../../Assets/Projects/Kepper.png";
import bitsOfCode from "../../Assets/Projects/todo.png";
import Deck from "../../Assets/Projects/tindog.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong> and  
          <strong className="purple"> Internship Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently with the Github links.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Deck}
              isBlog={false}
              title="Tin Dog"
              description="Developed a responsive website. Implemented adaptive design principles ensuring seamless 
              user experience across various devices and screen sizes. Leveraged Bootstrap’s grid system and components to 
              enhance website aesthetics and functionality."
              ghLink = "https://github.com/illasanjay77777/tindog"
              demoLink = "https://illasanjay77777.github.io/tindog/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={sim}
              isBlog={false}
              title=" Siemon Game"
              description="Conceptualized and developed an interactive Simon game website, challenging users 
                with increasing sequences based on randomness. Employed JavaScript and jQuery to facilitate game 
                mechanics,including sequence generation, user input validation, and score tracking."
                ghLink = "https://github.com/illasanjay77777/simon"
                demoLink = "https://illasanjay77777.github.io/simon/"
            />
          </Col>

          <Col md={6} className="ecommerce">
            <ProjectCard
              imgPath={code}
              isBlog={false}
              title="ecommerce"
              description="Cara Website is a dynamic e-commerce platform developed using HTML, CSS, and Bootstrap, tailored specifically for Shopify. This project involved the creation of a fully functional and visually appealing online store aimed at providing users with a seamless shopping experience. Leveraging the power of these technologies, 
              the website offers a comprehensive range of features and functionalities essential for an e-commerce platform."
              ghLink = "https://github.com/illasanjay77777/ecommerce"
              demoLink = "https://illasanjay77777.github.io/ecommerce/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="To-do-List"
              description="Developed a server-side to-do list web application that enables users to manage, add, and delete 
              tasks. Engineered an efficient backend using Node.js and Express.js, with MongoDB serving as the database to 
              store user tasks."
              ghLink = "https://github.com/illasanjay77777/todo"
             demoLink = "https://risk-suck.onrender.com/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Kepp}
              isBlog={false}
              title="Keeper"
              description="Conceptualized and developed a note-keeping application, allowing users to effortlessly write, manage, 
              and organize their notes. Leveraged React components to create modular and reusable UI elements, ensuring 
              consistent design and efficient code"
              ghLink = "https://github.com/illasanjay77777/keeper"
             demoLink = "https://sanjay-notes-app.onrender.com/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={fyle}
              isBlog={false}
              title="Github Repo page"
              description="The GitHub Repository Topic Viewer simplifies the exploration of GitHub repositories by offering easy navigation through topics, server-side pagination for seamless browsing, loaders during API calls for improved user feedback, and an optional search bar for filtering repositories 
based on keywords or criteria. Whether you're a developer seeking inspiration or a curious enthusiast, this tool provides a user-friendly experience for discovering diverse repositories on GitHub."
             ghLink = "https://github.com/illasanjay77777/Fyle"
             demoLink = "https://illasanjay77777.github.io/Fyle/"
            />
          </Col>
      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
