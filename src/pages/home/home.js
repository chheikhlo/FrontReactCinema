import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <div className="centered-content">
                <h1>Bienvenue sur CinéMERN</h1>
                <h6>Découvrez une collection de films passionnants. Parcourez nos films, lisez les descriptions et </h6> 
                <h6>explorez les détails des acteurs et réalisateurs.</h6>

                <Link to="/movies" className="btn btn-primary">
                    Parcourir les films
                </Link>
            </div>
        </div>
    );
}

export default Home;
