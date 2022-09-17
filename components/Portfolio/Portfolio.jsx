import PortfolioCard from "../PortfolioCard/PortfolioCard";
import Section from "../Section/Section";
import PortfolioOne from "../../assets/portfolio-01.jpg";
import PortfolioTwo from "../../assets/portfolio-02.jpg";
import PortfolioThree from "../../assets/portfolio-03.jpg";
import PortfolioFour from "../../assets/portfolio-04.jpg";
import PortfolioFive from "../../assets/portfolio-05.jpg";
import PortfolioSix from "../../assets/portfolio-06.jpg";

const styles = {
  subtitle: "block text-[#f9004d] mb-4 text-center",
  title: "text-[#c4cfde] text-6xl mb-10 text-center font-bold",
  cards:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center",
};

const Portfolio = () => {
  return (
    <Section id="portofolio">
      {/* SUBTITLE */}
      <span className={styles.subtitle}>Visit My Portfolio</span>

      {/* TITLE */}
      <h1 className={styles.title}>Portfolio</h1>

      {/* ALL CARDS */}
      <div className={styles.cards}>
        <PortfolioCard imageSource={PortfolioOne} />
        <PortfolioCard imageSource={PortfolioTwo} />
        <PortfolioCard imageSource={PortfolioThree} />
        <PortfolioCard imageSource={PortfolioFour} />
        <PortfolioCard imageSource={PortfolioFive} />
        <PortfolioCard imageSource={PortfolioSix} />
      </div>
    </Section>
  );
};

export default Portfolio;
