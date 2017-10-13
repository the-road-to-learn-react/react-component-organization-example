import React from 'react';

const Article = ({ article }) =>
  <a href={article.url}>{article.title}</a>

export default Article;
