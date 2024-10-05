import "./homepage.scss";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
import Credits from "../../components/Credits/Credits";
import { useRetrieveData } from "../../hooks/useRetrieveData";
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "../../motionUtils";
import CustomRow from "../../components/Custom-row/Custom-Row";

const Homepage = () => {
  const rows = useRetrieveData("movies");

  return (
    <motion.div
      className="Homepage"
      variants={defaultPageFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Banner />
      {rows &&
        rows.map((props) => {
          if (props.id == 10) return <CustomRow key={props.id} {...props} />;

          return <Row key={props.id} {...props} />;
        })}
      <Credits />
    </motion.div>
  );
};

export default Homepage;
