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

            const API_KEY = 'a4d1d22931b7489c9fb8d456294f1ec4';
            const uri = 'https://newsapi.org/v2/top-headlines?';
            const countrySelected = `country=${country}&`;
            const categorySelected = `category=${category}&`;
            const apiKey = `apiKey=${API_KEY}`;
            const url = `${uri}${countrySelected}${categorySelected}${apiKey}`;

            const answer = await fetch(url);
            const newNews = await answer.json();
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
