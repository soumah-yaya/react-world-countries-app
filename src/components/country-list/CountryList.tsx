import React from 'react'
import { Card, NoCountryFound } from '../'
import { useLoaderData } from 'react-router-dom'
import './countryList.css'
const CountryList = () => {

  let { country: data } = useLoaderData() as any

  return (
    <div className='country-list'>
      {
        !data.message
          ? data.map((country: any) => {
            return (<Country key={country.cca2} country={country} />)
          })
          : <NoCountryFound />
      }

    </div>
  )
}

const Country = ({ country }: { country: any }) => {
  return <article><Card country={country} /></article>
}

export default CountryList