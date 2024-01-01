import { RefObject, useRef } from "react";
import Card from "./Card";
import CardV2 from "./CardV2";
import Divider from "./Divider";
import CareerAdvising from "/CareerAdvising.jpg";
import AAO from "/AAO.jpg";
import KAPTech from "/KAPTech.jpg";
import PBN from "/PBN.jpg";
import SG from "/SG.jpg";


function WorkExperience() {
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref4 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const ref5 = useRef<HTMLDivElement>(null);

    function handleClick(elementRef: RefObject<HTMLDivElement>) {
        if (elementRef.current) {
            if (elementRef==ref2 || elementRef==ref4) {
                elementRef.current.classList.remove('slideRight');
                elementRef.current.classList.add('slideRightBack');
            } else if (elementRef==ref1 || elementRef==ref3 || elementRef==ref5){
                elementRef.current.classList.remove('slideLeft');
                elementRef.current.classList.add('slideLeftBack');
            }
        }
    }

    return (
        <>
        <div className="cardsContainer">
            <div>
            <Card year="Jul 2023 - Present" 
                heading="Mentor in Academic Advising Office of NU" 
                p="Providing undergraduate students with the support they need in their studies"
                forwardedRef={ref1}
                img={AAO}
            >
                <div className="textWrapper">
                    <p>Accomplishments:</p>
                    <ul>
                        <li>Became a semester-long mentor for 2 freshman students</li>
                        <li>Conducted 3 workshops on resume building, career opportunities finding and research conducting</li>
                    </ul>
                    <button className="buttonV2" onClick={() => handleClick(ref1)}>Back <span>→</span></button>
                </div>
            </Card>
            </div>
            <div>
            <CardV2 year="Jul 2023 - Aug 2023" 
                heading="HR Manager Intern in KAP Technology LLP" 
                p='Connects the demands of businesses and companies with the usage of modern IT solutions'
                forwardedRef={ref2}
                img={KAPTech}
            >
                <div className="textWrapper">
                    <p>Accomplishments:</p>
                    <ul>
                        <li>Processed 100+ personal files of employees, working in cooperation with HR managers</li>
                        <li>Edited a video on the topic of sustainable energy use for the “Zheti Kadam” program by Samruk-Kazyna</li>
                        <li>Conducted social research among employees, identifying 9 ways of increasing KPI indicators</li>
                    </ul>
                    <button onClick={() => handleClick(ref2)}>Back <span>→</span></button>
                </div>
            </CardV2>
            </div>
            <div>
            <Card year="Oct 2022 - May 2023" 
                heading="Communications Manager Intern in Career and Advising Center of NU" 
                p="Empowering partner merchants to manage and grow their business"
                forwardedRef={ref3}
                img={CareerAdvising}
            >
                <div className="textWrapper">
                    <p>Accomplishments:</p>
                    <ul>
                        <li>Communicated by phone with 600 alumni to collect information about their employment status</li>
                        <li>Coordinated a group of 25 volunteers during the NU alumni reunion event</li>
                        <li>Created 50 Instagram publications in photo and video format for the official page of the CAC</li>
                        <li>Filmed over 60 Instagram stories for the official page of the CAC</li>
                    </ul>
                    <button onClick={() => handleClick(ref3)} className="buttonV2">Back <span>→</span></button>
                </div>
            </Card>
            </div>
            <div>
            <CardV2 year="Sep 2022 - May 2023" 
                heading="Ministry of Media and Communications Member in Student Government of NU" 
                p='Connects the demands of businesses and companies with the usage of modern IT solutions'
                forwardedRef={ref4}
                img={SG}
            >
                <div className="textWrapper">
                    <p>Accomplishments:</p>
                    <ul>
                        <li>Reported 12 weekly digests of university-wide events via Instagram and TV broadcasting</li>
                        <li>Created 6 Instagram publications in photo and reels format, demonstrating the reach of more than 17000 users</li>
                        <li>Filmed over 70 Instagram stories to broadcast university events</li>
                    </ul>
                    <button onClick={() => handleClick(ref4)}>Back <span>→</span></button>
                </div>
            </CardV2>
            </div>
            <div>
            <Card year="Jun 2022 - Sep 2022" 
                heading="Public Relations Intern in PBN Hill+Knowlton Strategies" 
                p="Empowering partner merchants to manage and grow their business"
                forwardedRef={ref5}
                img={PBN}
            >
                <div className="textWrapper smallerFont" >
                    <p>Accomplishments:</p>
                    <ul>
                        <li>Completed media monitoring tasks, covering Kazakhstan, Uzbekistan and Kyrgyzstan regions</li>
                        <li>Communicated by phone with Kazakhstani media representatives and completed media follow- ups</li>
                        <li>Created written translations of press releases (English, Kazakh and Russian languages)</li>
                        <li>Created Instagram content for the company's official page in the form of Instagram stories and photo publications</li>
                        <li>Was involved in the process of PR strategy creation for companies</li>
                    </ul>
                    <button onClick={() => handleClick(ref5)} className="buttonV2">Back <span>→</span></button>
                </div>
            </Card>
            </div>
            <Divider />
        </div>
        </>
    );
}

export default WorkExperience;