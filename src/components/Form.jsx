import React, {useState} from 'react';
import Error from '../components/Error';
import '../assets/styles/Form.css';

const Form = ({search, setSearch, setConsult}) => {

    const [error, setError] = useState(false);
    const {city, country} = search;

    const handleChange = e => setSearch({...search, [e.target.name]: e.target.value});

    const handleSubmit = e => {
        e.preventDefault();
        if(city.trim() === '' || country.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        setConsult(true);
    }

    return (  
        <div className="col-6 py-5">
            {
                error ? <Error message='Both fields are required' /> : null
            }
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        name='city' 
                        id='city' 
                        value={city} 
                        onChange={handleChange} 
                        className='form-control'
                        placeholder='City: Guadalajara, Cancun, Lima'
                    />
                </div>
                <div className="form-control">
                    <select
                        name="country"
                        value={country}
                        onChange={handleChange}
                        className='border-0 w-100'
                    >
                        <option value="">-- Choose a country --</option>
                        <option value="US">United States</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">Spain</option>
                        <option value="PE">Peru</option>
                    </select>
                </div>
                <button type="submit" className='mybtn btn btn-warning btn-block mt-4'>Seach</button>
            </form>
        </div>
    );
}
 
export default Form;