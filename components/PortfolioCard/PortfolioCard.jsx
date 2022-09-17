import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Fade } from "react-awesome-reveal";
import PortfolioOne from "../../assets/portfolio-01.jpg";

const styles = {
  container:
    "relative w-full h-full text-left py-[35px] px-[50px] rounded-[10px] shadow-custom-one bg-gradient-light cursor-pointer border-0 transition-all duration-500 ease-in-out hover:bg-gradient-dark",
  imageContainer:
    "relative rounded-[10px] overflow-hidden w-full h-[300px] lg:h-[30vw] xl:h-[400px] transtion-[transform] duration-500 ease-in-out hover:scale-105",
  info: "mt-6 flex justify-between",
  category: "text-[#f9004d] text-sm",
  likes: "flex items-center gap-2 text-[#c4cfde] text-[0.8rem]",
  svg: "text-[#c4cfde] text-[0.8rem]",
  heading2: "mt-6 text-[1.3rem] text-[#c4cfde] font-bold",
};

const PortfolioCard = ({ imageSource, category, likes, description }) => {
  const [active, setActive] = useState(false);
  const [parent] = useAutoAnimate();

  return (
    <div ref={parent}>
      <Fade className=" bg-gradient-light" fraction={0.2} duration={500}>
        <button className={styles.container} onClick={() => setActive(true)}>
          <div className={styles.imageContainer}>
            <Image
              src={imageSource}
              objectFit="cover"
              layout="fill"
              alt=""
            />
          </div>
          <div className={styles.info}>
            <span className={styles.category}>{category}</span>
            <div className={styles.likes}>
              <FaHeart />
              <span>{likes}</span>
            </div>
          </div>
          <h2 className={styles.heading2}>{description}</h2>
        </button>
      </Fade>
    </div>
  );
};

PortfolioCard.defaultProps = {
  imageSource: PortfolioOne,
  category: "Development",
  likes: 680,
  description: "Mobile App Page",
};

export default PortfolioCard;
