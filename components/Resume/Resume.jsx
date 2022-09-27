import { useState } from "react";
import Section from "../Section/Section";
import Card from "./Card";

const styles = {
  section: "relative pb-[7rem] pt-16 border-t-2 border-black border-solid py-28",
  subtitle: "block text-[#f9004d] mb-4 text-center",
  subtitle2: "block text-[#f9004d] mb-4 text-start",
  title: "text-[#c4cfde] text-5xl lg:text-6xl mb-10 text-center font-bold",
  tabs: "mb-6 flex flex-col md:flex-row justify-center shadow-custom-two",
  tabBtn:
    "bg-gradient-light h-[120px] text-2xl md:text-[2.2rem] w-full font-medium cursor-pointer shadow-custom-one rounded-[10px]",
  tabBtnColor: "text-[#c4cfde]",
  tabActive: "text-[#f9004d]",
  title2: "text-[#c4cfde] text-[2.5rem] mb-10 text-start",
  rows: "flex lg:gap-8 flex-col md:flex-row",
  cards:
    "pl-[1.4rem] relative border-l-[5px] border-solid border-[#17191c] flex flex-col gap-12 pb-8 lg:pb-0",
  edWithExp: "lg:animate-fadein-no-delay lg:opacity-0",
};

const Resume = () => {
  const [ed, setEd] = useState(false);
  const [exp, setExp] = useState(true);
  // const [parent] = useAutoAnimate(/* optional config */);
  return (
    <Section className={styles.section} id="resume">
      <span className={styles.subtitle}>8+ YEARS OF EXPERIENCE</span>
      <h2 className={styles.title}>Resume</h2>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabBtn} ${
            exp ? styles.tabActive : styles.tabBtnColor
          }`}
          onClick={() => {
            setEd(false);
            setExp(true);
          }}
        >
          <span>Experience</span>
        </button>
        <button
          className={`${styles.tabBtn} ${
            ed ? styles.tabActive : styles.tabBtnColor
          }`}
          onClick={() => {
            setEd(true);
            setExp(false);
          }}
        >
          <span>Education</span>
        </button>
      </div>
      <div>
        <div>
          {exp ? (
            <div className={styles.edWithExp}>
              <span className={styles.subtitle2}>2014-Current</span>
              <h2 className={styles.title2}>Job Experience</h2>
              <div className={styles.rows}>
                <div className={styles.cards}>
                  <Card
                    title={"Publicis Sapient"}
                    institution={"Job at Publicis Sapient, Gurgaon (2020 - current)"}
                    description={
                      "Working as a Senior Associate Front-End Developer. Using React, NextJS, NodeJs, HTML, CSS"
                    }
                  />
                  <Card
                    title={"Cognizant"}
                    institution={"Job at Cognizant, Chennai (2018 - 2020)"}
                    description={"Worked as an Associate Front-End Developer. Technologies used Angular, HTML, CSS."}
                  />
                  <Card
                    title={"Mindtree"}
                    institution={"Job at Mindtree, Chennai (2017 - 2018)"}
                    description={
                      "Worked as an Associate Front-End Developer. Technologies used Angular, HTML, CSS."
                    }
                  />
                </div>
                <div className={styles.cards}>
                  <Card
                    title={"E-Team Info Services Pvt. Ltd."}
                    institution={
                      "Job at E-Team Info Services Pvt. Ltd, Greater Noida (2016 - 2017)"
                    }
                    description={
                      "Worked as a UI Developer. Technologiies used HTML, CSS, jQuery."
                    }
                  />
                  <Card
                    title={"Free Bird Info Solutions"}
                    institution={
                      "Job at Free Bird Info Solutions, Noida (2014 - 2016)"
                    }
                    description={
                      "Worked as a UI and PHP Developer. Technologies used Wordpress, HTML, CSS, Javascript."
                    }
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
        {ed ? (
          <div className={styles.edWithExp}>
            {/* <span className={styles.subtitle2}>2007-2010</span> */}
            <h2 className={styles.title2}>Education Quality</h2>
            <div className={styles.rows}>
              <div className={styles.cards}>
                <Card
                  title="B.Tech"
                  institution="Bachelor of Technology in Information Technology"
                  description="Completed from Hinduatan College of Science and Technology, Mathura"
                />
                <Card
                  title="SSC"
                  institution="Senior Secondary"
                  description="Completed from The Model Intermediate College, Kanpur"
                />
              </div>
              <div className={styles.cards}>
                <Card
                  title="HSC"
                  institution="Higher Secondary"
                  description="Completed from The Model Intermediate College, Kanpur"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Section>
  );
};

export default Resume;
