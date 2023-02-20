import React, { PropTypes } from "react";
import {
  Navbar,
  ButtonGroup,
  Button,
  MenuItem,
  DropdownButton,
} from "react-bootstrap";
import {
  updateFilterAction,
  incrementOffset,
  decrementOffset,
} from "../selectors/headerSelectors";
import "../styles/header.scss";

export class Header extends React.Component {
  kittenFilter() {
    const { updateFilter } = this.props;
    updateFilterAction(updateFilter, "cute+kittens");
  }
  puppyFilter() {
    const { updateFilter } = this.props;
    updateFilterAction(updateFilter, "cute+puppies");
  }
  previous() {
    const { updateFilter, headerOptions } = this.props;
    decrementOffset(
      updateFilter,
      headerOptions.currentFilter,
      headerOptions.offset
    );
  }
  next() {
    const { updateFilter, headerOptions } = this.props;
    incrementOffset(
      updateFilter,
      headerOptions.currentFilter,
      headerOptions.offset
    );
  }

  render() {
    const { headerOptions } = this.props;

    let dropDownTitle;
    switch (headerOptions.currentFilter) {
      case "cute+kittens":
        dropDownTitle = "Kittens";
        break;
      case "cute+puppies":
        dropDownTitle = "Puppies";
        break;
      default:
        dropDownTitle = "Puppies & Kittens";
    }

    return (
      <Navbar className="header-navbar" inverse>
        <Navbar.Header>
          <img
            src="../resources/kittens_and_puppies.gif"
            className="header-title"
          />
          <img src="../resources/PoweredBy_Giphy.png" />
        </Navbar.Header>
        <ButtonGroup className="button-control-group pull-right">
          <DropdownButton title={dropDownTitle} id="bg-nested-dropdown">
            <MenuItem eventKey="1" onClick={this.kittenFilter.bind(this)}>
              Kittens
            </MenuItem>
            <MenuItem eventKey="2" onClick={this.puppyFilter.bind(this)}>
              Puppies
            </MenuItem>
          </DropdownButton>
          <Button bsStyle="primary" onClick={this.previous.bind(this)}>
            Prev
          </Button>
          <Button bsStyle="primary" onClick={this.next.bind(this)}>
            Next
          </Button>
        </ButtonGroup>
      </Navbar>
    );
  }
}

Header.propTypes = {
  headerOptions: PropTypes.shape({
    currentFilter: PropTypes.string,
    disabled: PropTypes.bool,
    offset: PropTypes.number,
  }),
  updateFilter: PropTypes.shape({
    fetchGifyResults: PropTypes.func,
    updateCurrentFilter: PropTypes.func,
  }),
};

export default Header;
