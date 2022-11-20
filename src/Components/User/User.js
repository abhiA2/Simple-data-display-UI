import React, { useState, useRef } from 'react'
import Card from '../Ui/Card'
import Button from '../Ui/Button'
import classes from './User.module.css'
import ErrorModal from '../Ui/ErrorModal'
import Wrapper from '../Helpers/Wrapper'

const User = (props) => {

    // const [name, setName] = useState('')
    // const [age, setAge] = useState('')
    const [error, setError] = useState();
    const nameRef = useRef()
    const ageRef = useRef()

    // const ageChangeHandler = (event) => {
    //     setAge(event.target.value)
    // }
    // const nameChangeHandler = (event) => {
    //     setName(event.target.value)
    // }
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameRef.current.value;
        const enteredAge = ageRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid Username'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid age(>0)'
            });
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        nameRef.current.value = ''
        ageRef.current.value = ''

        // console.log(name, age);

    }
    const errorHandler = () => {
        setError(null);
    }
    return (
        <Wrapper>
            {/* {!isValid ? (
                <ErrorModal title="Error" message="Something went wrong" />

            ) : ''
            } */}
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        // onChange={nameChangeHandler}
                        // value={name}
                        ref={nameRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        id="age"
                        // onChange={ageChangeHandler}
                        // value={age}
                        ref={ageRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card >
        </Wrapper>
    )
}

export default User