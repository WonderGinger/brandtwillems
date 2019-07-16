import React, { Component } from 'react'
import { Grid, Container } from '@material-ui/core/';
import Cookies from 'js-cookie';
import Item from './components/Bookmark';
import BookmarkAddButton from './components/BookmarkAddButton';
import items from '../static/default_bookmarks.json';

export default class ItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [...items.bookmarks]
    }
  }

  componentDidMount() {
    const items = getBookmarkCookie();
    if (items) {
      this.setState({ items: items });
    }
  }
  
  handleAddBookmark = (href, icon) => {
    if (!validURL(href)) return;
    if(!validURL(icon)) icon = `https://www.google.com/s2/favicons?domain=${href}`;
    const newItems = [...this.state.items, {
      href,
      icon
    }]
    this.setState({
      items: newItems
    });
    setBookmarkCookie(newItems);
  }

  handleDeleteBookmark = (i) => {
    const newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({
      items: newItems
    })
    setBookmarkCookie(newItems);
  }

  render() {
    return (
      <Container fixed>
        <Grid container alignItems="flex-end" justify="flex-start" spacing={2}>

          {this.state.items.map((item, itemIndex) => (
            <Grid key={itemIndex} item xs={12} sm={6} md={4} lg={3}>
              <Item
                itemIndex={itemIndex}
                icon={item.icon} 
                href={item.href}
                onDelete={() =>this.handleDeleteBookmark(itemIndex)}
              />
            </Grid>
          ))}

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BookmarkAddButton onClick={(href, icon) => this.handleAddBookmark(href, icon)}/>
          </Grid>

        </Grid>
      </Container>
    )
  }
}

const setBookmarkCookie = items => {
  Cookies.set('bookmarks', items.map(item => JSON.stringify(item)), {
    expires: 365,
    path: ''
  });
}

const getBookmarkCookie = () => {
  const items = Cookies.get('bookmarks');
  if (!items) return;
  return items.split(/,(?={)/).map(item => JSON.parse(item))
}

const validURL = str  => {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}