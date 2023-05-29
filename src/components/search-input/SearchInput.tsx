import { useEffect, } from 'react'
import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import { Input } from 'antd';
import { FaSearch } from 'react-icons/fa'
import { getData } from '../../helpers'
import './searchInput.css'

const SearchInput = () => {
  let { searchCountryValue } = useLoaderData() as any
  const submit = useSubmit()

  useEffect(() => {
    let search = getData('search')

    let input = document.querySelector('[name=search]') as any
    input.value = search ? search : ""
  }, [searchCountryValue])

  const onInputChange = (e: any) => {
    submit(e.currentTarget.form)
  }
  return (
    <div className='search-input' role='search'>
      <Form className='search-form'>
        <Input
          type='search'
          onChange={onInputChange}
          name='search' size="large"
          placeholder="Search for a country..."
          spellCheck={false}
          prefix={<FaSearch />} />

      </Form>
    </div>
  )
}

export default SearchInput