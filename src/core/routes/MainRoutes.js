import { Route, Routes } from "react-router";
import Home from "../../pages/home/home";
import MoviesList from "../../pages/movies/moviesList";
import MovieDetails from "../../pages/movies/movieDetails";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="movies/">
                <Route index caseSensitive element={<MoviesList />} />
                <Route path="details/:id" element={<MovieDetails />} />
            </Route> 
        </Routes>
    );
}

export default MainRoutes;