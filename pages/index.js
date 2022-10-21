import styles from "../styles/Home.module.css";
import PageLayout from "../components/PageLayout";

export default function Home({ articles }) {
  return (
    <PageLayout title='NewsApp - Home'>
      <div className={styles.container}>
        {articles.length === 0 && <p>Theres no articles :(</p>}
        {articles.length > 0 &&
          articles.map((article, index) => {
            return (
              <article key={index}>
                <img src={article.urlToImage} alt='ima ge'></img>
                <h2>{article.title} </h2>
                <p>{article.description}</p>
              </article>
            );
          })}
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const response = await fetch(process.env.API_KEY);
  const { articles } = await response.json();

  return {
    props: {
      articles,
    },
  };
}
