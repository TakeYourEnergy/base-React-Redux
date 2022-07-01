import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

const Spin = (props) => {
  const spinner = useSelector((state) => state.loaderReducer.status);
  return (
    <div className="loader-styles">
      <Loader color="#00BFFF" height={80} width={80} visible={spinner} />
    </div>
  );
};

export default Spin;
