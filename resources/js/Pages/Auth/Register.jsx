import React, { useState } from "react";

import Layout from "../../Layouts/Default";

import { Head, usePage } from "@inertiajs/inertia-react";

import { Inertia } from "@inertiajs/inertia";

function Register() {
    const { errors } = usePage().props;

    //define state
    const [name, setName]           = useState('');
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');

    //method storeRegister
    const storeRegister = async(e) => {
        e.preventDefault();

        Inertia.post('register', {
            name        : name,
            email       : email,
            password    : password
        });
    }

    return (
        <>
            <Head>
                <title>Register Account</title>
            </Head>
            <Layout>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card border-0 rounded-3 shadow-sm">
                            <div className="card-body">
                                <h5>Register</h5>
                                <hr/>
                                <form onSubmit={storeRegister}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-6">
                                                <label className="form-label">Full Name</label>
                                                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                                            </div>
                                        </div>
                                        {errors.name && (
                                            <div className="alert alert-danger">
                                                {errors.name}
                                            </div>
                                        )}
                                        <div className="col-md-12">
                                            <div className="mb-6">
                                                <label className="form-label">Email</label>
                                                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                            </div>
                                        </div>
                                        {errors.email && (
                                            <div className="alert alert-danger">
                                                {errors.email}
                                            </div>
                                        )}
                                        <div className="col-md-12">
                                            <div className="mb-6">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                            </div>
                                        </div>
                                        {errors.password && (
                                            <div className="alert alert-danger">
                                                {errors.password}
                                            </div>
                                        )}
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Register
