import { useState } from "react";
import Section from "../Section/Section";
import Card from "./Card";

const styles = {
  section: "relative pb-[7rem] pt-16",
  subtitle: "block text-[#f9004d] mb-4 text-center",
  subtitle2: "block text-[#f9004d] mb-4 text-start",
  title: "text-[#c4cfde] text-[3.5rem] mb-10 text-center font-bold",
  tabs: "mb-6 flex flex-col md:flex-row justify-center shadow-custom-two",
  tabBtn:
    "bg-gradient-light h-[120px] text-2xl md:text-[2.2rem] w-full font-medium cursor-pointer shadow-custom-one rounded-[10px]",
  tabBtnColor: "text-[#c4cfde]",
  tabActive: "text-[#f9004d]",
  title2: "text-[#c4cfde] text-[2.5rem] mb-10 text-start",
  rows: "flex lg:gap-8 flex-col md:flex-row",
  cards:
    "pl-[1.4rem] relative border-l-[5px] border-solid border-[#17191c] flex flex-col gap-12 pb-8 lg:pb-0",
  edWithExp: "lg:animate-fadein-no-delay lg:opacity-0"
};

const Resume = () => {
  const [ed, setEd] = useState(true);
  const [exp, setExp] = useState(false);
  // const [parent] = useAutoAnimate(/* optional config */);
  return (
    <Section className={styles.section} id="resume">
      <span className={styles.subtitle}>7+ YEARS OF EXPERIENCE</span>
      <h1 className={styles.title}>Resume</h1>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabBtn} ${ed ? styles.tabActive : styles.tabBtnColor}`}
          onClick={() => {
            setEd(true);
            setExp(false);
          }}
        >
          <span>Education</span>
        </button>
        <button
          className={`${styles.tabBtn} ${exp ? styles.tabActive : styles.tabBtnColor}`}
          onClick={() => {
            setEd(false);
            setExp(true);
          }}
        >
          <span>Experience</span>
        </button>
      </div>
      <div>
          {ed ? (
            <div className={styles.edWithExp}>
              <span className={styles.subtitle2}>2007-2010</span>
              <h2 className={styles.title2}>Education Quality</h2>
              <div className={styles.rows}>
                <div className={styles.cards}>
                  <Card />
                  <Card />
                  <Card />
                </div>
                <div className={styles.cards}>
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </div>
          ) : null}
          <div>
            {exp ? (
              <div className={styles.edWithExp}>
                <span className={styles.subtitle2}>2007-2010</span>
                <h2 className={styles.title2}>Job Experience</h2>
                <div className={styles.rows}>
                  <div className={styles.cards}>
                    <Card
                      title={"The Personal Portfolio Mystery"}
                      institution={"Job at Rainbow-Themes (2008 - 2016)"}
                      description={
                        "Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                      }
                    />
                    <Card
                      title={"The Personal Portfolio Mystery"}
                      institution={"Job at Rainbow-Themes (2008 - 2016)"}
                      description={
                        "Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                      }
                    />
                    <Card
                      title={"The Personal Portfolio Mystery"}
                      institution={"Job at Rainbow-Themes (2008 - 2016)"}
                      description={
                        "Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                      }
                    />
                  </div>
                  <div className={styles.cards}>
                    <Card
                      title={"The Personal Portfolio Mystery"}
                      institution={"Job at Rainbow-Themes (2008 - 2016)"}
                      description={
                        "Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                      }
                    />
                    <Card
                      title={"The Personal Portfolio Mystery"}
                      institution={"Job at Rainbow-Themes (2008 - 2016)"}
                      description={
                        "Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                      }
                    />
                    <Card
                      title={"The Personal Portfolio Mystery"}
                      institution={"Job at Rainbow-Themes (2008 - 2016)"}
                      description={
                        "Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                      }
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
      </div>
    </Section>
  );
};

export default Resume;
