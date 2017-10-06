import React, { PropTypes } from 'react';

const Article = (props) => {
    const { article, actions } = props;
    const author = actions.lookupAuthor(article.authorId);
    return (
        <div>
            <div>{article.title}</div>
            <div>{article.date}</div>
            <div>
                <a href={author.website}>
                    {author.firstName} {author.lastName}
                </a>
            </div>
            <div>{article.body}</div>
            <br />
            <br />
        </div>
    );
};
// Article.propTypes = {
//     article: PropTypes.object.isRequired,
//     author: PropTypes.object.isRequired
// };

export default Article;