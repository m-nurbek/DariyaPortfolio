import Divider from "./Divider";
import Photo from "/photo.jpg";

function Main() {

    return (
        <>
        <main>
            <div className="image">
                <div className="img-container">
                    <img src={Photo} alt="photo" />
                </div>
            </div>
            <div className="caption">
                <h1>
                    Hi! I'm <span className="name">Dariya!</span>😉<br/>
                    head of strategic communications and<br/>
                    <span className="mark">the co-founder of PerFe agency</span>
                </h1>
            </div>

            <Divider />
        </main>
        </>
    );
}

export default Main;