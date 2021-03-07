import { useState } from 'react';

const useSelect = (initialState, options) => {
    const [state, setState] = useState(initialState);

    const SelectNews = () => {
        return (
            <select
                className='browser-default'
                style={{ marginTop: '1rem' }}
                value={state}
                onChange={(e) => setState(e.target.value)}
            >
                {options.map((option) => (
                    <option value={option.value} key={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    };
    return [state, SelectNews];
};
export default useSelect;
