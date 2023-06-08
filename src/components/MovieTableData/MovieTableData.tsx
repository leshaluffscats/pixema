import { ReactNode } from 'react';
import { IMovieDataProps, IMoviePerson } from '../../types/movieTypes';
import './MovieTableData.scss';


const MovieTableData = ({ year, countries, persons }: IMovieDataProps) => {
    function filterArray(array: IMoviePerson[], filter: string): IMoviePerson[] {
        return array.filter((el: IMoviePerson) => el.enProfession === filter)
    }

    function showPersons(array: IMoviePerson[], string: string): ReactNode {
        return filterArray(array, string)
            .slice(0, 20)
            .map((el: IMoviePerson) => <span key={el.id}>{el.name}</span>)
    }
    
    return (
        <table className='movieTableData-wrapper'>
            <tbody>
                <tr>
                    <td>Year</td>
                    <td>{year.year}</td>
                </tr>
                <tr>
                    <td>Released</td>
                    <td>{new Date(year?.premiere).toLocaleDateString()}</td>
                </tr>
                <tr>
                    <td>{countries.length > 1 ? "Countries" : "Country"}</td>
                    <td> {countries.map((country, i) => <span key={country.name + i}>{country.name}</span>)}</td>
                </tr>
                <tr>
                    <td>Actors</td>
                    <td> {showPersons(persons, "actor")}</td>
                </tr>
                <tr>
                    <td>Directors</td>
                    <td> {showPersons(persons, "director")}</td>
                </tr>
                <tr>
                    <td>Writers</td>
                    <td>{showPersons(persons, "writer")}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default MovieTableData;