import React from 'react';
import DataApi from 'state-api';
import ArticleList from './ArticleList';
// import { data } from '../testData';
// const api = new DataApi(data);
import axios from 'axios';

class App extends React.Component {

    state = {
        articles: {},
        authors: {}
    }

    async componentWillMount() {
        const resp = await axios.get('/data');
        const api = new DataApi(resp.data);
        this.setState(() => {
            return {
                articles: api.getArticles(),
                authors: api.getAuthors()
            };
        });
    };

    asyncFunc = () => {
        return Promise.resolve(37);
    }
    articleActions = {
        lookupAuthor: authorId =>
            this.state.authors[authorId]
    }
    async componentDidMount() {
        this.setState({
            answer: await this.asyncFunc()
        })
    }
    render() {
        return (
            <ArticleList articles={this.state.articles} articleActions={this.articleActions} />
        )
    }
}

export default App;