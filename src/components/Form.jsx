import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

const Form = ({ setCategory, setCountry }) => {
    const OPTIONS = [
        { value: 'breaking-news', label: 'Breaking News' },
        { value: 'world', label: 'World' },
        { value: 'nation', label: 'Nation' },
        { value: 'business', label: 'Business' },
        { value: 'technology', label: 'Technology' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'sports', label: 'Sports' },
        { value: 'science', label: 'Science' },
        { value: 'health', label: 'Health' },
    ];
    const COUNTRIES = [
        { value: 'au', label: 'Australia' },
        { value: 'br', label: 'Brazil' },
        { value: 'ca', label: 'Canada' },
        { value: 'ch', label: 'Switzerland' },
        { value: 'cn', label: 'China' },
        { value: 'de', label: 'Germany' },
        { value: 'eg', label: 'Egypt' },
        { value: 'fr', label: 'France' },
        { value: 'gb', label: 'United kingdom' },
        { value: 'gr', label: 'Greece' },
        { value: 'hk', label: 'Hong Kong' },
        { value: 'ie', label: 'Ireland' },
        { value: 'il', label: 'Israel' },
        { value: 'in', label: 'India' },
        { value: 'it', label: 'Italy' },
        { value: 'jp', label: 'Japan' },
        { value: 'nl', label: 'The Netherlands' },
        { value: 'no', label: 'Norway' },
        { value: 'pe', label: 'Peru' },
        { value: 'ph', label: 'Philippines' },
        { value: 'pk', label: 'Pakistan' },
        { value: 'pt', label: 'Portugal' },
        { value: 'ro', label: 'Romania' },
        { value: 'ru', label: 'Russian Federation' },
        { value: 'se', label: 'Sweden' },
        { value: 'sg', label: 'Singapore' },
        { value: 'tw', label: 'Taiwan (Province of China)' },
        { value: 'ua', label: 'Ukraine' },
        { value: 'us', label: 'United States' },
    ];

    const [category, SelectNews] = useSelect('breaking-news', OPTIONS);
    const [country, SelectCountries] = useSelect('nl', COUNTRIES);

    const searchNews = (e) => {
        e.preventDefault();

        setCategory(category);
        setCountry(country);
    };

    return (
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form onSubmit={searchNews}>
                    <h2 className={styles.heading}>Find news by category</h2>
                    <SelectCountries />
                    <SelectNews />
                    <div className='input-field col s12'>
                        <input
                            type='submit'
                            value='Find'
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Form;
