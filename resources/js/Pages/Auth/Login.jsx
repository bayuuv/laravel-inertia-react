import React, { useState } from "react";

import Layout from "../../Layouts/Default";

import { Head, usePage } from "@inertiajs/inertia-react";

import { Inertia } from "@inertiajs/inertia";

function Login() {
    const { errors } = usePage().props;

    //define state
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');

    //method storeLogin
    const storeLogin = async(e) => {
        e.preventDefault();

        Inertia.post('/login', {
            email       : email,
            password    : password
        });
    }

    return (
        <>
            <Head>
                <title>Login Account</title>
            </Head>
            <Layout>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card border-0 rounded-3 shadow-sm">
                            <div className="card-body">
                                <h5>Login</h5>
                                <hr/>
                                <form onSubmit={storeLogin}>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                    </div>
                                    {errors.email && (
                                        <div className="alert alert-danger">
                                            {errors.email}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                    </div>
                                    {errors.password && (
                                        <div className="alert alert-danger">
                                            {errors.password}
                                        </div>
                                    )}
                                    <button type="submit" className="btn btn-primary mt-3">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Login
