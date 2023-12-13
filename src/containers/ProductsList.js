import { connect } from "react-redux";
import List from "../components/list";

const mapStateToProps = (state) => {
  const { products } = state;
  return { products: products };
};

export default connect(mapStateToProps, null)(List);
