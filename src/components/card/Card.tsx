import React from 'react'
import { Link } from 'react-router-dom'
import { parseToCommaSeparatedNumber } from '../../helpers'
import './card.css'
import {Image} from '../'
const Card = ({ country }: { country: any }) => {

  return (
    <Link className='card' to={`/${country.cca2}`}>
      <div className="card-image">
        <Image src={country.flags.png} alt={country.flags.alt} />
      </div>
      <div className="card-content">
        <h2>{country.name.common}</h2>
        <p>Population: <span>{parseToCommaSeparatedNumber(country.population)}</span></p>
        <p>Region: <span>{country.region}</span></p>
        <p>Capital: <span>{country.capital && country.capital[0]}</span></p>
      </div>
    </Link>
  )
}

export default Card