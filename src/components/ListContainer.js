import React from "react";
import { getImages } from "../actions";
import { connect } from "react-redux";
import List from "./List";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }

  render() {
    if (!this.props.user) {
      return (
        <div>
          <LoginFormContainer />
          <CreateFormContainer />
          <List images={this.props.images} />
        </div>
      );
    }
    return (
      <div>
        <CreateFormContainer />
        <List images={this.props.images} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { images: state.images, user: state.user };
}

const mapDispatchToProps = { getImages };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
