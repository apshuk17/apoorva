import Image from "next/image";
import FooterImage from "../../assets/apoorva.png";

const styles = {
  container: "py-28 px-0 flex flex-col gap-8 justify-center items-center",
  imgContainer:
    "relative w-[80px] h-[80px] shadow-custom-one rounded-full overflow-hidden flex items-center justify-center",
  copyrightText: "text-[1.3rem] text-[#c4cfde] text-center",
};

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.imgContainer}>
        <Image objectFit="contain" src={FooterImage} layout="fill" alt="apoorva-footer" />
      </div>
      <p className={styles.copyrightText}>© 2022. A portfolio website</p>
    </footer>
  );
};

export default Footer;
