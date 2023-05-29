import React from 'react'
import {Link, useLoaderData, useNavigate} from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import  './detail.css'
import { Image } from '../../components'
import { parseToCommaSeparatedNumber } from '../../helpers'


type DataProps ={
  data:any;
}

const Detail = () => {
  let [data]: any = useLoaderData()
  
  return (
    <div className='detail'>
      <Nav/>
      <div className="detail-content">
        <Flag data={data} />
        <Description data={data} />
      </div>
    </div>
  )
}

// go back component
const Nav = () => {
  const navigate = useNavigate()
  return (
    <div className="nav">
      <div >
        <button onClick={() => navigate(-1)} className="button"><FaArrowLeft /> Back</button>
      </div>
    </div>
  )
}

// border country list
const BorderCountryList = ({border}:{border:any})=>{
  return (
    <div className="footer-right">
      {
        border && border.map((country:any )=> <BorderCountry key={country} country={country}/>)
      }
      
    </div>
  )
}

// each border country
type BorderCountryProps = {
  
  country: string;
}

const BorderCountry = ({ country }: BorderCountryProps)=>{
  return (
    <Link to={`/${country}`}>{country}</Link>
  )
}

// description
const Description = ({ data }: DataProps) => {
  const Object:any = window.Object

  return (
    <div className="deatil-desc">
      <div className="desc-title">
        <h1>{data.name.common}</h1>
      </div>
      <div className="desc-body">
        <div >
          <p>Native Name: <span>{Object.values(data.name.nativeName)[0].common}</span></p>
          <p>Population: <span>{parseToCommaSeparatedNumber(data.population)}</span></p>
          <p>Region: <span>{data.region}</span></p>
          <p>Sub Region: <span>{data.subregion}</span></p>
          <p>Capital: <span>{data.capital[0]}</span></p>
        </div>
        <div >
          <p>Top Level Domain: <span>{data.tld[0]}</span></p>
          <p>Currencies: <span>{Object.values(data.currencies)[0].name}</span></p>
          <p>Languages: <span>{Object.values(data.languages).join(", ")}</span></p>
        </div>
      </div>
      <div className="desc-footer">
        <div className="footer-left">
          <p>Border Countries:</p>
        </div>
        <BorderCountryList border={data.borders} />
      </div>
    </div>
  )
}

// flag
const Flag = ({ data }: DataProps) => {
  return (
    <div className="detail-flag">
      <Image src={data.flags.svg} alt={data.flags.alt} />
    </div>
  )
}

export default Detail