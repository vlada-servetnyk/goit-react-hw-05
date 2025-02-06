import { useEffect, useState } from 'react';
import s from './MoviesPage.module.css';
import { fetchSearchFilms } from '../../../services/api';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [films, setFilms] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchQuery = form.query.value.trim();
        if (searchQuery === '') return;
        setQuery(searchQuery);
        form.reset();
    };
    
    useEffect(() => {
        if (!query) return;

        const getData = async () => {
            try {
                const data = await fetchSearchFilms(query);
                setFilms(prev => [...prev, ...data])
            } catch (er) {
                console.log(er);
            }
            
        };
        getData();
    }, [query])
    

  return (
    <div className={s.movies_wrapper}>
        <form className={s.form} onSubmit={onSubmit}>
            <input type="text" name="query" />
           <button type='submit'>Search</button>   
          </form>
        <MovieList data={films} />
      </div>
      
  )
}

export default MoviesPage;
