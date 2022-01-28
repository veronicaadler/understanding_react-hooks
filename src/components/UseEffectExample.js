import { useEffect, useState } from 'react';

const UseEffectExample = () => {

    const [drink, setDrink] = useState(null);
    const [thumbnail, setThumbnail] = useState('')

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            setDrink(res.drinks[0].strDrink)
            setThumbnail(res.drinks[0].strDrinkThumb)
        })
    }, [])

    return (
        <div>
            <h1>Fetching from an API with useEffect</h1>
            <p>Random Cocktail: {drink}</p>
            <img src={thumbnail}></img>
        </div>
     );
}
 
export default UseEffectExample;