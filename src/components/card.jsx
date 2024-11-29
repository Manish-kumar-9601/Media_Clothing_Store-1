import React from 'react'
import './card.css'
export const Card = ({...props}) =>
{
    return (
        <>
            <main role="main">
                <div className="product">
                    <figure>
                        <img src={props.productImage} alt="Product Image" className="product-image" />
                    </figure>

                    <div className="product-description">

                        <div className="info">
                            <h1>{props.title}</h1>
                            <p>
                            </p>
                        </div>

                        <div className="price">
                        {props.price}
                        </div>
                    </div>


                </div>
            </main>
        </>
    )
}
