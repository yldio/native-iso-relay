import React from 'react';

export default function render(options = {}) {
  const { article, styles } = options;
  const truncatedText = article.description.substring(0, 100);
  const teaser = `${truncatedText} ...`;

  return(
    <div style={styles.articleContainer}>
      <div>
        <img
          src={article.mainImage}
          style={styles.mainImage}
        />
      </div>
      <div style={styles.rightContainer}>
        <span style={styles.title}>{article.title}</span>
        <span>{' | '}</span>
        <span style={styles.author}>
          {article.author}
        </span>
        <p style={styles.rubric}>{teaser}</p>
        </div>
    </div>
  );
}

