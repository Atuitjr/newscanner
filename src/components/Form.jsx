import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

const Form = ({ setCategory, setCountry }) => {
    const OPTIONS = [
        { value: 'business', label: 'Business' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'general', label: 'General' },
        { value: 'health', label: 'Health' },
        { value: 'science', label: 'Science' },
        { value: 'sports', label: 'Sports' },
        { value: 'technology', label: 'Technology' },
    ];
    const COUNTRIES = [
        { value: 'ae', label: 'United Arab Emirates' },
        { value: 'ar', label: 'Argentina' },
        { value: 'at', label: 'Austria' },
        { value: 'au', label: 'Australia' },
        { value: 'be', label: 'Belgium' },
        { value: 'bg', label: 'Bulgaria' },
        { value: 'br', label: 'Brazil' },
        { value: 'ca', label: 'Canada' },
        { value: 'ch', label: 'Switzerland' },
        { value: 'cn', label: 'China' },
        { value: 'co', label: 'Colombia' },
        { value: 'cu', label: 'Cuba' },
        { value: 'cz', label: 'Czechia' },
        { value: 'de', label: 'Germany' },
        { value: 'eg', label: 'Egypt' },
        { value: 'fr', label: 'France' },
        { value: 'gb', label: 'United Kingdom' },
        { value: 'gr', label: 'Greece' },
        { value: 'hk', label: 'Hong Kong' },
        { value: 'hu', label: 'Hungary' },
        { value: 'id', label: 'Indonesia' },
        { value: 'ie', label: 'Ireland' },
        { value: 'il', label: 'Israel' },
        { value: 'in', label: 'India' },
        { value: 'it', label: 'Italy' },
        { value: 'jp', label: 'Japan' },
        { value: 'kr', label: 'Korea, Republic of' },
        { value: 'lt', label: 'Lithuania' },
        { value: 'lv', label: 'Latvia' },
        { value: 'ma', label: 'Morocco' },
        { value: 'mx', label: 'Mexico' },
        { value: 'my', label: 'Malaysia' },
        { value: 'ng', label: 'Nigeria' },
        { value: 'nl', label: 'The Netherlands' },
        { value: 'no', label: 'Norway' },
        { value: 'nz', label: 'New Zealand' },
        { value: 'ph', label: 'Philippines' },
        { value: 'pl', label: 'Poland' },
        { value: 'pt', label: 'Portugal' },
        { value: 'ro', label: 'Romania' },
        { value: 'rs', label: 'Serbia' },
        { value: 'ru', label: 'Russian Federation' },
        { value: 'sa', label: 'Saudi Arabia' },
        { value: 'se', label: 'Sweden' },
        { value: 'sg', label: 'Singapore' },
        { value: 'si', label: 'Slovenia' },
        { value: 'sk', label: 'Slovakia' },
        { value: 'th', label: 'Thailand' },
        { value: 'tr', label: 'Turkey' },
        { value: 'tw', label: 'Taiwan, Province of China' },
        { value: 'ua', label: 'Ukraine' },
        { value: 'us', label: 'United States of America' },
        { value: 've', label: 'Venezuela (Bolivarian Republic of)' },
        { value: 'za', label: 'South Africa' },
    ];

    const [category, SelectNews] = useSelect('general', OPTIONS);
    const [country, SelectCountries] = useSelect('nl', COUNTRIES);

    const searchNews = (e) => {
        e.preventDefault();

        setCategory(category);
        setCountry(country);
    };

    return (
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset.m2'>
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
