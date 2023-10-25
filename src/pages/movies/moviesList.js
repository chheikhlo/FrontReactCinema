import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9006/movies').then(resp => {
            setMovies(resp.data);
            console.log(resp.data);
        }).catch(er => {
            alert(er.message);
        });
    }, []);

    return (
        <Container>
            <h1>Liste de Films</h1>
            <Row>
                {movies.map((movie, index) => (
                    <Col key={index} md={4}>
                        <div className="text-center"><br />
                            <h4>{movie.titre}</h4>
                            <img className="fit-picture" src={`/images/${movie.image}`} alt={movie.titre} /><br /><br />
                            <Link to={`/movies/details/${movie.id}`} className="btn btn-primary">
                                Détails
                            </Link>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default MoviesList;
