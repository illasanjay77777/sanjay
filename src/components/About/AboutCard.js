import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Sanjay Kiran Illa.</span>
            I am from <span className="purple"> Amalapuram, Andhra pradesh in the India.</span>
            <br /> I am a final year student in my graduate program for Electronics And Communication
            Engneering at Lendi Institute Of Engneering And Technology.
            <br />
            Additionally, I Am Done internship in Fullstack at Nullclass.
            <br />
            <br />
            Some of the relevant coursework I've taken are: 
          </p>
          <ul>
            <li className="about-activity" >
              <ImPointRight />  Crash Course On Python-Google
            </li>
            <li className="about-activity">
              <ImPointRight /> Prompt Engneering For Chatgpt-Vanderbilt University
            </li>
            <li className="about-activity">
              <ImPointRight /> Introduction to Back-End Development - Meta
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving Trough C - NPTEL
            </li>
            <li className="about-activity">
              <ImPointRight /> The Complete Web development BootCamp 2024 - Udemy
            </li>
            <li className="about-activity">
              <ImPointRight /> Web Development Wizardry: HTML & CSS Course for Beginners - Udemy
            </li>
            <li className="about-activity">
              <ImPointRight /> Speak English Professionally: In Person, Online & On the Phone - Coursera
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Base And Management System - NPTEL
            </li>
            <li className="about-activity">
              <ImPointRight /> Step test English - Hindu Groups
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
