import './home.page.scss'
import personal_photo from "../../assets/images/personal_photo.jpg";
import { Tabs, Tab } from 'react-bootstrap'
function HomePage() {
    return (
        <>
            <section>
                <div className="hero__wrapper container d-flex align-items-center">
                    <div className="hero__wrapper__personal_info col-md-6">
                        <h1>Hello,<span> &#128515; </span></h1>
                        <h4>I'm Mahmoud Badawy</h4>
                        <p>Frontend Developer Trainee @ITI_Alexandria</p>
                    </div>
                    <figure className='col-md-6 text-center' ><img src={personal_photo} alt="personal_photo" /></figure>
                </div>
            </section>
            <section>
                <div className="projects__wrapper container d-flex flex-column align-items-center justify-content-center">
                    <div className="blabla d-flex justify-content-between align-items-center">
                        <div className="line"></div>
                        <h3>My Projects<span>&#128104;&#127995;&#8205;&#128187;</span></h3>
                        <div className="line"></div>
                    </div>

                    <div className="taps">

                        <Tabs defaultActiveKey="all"  id="uncontrolled-tab-example" className="d7k mb-3">
                            <Tab eventKey="all" title="All">
                            </Tab>
                            <Tab eventKey="home" title="Home">
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                            </Tab>
                            <Tab eventKey="contact" title="Contact">
                            </Tab>
                        </Tabs>
                    </div>

                </div>
            </section>
        </>
    );
}
export default HomePage;