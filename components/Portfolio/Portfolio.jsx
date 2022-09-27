import PortfolioCard from "../PortfolioCard/PortfolioCard";
import Section from "../Section/Section";
import React from "../../assets/react.png";
import Redux from "../../assets/redux.png";
import PortfolioThree from "../../assets/node.png";
import PortfolioFour from "../../assets/javascript.png";
import PortfolioFive from "../../assets/html.png";
import PortfolioSix from "../../assets/css.png";

const styles = {
  container: "border-t-2 border-black border-solid py-28",
  subtitle: "block text-[#f9004d] mb-4 text-center",
  title: "text-[#c4cfde] text-5xl lg:text-6xl mb-10 text-center font-bold",
  cards:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center",
};

const Portfolio = () => {
  return (
    <Section className={styles.container} id="portofolio">
      {/* SUBTITLE */}
      <span className={styles.subtitle}>Technology Stack</span>

      {/* TITLE */}
      <h2 className={styles.title}>Technologies</h2>

      {/* ALL CARDS */}
      <div className={styles.cards}>
        <PortfolioCard description="React" imageSource={React} />
        <PortfolioCard description="Redux" imageSource={Redux} />
        <PortfolioCard description="NodeJS" imageSource={PortfolioThree} />
        <PortfolioCard description="Javascript" imageSource={PortfolioFour} />
        <PortfolioCard description="HTML5" imageSource={PortfolioFive} />
        <PortfolioCard description="CSS3" imageSource={PortfolioSix} />
      </div>
    </Section>
  );
};

export default Portfolio;
