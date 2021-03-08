import { useState, useEffect } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';

function App() {
    const [category, setCategory] = useState('');
    const [country, setCountry] = useState('');
    const [news, setNews] = useState([]);

    useEffect(() => {
        const callAPI = async () => {
            if (category.trim() === '' || country.trim() === '') return null;

            const API_KEY = 'f3674268921539ccf1cb53a4294e1d92';
            const uri = 'https://gnews.io/api/v4/top-headlines?';
            const countrySelected = `country=${country}`;
            const categorySelected = `topic=${category}`;
            const apiKey = `token=${API_KEY}`;
            const url = `${uri}${categorySelected}&${countrySelected}&${apiKey}`;

            const answer = await fetch(url);
            const newNews = await answer.json();
            console.log(newNews);
            setNews(newNews.articles);
        };
        callAPI();
    }, [category, country]);

    return (
        <>
            <Header title='News Scanner' />
            <div className='container white'>
                <Form setCategory={setCategory} setCountry={setCountry} />
                <NewsList news={news} />
            </div>
        </>
    );
}

export default App;
