import React from 'react';
import { IMovieDataProps, IMoviePerson } from '../../types/movieTypes';
import './MovieTableData.scss';


const MovieTableData = ({ year, countries, persons }: IMovieDataProps) => {

    function filterArray(array: IMoviePerson[], filter: string): IMoviePerson[] {
        return array.filter((el: IMoviePerson) => el.enProfession === filter)
    }

    function showPersons(array: IMoviePerson[], string: string): React.ReactNode {
        return filterArray(array, string).map((el: IMoviePerson) => <span key={el.id}>{el.name}</span>)
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
                    <td>{year?.premiere?.slice(0, year.premiere.indexOf("T"))}</td>
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