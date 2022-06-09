import {useState} from 'react';

const useFormName = (submitCallback) => {
    const [state, setState] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        submitCallback();
    }

    const handleChange = (e) => {
        e.persist();
        setState(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    return [state, handleChange, handleSubmit]
}

export default useFormName;