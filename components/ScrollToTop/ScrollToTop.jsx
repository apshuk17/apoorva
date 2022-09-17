import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const styles = {
  container: "fixed right-[5%] bottom-[5%] p-1",
  inner:
    "w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full flex justify-center items-center shadow-custom-one transition-[all] duration-300 ease-in-out cursor-pointer hover:shadow-custom-two translate-y-[-2px]",
  svg: "text-white text-[1.3rem]",
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div>
      {visible && (
        <Link href="#">
          <a className={styles.container}>
            <div className={styles.inner}>
              <FaArrowUp onClick={scrollToTop} className={styles.svg} />
            </div>
          </a>
        </Link>
      )}
    </div>
  );
};

export default ScrollToTop;
