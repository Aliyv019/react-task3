import { useState } from 'react'
import React, { useEffect } from 'react'
import styles from './graph.module.css'

export default function Graph({Countryname}) {
    
    const [stats,setStats]=useState({
        case:0,
        recovered:0,
        deceased:0,
        active:0
    })
    
    useEffect(()=>{
        
        const fetchData=async ()=>{
            const url=`https://disease.sh/v3/covid-19/countries/${Countryname}`
            try {
                const response=await fetch(url)
                const result=await response.json()
                setStats((prevStats)=>({
                    ...prevStats,
                    case:result.cases/result.population,
                    recovered:result.recovered/result.population,
                    deceased:result.deaths/result.population,
                    active:result.active/result.population
                }))
                console.log(stats);
                
            } catch (error) {
                console.error();
                
            }
        }
        fetchData()
    },[Countryname])


  return (
    <div className={styles.main_div}>
        <div className={styles.graph_div}>
            <div className={styles.graphandcount}>
                <ul>
                    <li>100%</li>
                    <li>80%</li>
                    <li>60%</li>
                    <li>40%</li>
                    <li>20%</li>
                </ul>
                <div className={styles.bars}>
                    <div style={{height:`${stats.case*100}%`}}/>
                    <div style={{height:`${stats.recovered*100}%`}}/>
                    <div style={{height:`${stats.deceased*100}%`}}/>
                    <div style={{height:`${stats.active*100}%`}}/>
                </div>
            </div>
            <div className={styles.factors}>
                <div className={styles.emptyspace}>0</div>
                <ul>
                    <li>Cases</li>
                    <li>Recovered</li>
                    <li>Deceased</li>
                    <li>Active</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
