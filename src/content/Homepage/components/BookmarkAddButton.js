import React, { Component } from 'react';
import Item from './Bookmark';
import { Card, Input, Button } from '@material-ui/core';
import { grey, teal } from "@material-ui/core/colors/";

export default class BookmarkAddButton extends Component {
  constructor(props) {
    super()
    this.state = {
      href: "",
      iconUrl: "",
      entry: false,
    }
  }

  handleClick = e => {
    this.setState({ entry: true })
  }

  handleSubmit = e => {
    this.setState({ entry: false })
    if (!this.state.href) return;
    this.props.onClick(this.state.href, this.state.iconUrl);
  }

  handlePageLinkChange = e => {
    this.setState({ href: e.target.value })
  }

  handleIconLinkChange = e => {
    this.setState({ iconUrl: e.target.value })
  }

  render() {
    return (
      <div>
        {this.state.entry && 
        <Card style={styles.root}>
          <Input 
            disableUnderline
            fullWidth 
            value={ this.state.value }
            onChange={ this.handlePageLinkChange }
            style={styles.entry}
            placeholder="Page link"
          />
          <Input 
            disableUnderline
            fullWidth 
            value={ this.state.value }
            onChange={ this.handleIconLinkChange }
            style={styles.entry}
            placeholder="Icon link"
          />
          <Button style={styles.button} onClick={ this.handleSubmit }>
            Submit
          </Button>
        </Card>
        }
        {!this.state.entry && <Item add onAdd={ this.handleClick }/>}
      </div>
    )
  }
}

const styles = {
  root: {
    background: grey[800],
    height: '100%',
    "&:hover": {
      background: grey[700]
    },
    display: 'flex',
    flexDirection: 'column'
  },
  entry: {
    color: 'white',
    padding: 15,
    height: 64,
    flexGrow: 1
  },
  button: {
    width: '100%',
    flexGrow: 1,
    alignItems: 'stretch',
    color: teal[200]
  }
}