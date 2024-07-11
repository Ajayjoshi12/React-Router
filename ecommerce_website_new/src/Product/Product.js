import { NavLink } from "react-router-dom";

export default function Product(curElem) {

    const { id, name, image, price, category } = curElem;

    return (
        
            <div className="col-lg-4">
                <NavLink to={`/singleproduct/${id}`} style={{textDecoration:"none"}}>
                    <div className="card">
                        <figure className="figure-feature">
                            <img className="img-fluid img-feature" src={image} alt={name} />
                            <figcaption className="caption">{category}</figcaption>
                        </figure>
                        <div className="card-data">
                            <div className="card-data-flex">
                                <h3 className="head-feature">{name}</h3>
                                <p className="card-data--price">
                                    {price}
                                </p>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        
    )
}