import { useEffect, useState } from 'react';
import ErrorMsg from '../shared/ErrorComponent';

const UseEffectExample = () => {

    const [drink, setDrink] = useState(null);
    const [thumbnail, setThumbnail] = useState('')
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
            setDrink(data.drinks[0].strDrink)
            setThumbnail(data.drinks[0].strDrinkThumb)})
        .catch(err => {
            setError(true)
        })
    }, [])

    if (error) {
        return (
            <ErrorMsg />
        )
    }

    return (
        <div>
            <h1>Fetching from an API with useEffect</h1>
            <p>Random Cocktail: {drink}</p>
            <img src={thumbnail} alt={drink}></img>

        </div>
     );
}
 
export default UseEffectExample;