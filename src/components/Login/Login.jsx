import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';


const Login = () => {
    const { signIn } = useContext(AuthContex);
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";
    console.log(from);

    const handleSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <Form className='mx-auto' onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address: </Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <h5>New here? <Link to="/signup">Sign Up</Link></h5>
            </Form>
        </div>
    );
};

export default Login;
