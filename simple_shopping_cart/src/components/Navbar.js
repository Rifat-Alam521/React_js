import React from "react";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="row">
          <div className="container-fluid col-6 ">
            <a className="navbar-brand" href="#">
              My-Cart
            </a>
          </div>
          <div className="badge bg-secondary col-6">
            <span>Total Cart item:{this.props.productList.length}</span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
