import React, { PropTypes } from 'react';
import Article from './Article';

const ArticleList = ({ articles, articleActions }) => {
    return (
        <div>
            {Object.values(articles).map(article => (
                <Article key={article.id} article={article} actions={articleActions} />
            ))}
        </div>
    );
};

// ArticleList.propTypes = {
//     articles: PropTypes.object.isRequired,
//     authors: PropTypes.object.isRequired
// };
export default ArticleList;