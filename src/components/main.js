import React, { Component } from "react";
import { connect } from "react-redux";
import UserList from "./userList.js";
import { fetchUsers } from "../actions/fetchData";

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    return (
      <UserList />
    );
  }
}

const mapStateToProps = state => ({
  list: state.users.list,
  loading: state.users.loading,
  error: state.users.error
});

export default connect(mapStateToProps)(Main);
