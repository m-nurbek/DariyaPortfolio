import { ReactNode } from "react";
import CatPhoto from "/cat.jpg"

interface Props {
    children?: ReactNode
    year?: string,
    heading?: string,
    p?: string,
}

function Card({children, year='now', heading='Heading', p='Paragraph'} : Props) {
    return (
        <>
        <div className="cardWrapper cardWrapperV2">
            <div className="card cardV2">
                <div className="image imageV2">
                    {children ? children : <img src={CatPhoto} alt="image" />}
                </div>
                <div className="description descriptionV2">
                    <div className="content">
                        <h2>{year}</h2>
                        <h1>{heading}</h1>
                        <p>{p}</p>
                        <button className="buttonV2">
                            View <span>→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;