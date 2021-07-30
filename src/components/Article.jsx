import ArticleItem from "./ArticleItem";

export default function Article() {
  return (
    <div className="articles">
		  <h1 className="articles__title text__title">Latest Articles</h1>
		  <ArticleItem/>
    </div>
  );
}
