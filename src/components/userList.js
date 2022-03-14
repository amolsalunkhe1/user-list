import React, { Component } from "react";
import { connect } from "react-redux";

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {users: this.props.users, data: this.props.users, search: ''};  
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ users: nextProps, data: nextProps });
  }

  onSearchChange = (e) => {
    this.setState({ search: e.target.value });
    // let filterData = this.props.users.filter(item => { return item.name.toLowerCase().startsWith(e.target.value.toLowerCase())});
    // this.setState({ users: {users: filterData }});
    if (e.target.value === '') {
      this.setState({ users: this.state.data });
    }
  }

  onSearchClick = () => {
    if (this.state.search) {
      let filterData = this.props.users.filter(item => item.name.toLowerCase() === this.state.search.toLowerCase());
      this.setState({ users: {users: filterData }});
    }
  }


  render() {
    let { users } = this.state.users;
    return (
      <div className='container'>
        <h3 className='heading text-center'>User List</h3>
        <div>
          <div class='input-group'>
            <input type='text' placeholder='Search by Name...' onChange={(e) => this.onSearchChange(e)} />
            <button type='button' onClick={() => this.onSearchClick()}>Search</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {users ? (users.map(user =>
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.company.name}</td>
                  <td>{user.address.suite}, {user.address.street}, {user.address.city} - {user.address.zipcode}</td>
                </tr>
              )) : <tr> <td colspan="5"> <h5 className='text-center'>No Data Found!!!</h5></td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.list,
});

export default connect(mapStateToProps)(UserList);
