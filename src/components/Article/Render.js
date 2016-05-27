export default function render(options = {}) {
  const { article, styles } = options;

  return(
    <div style={styles.mainContainer}>
      <p>{article.title}</p>
      <p>{article.rubric}</p>
      <p>{article.author}</p>
      <img
        src={article.mainImage}
        style={styles.image}
      />
      <p>{article.text}</p>
    </div>
  );
}

