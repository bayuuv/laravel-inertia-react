import React from "react";

import { Link, usePage } from "@inertiajs/inertia-react";

function Layout({ children }){
    //destruct props auth
    const { auth } = usePage().props;

    return (
        <>
            <header>
                <title>Laravel Inertia.JS ReactJS</title>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container">
                        { auth.user
                            ?
                            <Link className="navbar-brand" href="/posts">Selamat Datang, <strong>{auth.user.name}</strong></Link>
                            :
                            <Link className="navbar-brand" href="/login">LARAVEL INERTIA.JS REACT</Link>
                        }
                        <button className="navbar-toggler" type="button" ds-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            { auth.user
                                ?
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/logout" method="POST">LOGOUT</Link>
                                    </li>
                                </ul>

                                :
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/register">REGISTER</Link>
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container mt-5">
                { children }
            </main>
        </>
    )
}

export default Layout
