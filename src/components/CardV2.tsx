import { ReactNode, RefObject } from "react";
import CatPhoto from "/cat.jpg"

interface Props {
    children?: ReactNode
    year?: string,
    heading?: string,
    p?: string,
    forwardedRef: RefObject<HTMLDivElement>,
    img?: string
}

function Card({children, year='now', heading='Heading', p='Paragraph', forwardedRef, img} : Props) {
    function handleClick() {
        if (forwardedRef.current) {
            forwardedRef.current.classList.remove('slideRightBack');
            forwardedRef.current.classList.add('slideRight');
        }
    }

    return (
        <>
        <div className="cardWrapper">
            <div ref={forwardedRef} className="card">
                <div className="image">
                    <img src={img ? img : CatPhoto} alt="image" />
                </div>
                <div className="description">
                    <div className="content">
                        <h2>{year}</h2>
                        <h1>{heading}</h1>
                        <p>{p}</p>
                        <button onClick={handleClick}>
                            View <span>→</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="text">
                {children}
            </div>
        </div>
        </>
    );
}

export default Card;