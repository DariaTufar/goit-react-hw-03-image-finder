import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { BiSearch } from 'react-icons/bi';
import { Box } from 'components/Box';
import { theme } from 'utils';
import { Form, Button, Input } from './Searchbar.styled'

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    search: '',
  };

  // --------------------------------
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  // --------------------------------
  handleInputChange = e => {
    this.setState({ search: e.target.value });
  };

  // --------------------------------
  render() {
    return (
      <Box
        as="header"
        top={0}
        left={0}
        position=" sticky"
        zIndex="searchBar"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="searchBar"
        paddingRight={5}
        paddingLeft={5}
        paddingTop={4}
        paddingBottom={4}
        color="textPrimary"
        backgroundColor="bgSearchBar"
        boxShadow="primary"
  
      >
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <BiSearch size={theme.sizes.iconSearch} />
          </Button>
          <Input
            type="text"
            aria-label="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.search}
          />
        </Form>
      </Box>
    );
  }
}
