import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState("");
    // console.log(error);

    const { createUser } = useContext(AuthContex);


    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        // console.log(name, email, password, confirmPassword);

        setError("");
        
        if (password != confirmPassword) {
            setError("Password doesn't match")
            return;
        }
        else if (password.length < 6) {
            setError("Your password must be more than 6 character")
            return
        }
        else {
            setError("Okay, done.")
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            }
            )
    }
    return (
        <div>
            <Form className='mx-auto' onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter name" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address: </Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password: </Form.Label>
                    <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <h5>Already have an account? <Link to="/login">Log In</Link></h5>
            </Form>
            <p>{error}</p>
        </div>
    );
};

export default SignUp;