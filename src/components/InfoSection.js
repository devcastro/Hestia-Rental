import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { Button } from "./Button";

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding 4rem 0rem;

`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300ox) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  transform: translateY(50px);
  transition: all 0.5s ease-out;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }

  text-appear {
    opacity: 1;
    transform: translateY(0px);
  }
`;
const ColumnRight = styled(motion.div)`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const textvariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -300 },
}; // text animation variant

const imagevariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 300 },
}; // text animation variant

const InfoSection = ({
  heading,
  paragraph1,
  paragraph2,
  buttonLabel,
  reverse,
  image, //properties called from InfoData
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Section>
      <Container>
        <ColumnLeft
          reverse={reverse}
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={textvariants}
        >
          <h1>{heading}</h1>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <Button to="/rentals" primary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>

        <ColumnRight
          reverse={reverse}
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={imagevariants}
        >
          <img src={image} alt="vacation rental home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
