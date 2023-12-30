import InstagramSVG from "../assets/svg/InstagramSVG";
import LinkedinSVG from "../assets/svg/LinkedinSVG";


function Footer() {
    return (
        <>
            <footer>
                <h1>Let's work together!</h1>
                <ul>
                    <li><a><InstagramSVG /></a></li>
                    <li><a><LinkedinSVG /></a></li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;