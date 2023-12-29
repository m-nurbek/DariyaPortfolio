import Card from "./Card";
import CardV2 from "./CardV2";
import Divider from "./Divider";

function WorkExperience() {
    return (
        <>
        <div className="cardsContainer">
            <div>
            <Card year="Jul 2023 - Present" 
                heading="Mentor in Academic Advising Office of NU" 
                p="Providing undergraduate students with the support they need in their studies"
            />
            </div>
            <div>
            <CardV2 year="Jul 2023 - Aug 2023" 
                heading="HR Manager Intern in KAP Technology LLP" 
                p='Connects the demands of businesses and companies with the usage of modern IT solutions'
            />
            </div>
            <div>
            <Card year="Oct 2022 - May 2023" 
                heading="Communications Manager Intern in Career and Advising Center of NU" 
                p="Empowering partner merchants to manage and grow their business"
            />
            </div>
            <div>
            <CardV2 year="Sep 2022 - May 2023" 
                heading="Ministry of Media and Communications Member in Student Government of NU" 
                p='Connects the demands of businesses and companies with the usage of modern IT solutions'
            />
            </div>
            <div>
            <Card year="Jun 2022 - Sep 202" 
                heading="Public Relations Intern in PBN Hill+Knowlton Strategies" 
                p="Empowering partner merchants to manage and grow their business"
            />
            </div>
            <Divider />
        </div>
        </>
    );
}

export default WorkExperience;