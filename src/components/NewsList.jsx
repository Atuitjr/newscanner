import News from './News';

const NewsList = ({ news }) => {
    return (
        <div className='row'>
            {news.map((piece) => (
                <News key={piece.url} news={piece} />
            ))}
        </div>
    );
};

export default NewsList;
