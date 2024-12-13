import React from 'react';

function MovieChild(props){
    return (
        <div className='Movie mb-5'>
            <figure className="figure">
                <img src={props.image} className="figure-img img-fluid rounded" alt="" />
                <figcaption className='p-3'>
                    <h2>{props.name}</h2>
                    <p>{props.category}</p>
                </figcaption>
            </figure>
        </div>
    );
}
export default MovieChild