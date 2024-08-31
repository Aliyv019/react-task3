import { useState } from 'react'
import React from 'react'
import styles from './cityinput.module.css'

export default function CityInput({onFormSubmit}) {

    const [inputValue,setInputValue]=useState('')
    const handleInputChange=(e)=>{
    setInputValue(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    onFormSubmit(inputValue)
    }
  return (
    <header>
      <h1 className={styles.headertext}>What percentage of the population has been infected with COVID-19?</h1>
    <form className={styles.form} onSubmit={handleSubmit}>
        <input placeholder='Enter a country' type="text" onChange={handleInputChange} />
        <button>Search</button>
    </form>
    </header>
  )
}
