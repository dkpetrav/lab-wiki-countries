import { useState } from 'react';

function CountriesList(props) {
  const [countries, setCountries] = useState([]);

  // This effect depends on `props.projects`.
  // It will run on initial render, and every time
  // when the `props.projects` updates.
  //useEffect(() => {
  //  setCountries(props.countries);
  //}, []);

  console.log(props);  //data arriving at browser Console - not displayed...
  return (
    <div>
      <h1>Countries</h1>
      {countries.map((country) => {
        return (
          <div key={countries.alpha3Code} className="country">
            {/* <h3>{countries.name.common}</h3> */}
            <p>{countries.alpha3Code}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
