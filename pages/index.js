import {
  Navbar,
  Intro,
  Portfolio,
  Resume,
  Contact,
  Footer,
  ScrollToTop,
} from "../components";

const styles = {
  global:
    "flex flex-col relative px-[1.2rem] sm:px-8 w-full 2xl:m-auto 2xl:w-[1536px]",
  bodyWrapper: "min-h-[200vh] w-screen bg-[#212428]",
};

const Home = () => {
  return (
    <div className={styles.bodyWrapper}>
      <Navbar />
      <main className={styles.global}>
        <Intro />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </div>
  );
};

export default Home;
