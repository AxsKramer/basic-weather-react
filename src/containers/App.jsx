import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Form from '../components/Form';
import Result from '../components/Result';
import Weather from '../components/Weather';
import getDataFromAPI from '../getDataFromAPI';
import Error from '../components/Error';

const App = () => {

    const [search, setSearch] = useState({city: '', country: ''});
    const [consult, setConsult] = useState(false);
    const [result, setResult] = useState({});
    const [error, setError] = useState(false);
    const {city, country} = search;

    useEffect( () => {
        const getData = async () => {
            if(consult){
                const resultData = await getDataFromAPI(city, country);
                setResult(resultData);
                setConsult(false);
                
                if(Object.values(resultData).length <= 2){
                    setError(true);
                }else{
                    setError(false);
                }
            }
        }
        getData();
    },[consult])

    return ( 
        <Layout>
            <Header title='Weather React'/>
            <Result>
            {
                error 
                    ? <Error message='No results'/> 
                    : <Weather result={result} />
            }
            </Result>
            <Form search={search} setSearch={setSearch} setConsult={setConsult} />
        </Layout>
     );
}

export default App;