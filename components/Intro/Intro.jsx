import Image from "next/image";
import Section from "../Section/Section";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import IntroBanner from "../../assets/apoorvaHD.png";
// import IconOne from "../../assets/icons-01.png";
// import IconTwo from "../../assets/icons-02.png";
// import IconThree from "../../assets/icons-03.png";

const styles = {
  section: "relative pb-28 pt-16",
  container: "flex flex-col lg:flex-row justify-between gap-14 h-full",
  text: "flex flex-col",
  animateText:
    "lg:opacity-0 lg:animate-popin-slow-sm flex flex-col justify-between flex-grow",
  welcome:
    "text-[#c4cfde] font-normal text-[1.1rem] tracking-[2px] lg:opacity-0 lg:animate-popin-slow",
  name: "text-white text-[1.5rem] md:text-[2.5rem] xl:text-[60px] font-medium flex flex-col my-4",
  nameColor: "text-[#ff014f]",
  description:
    "text-[#c4cfde] font-normal text-base w-full md:w-[80%] leading-[1.8]",
  icons: "flex mt-24 gap-8 flex-wrap justify-between",
  iconsSpan: "text-[#c4cfde] block mb-6",
  iconsList: "flex gap-4",
  iconsListItem:
    "flex flex-col justify-center items-center bg-[linear-gradient(145deg, #1e2024, #23272b)] shadow-custom-one cursor-pointer",
  iconsListItemLink: "w-[60px] h-[60px] flex justify-center items-center",
  skill: "w-[60px] h-[60px] flex justify-center items-center",
  iconsSvg: "text-white text-[1.1rem] translate-y-[2px]",
  introImage: "flex w-full flex-col items-center justify-end shadow-custom-one",
  innerImage: "w-full sm:w-[500px] xl:w-[650px] xl:h-[600px] overflow-hidden",
};

const Intro = () => {
  return (
    <Section id="" className={styles.section}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.text}>
          <span className={styles.welcome}>Welcome To My World!</span>
          <div className={styles.animateText}>
            <h1 className={styles.name}>
              <span>
                <span>Hi,</span>
                <span
                  className={styles.nameColor}
                >{` I'm Apoorva Shukla`}</span>
              </span>
              <span>a Web Developer</span>
            </h1>

            <p className={styles.description}>
              {`I enjoy creating beautiful and performant web applications. I use modern web development architecture based on Javascript, APIs and Markup popularly called JAM stack. Please go through my resume to get more details.`}
            </p>
            {/* SOCIALS */}
            <div className={styles.icons}>
              <div>
                <span className={styles.iconsSpan}>Find Me</span>
                <ul className={styles.iconsList}>
                  <li className={styles.iconsListItem}>
                    <a
                      href="#"
                      rel={"noreferrer"}
                      className={styles.iconsListItemLink}
                    >
                      <FaFacebookF className={styles.iconsSvg} />
                    </a>
                  </li>
                  <li className={styles.iconsListItem}>
                    <a
                      href="#"
                      rel={"noreferrer"}
                      className={styles.iconsListItemLink}
                    >
                      <FaInstagram className={styles.iconsSvg} />
                    </a>
                  </li>
                  <li className={styles.iconsListItem}>
                    <a
                      href="#"
                      rel={"noreferrer"}
                      className={styles.iconsListItemLink}
                    >
                      <FaLinkedinIn className={styles.iconsSvg} />
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div>
                <span className={styles.iconsSpan}>Best Skills</span>
                <ul className={styles.iconsList}>
                  <li className={styles.iconsListItem}>
                    <div className={styles.skill}>
                      <Image src={IconOne} alt="" width="25" height="20" />
                    </div>
                  </li>
                  <li className={styles.iconsListItem}>
                    <div className={styles.skill}>
                      <Image src={IconTwo} alt="" width="25" height="20" />
                    </div>
                  </li>

                  <li className={styles.iconsListItem}>
                    <div className={styles.skill}>
                      <Image src={IconThree} alt="" width="15" height="22" />
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className={styles.introImage}>
          <div className={styles.innerImage}>
            <Image
              src={IntroBanner}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              alt="Apoorva Shukla, a web developer"
              priority={true}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Intro;
