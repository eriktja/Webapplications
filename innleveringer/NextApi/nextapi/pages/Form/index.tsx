import styles from '../../styles/Home.module.scss'
import axios from 'axios'
import React, { FormEventHandler, useEffect, useState } from 'react'

type person = {
    id: number,
    name: string,
    age: number
}



export default function Form() {
    const [people, setPeople] = useState([])
    const [data, setData] = useState({id: 0, name: '', age: 0})
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)


    const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target.id
        if(id && Object.keys(data).includes(id)) {
            setData((prev) => ({ ...prev, [id]: event.target.value }))
        }
    }

    const isValidInput = ({name, age}: person) => {
        return name && age && name.length > 2 && age > 10
    }
    
    
    
    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(isValidInput(data)) {
            try {
                data.id = people.length + 1
                const response = await axios.post('http://localhost:3000/api/people', data)
                console.log(response?.status)
                if (response?.status == 201) {
                    setSuccess(true)
                    setError(false)
                }
            }
            catch (error) {
                console.log(error)
            }            
        }
        else {
            setSuccess(false)
            setError(true)
        }
    }
    

    const getPeople = async () => {
        try  {
            const response = await axios.get('http://localhost:3000/api/people')
            console.log(response.status)
            if(response?.status == 200){
                setPeople(response.data)
            }
        } catch (error){
            console.log(error)
        }
    }

    useEffect( () => {
        getPeople()
    }, [success, error]) 

    return (
        <main className={styles.main}>
            <div>

            <h1>Add a new person</h1>
            <form onSubmit={submit} className={styles.form}>
                <label htmlFor="name">Name: 
                    <input id="name" type="text" placeholder='name' onChange={handleData} value={data.name}/>
                </label>
               
                <label htmlFor="age">Age: 
                    <input id="age" type="number" placeholder='age' onChange={handleData} value={data.age}/>
                </label>
                { error ?  <p  className='error' >Name must be longer than 2 characters and age must be higher than 10</p> : null}
                { success ? <p  className='success' >Person added</p> : null}
                <button>Save</button>
            </form>
            </div>
            <ul>
                <h1>All the people</h1>
                {people.map(({id, name, age}) => (
                    <li key={id}>{name} -  {age}</li>
                ))}
            </ul>
        </main>
    )
}