import React from 'react'
import {SearchInput, FilterInput} from '../'
import './searchBar.css'
const SearchBar = () => {
  return (
    <section className='search-bar'>
          <SearchInput/>
          <FilterInput />
    </section>
  )
}

export default SearchBar