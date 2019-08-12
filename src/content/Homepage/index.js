import React, { useState, useEffect } from "react";
import { Grid, Container } from "@material-ui/core/";
import Cookies from "js-cookie";
import Item from "./components/Bookmark";
import BookmarkAddButton from "./components/BookmarkAddButton";
import defaultItems from "../static/default_bookmarks.json";

const ItemContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const bookmarks = defaultItems.bookmarks;
    let items = getBookmarkCookie();
    if (!items) items = bookmarks;
    setItems([...items]);
    return () => {
      setBookmarkCookie(items);
    };
  }, []);

  const handleAddBookmark = (href, icon) => {
    if (!validURL(href)) {
      if (href === "reset") {
        setItems(defaultItems.bookmarks);
      }
      return;
    }
    if (!validURL(icon))
      icon = `https://www.google.com/s2/favicons?domain=${href}`;
    const newItems = [
      ...items,
      {
        href,
        icon
      }
    ];
    setItems(newItems);
    setBookmarkCookie(newItems);
  };

  const handleDeleteBookmark = i => {
    const newItems = items.slice();
    newItems.splice(i, 1);
    setItems(newItems);
    setBookmarkCookie(newItems);
  };

  return (
    <Container fixed>
      <Grid container alignItems="flex-end" justify="flex-start" spacing={2}>
        {items.map((item, itemIndex) => (
          <Grid key={itemIndex} item xs={12} sm={6} md={4} lg={3}>
            <Item
              itemIndex={itemIndex}
              icon={item.icon}
              href={item.href}
              onDelete={() => handleDeleteBookmark(itemIndex)}
            />
          </Grid>
        ))}

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BookmarkAddButton
            onClick={(href, icon) => handleAddBookmark(href, icon)}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemContainer;

const setBookmarkCookie = items => {
  Cookies.set("bookmarks", items.map(item => JSON.stringify(item)).toString(), {
    expires: 365,
    path: ""
  });
};

const getBookmarkCookie = () => {
  let bookmarks = Cookies.get("bookmarks");
  if (!bookmarks || !(bookmarks.length > 0)) return;
  return bookmarks.split(/,(?={)/).map(item => JSON.parse(item));
};

const validURL = str => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
};
