import "./credits.scss";
import { motion } from "framer-motion";
import { creditsFadeInUpVariants } from "../../motionUtils";
// import { GITHUB_AVATAR_URL, GITHUB_BASE_URL } from "../../requests";

const Credits = () => {
  return (
    <motion.footer
      variants={creditsFadeInUpVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="Credits"
    >
      <span>Developed by GRP 2</span>
    </motion.footer>
  );
};

export default Credits;
