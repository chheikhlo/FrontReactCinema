import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9006/movies/${id}`)
            .then(resp => {
                setMovie(resp.data[0]);
            })
            .catch(er => {
                alert(er.message);
            });
    }, [id]);

    return (
        <div>
            <td>
                <img class="fit-picture" src={`/images/${movie.image}`} />
            </td>
            <h4>Titre : {movie.titre}</h4>
            <h4>Description : {movie.description}</h4>
            <h4>Acteurs : {movie.acteurs_principaux}</h4>
            <h4>Realisateur : {movie.realisateur}</h4>
            <h4>Date Sortie : {movie.date_de_sortie}</h4>   
        </div>
    );
}

export default MovieDetails;
