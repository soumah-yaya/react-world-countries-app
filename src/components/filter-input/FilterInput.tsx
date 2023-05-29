import { useEffect, useState } from 'react';
import { Select } from 'antd';
import {useNavigate, useLoaderData} from 'react-router-dom'
import { saveData, getData } from '../../helpers';
import './filterInput.css'


const FilterInput = () => {
  
  const { filterRegionValue } = useLoaderData() as any
  const [current, setCurrent] = useState("Filter by Region")
  const navigate = useNavigate()

  const handleChange = (value: string) => {
    saveData('region',value) // resiste current region
    setCurrent(value)
    navigate(`/?region=${value.toLocaleLowerCase()}`)
  };

  useEffect (()=>{
    let value = getData('region');
    if (filterRegionValue){ //check if region search
      setCurrent(value)
    } else{ //reset to default value
      setCurrent("Filter by Region")
    }
  }, [filterRegionValue])

  return (
    <section className="filter-input">
      <Select
      value={current}
        placeholder="Filter by Region"
        className='select'
        onChange={handleChange}
        options={[
          { value: 'Africa', label: 'Africa' },
          { value: 'America', label: 'America' },
          { value: 'Asia', label: 'Asia' },
          { value: 'Europe', label: 'Europe' },
          { value: 'Ocenia', label: 'Ocenia'}
        ]}
      />
    </section>
  )
}

export default FilterInput