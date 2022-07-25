import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  console.log(posts);
  // Making list of Article components from the posts array data
  const listOfArticles = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    );
  });
  return (
    <main>
      <ul>{listOfArticles}</ul>
    </main>
  );
};

export default ArticleList;
