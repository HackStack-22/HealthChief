import React from 'react';
import './listDiseases.css'
import { Diseases } from '../data/diseases';

export default function ListDiseases() {
    console.log(Diseases)
    return (
        <div className='list-diseases'>
            <div className='list-diseases-container'>
                {Diseases.map((element) => {
                    var href = element.name.replace(" ", "-").toLowerCase()
                    return (
                        <a href={"/diseases-list/" + href}>{element.name}</a>
                    )
                })}
            </div>
        </div>
    )
}
