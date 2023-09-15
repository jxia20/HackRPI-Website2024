import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

// need to re-write these asap
const faqs = [
  { title: 'Prizes?',
    content:
      'Get some swag prizes!',
  },
];

const FAQPage = () => {
  const [currentActiveKey, setCurrentActiveKey] = useState(null);

  const toggleActiveKey = (key) => {
    setCurrentActiveKey(currentActiveKey === key ? null : key);
  };

  return (
    <Container fluid
      id="faq"
    >
      <h1
        style={{
          fontFamily: 'Mokoto',
          fontWeight: '400',
          color: 'white',
          textAlign: 'center',
          fontSize: '3rem',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',

          paddingBottom: 10,
        }}
      >
        FAQs
      </h1>
      <Accordion style={{ fontFamily: 'Poppins', width: '75vw', margin: 'auto' }} >
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header> {faq.title} </Accordion.Header>
            <Accordion.Body> {faq.content} </Accordion.Body>
          </Accordion.Item>
        ))}

        <AccordionItem eventKey="1">
          <AccordionHeader>Where is it happening?</AccordionHeader>
          <AccordionBody>HackRPI will take place in the Darrin Communications Center (DCC) on the RPI Campus in Troy, NY. Exact directions can be found <a href="https://www.google.com/maps/place/Darrin+Communications+Center/@42.7293552,-73.6821407,17z/data=!3m1!4b1!4m6!3m5!1s0x89de0f0a7e6fd845:0xb802c916a2bdf3c3!8m2!3d42.7293552!4d-73.6795658!16s%2Fg%2F1tg7s_yx">here</a>.</AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey='2'>
          <AccordionHeader>What could I win?</AccordionHeader>
          <AccordionBody>Our prizes are to be determined! There will be overall winners, and specific prize categories you can compete in! Have ideas for prizes you’d want to see? Let us know in our <a href='https://discord.gg/QHhRQ8CTcP'>discord</a>.</AccordionBody>
        </AccordionItem>

      </Accordion>

      <h2 style ={{ fontFamily: 'Poppins Light', fontSize: 20, textAlign: "center", paddingTop: 20}}
      >Feel free to contact us with any other questions at <a href='mailto:hackrpi@rpi.edu' style ={{color: "#db4941"}}>hackrpi@rpi.edu!</a></h2>
      
    </Container>
  );
};

export default FAQPage;
