import React from "react";

const styles = {
  card: `relative py-[45px] px-[40px] rounded-md bg-gradient-light
            transition-all duration-300 ease-linear cursor-pointer hover:bg-gradient-dark
            after:absolute after:top-[20%] after:left-[-1.4rem] after:w-[1.4rem] after:h-[5px] after:bg-[#17191c] 
            before:absolute before:z-[2] before:top-[17%] before:left-[-2.2rem] before:w-[1.4rem] before:h-[1.4rem] before:rounded-full before:bg-[#212428] before:border-[5.5px] before:border-solid before:border-[#17191c] before:transition-[background] before:duration-200 before:ease-in hover:before:bg-[#f9004d]`,
  info: "flex items-center justify-between gap-6 mb-10 flex-wrap",
  cardTitleHeading: "text-[1.4rem] text-[#c4cfde]",
  institution: "text-[0.9rem] text-start text-[#7c838e]",
  gradeContainer: "p-2 bg-gradient-light shadow-custom-one rounded-lg",
  grade: "text-[#f9004d] font-medium",
  description: "text-[1.1rem] text-[#878e99]",
};

const Card = ({ title, institution, grade, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div>
          <h4 className={styles.cardTitleHeading}>{title}</h4>
          <span className={styles.institution}>{institution}</span>
        </div>
        <div className={styles.grade}>
          <div className={styles.gradeContainer}>
            <span className={styles.grade}>{grade}</span>
          </div>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

Card.defaultProps = {
  title: "Personal Portfolio April Fools",
  institution: "University of DVI (1997 - 2001)",
  grade: "4.30/5",
  description:
    "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
};

export default Card;
