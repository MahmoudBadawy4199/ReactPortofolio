import './home.page.scss'
import personal_photo from "../../assets/images/personal_photo.jpg";
import { Tabs, Tab } from 'react-bootstrap'
import CounterPage from '../counter/counter.page'
import ShopPage from '../shop/shop.page'
import TodoPage from '../todo/todo.page'
import SignUp from '../signup'



function HomePage() {
    return (
        <>
            <section>
                <div className="hero__wrapper container d-flex align-items-center">
                    <div className="hero__wrapper__personal_info col-md-6">
                        <h1>Hello,<span className='emoji'>&#128515;</span></h1>
                        <h4>I'm Mahmoud Badawy</h4>
                        <p>Frontend Developer Trainee @ITI_Alexandria</p>
                    </div>
                    <figure className='col-md-6 text-center' ><img src={personal_photo} alt="personal_photo" /></figure>
                </div>
            </section>
            <section>
                <div className="projects__wrapper container d-flex flex-column align-items-center justify-content-center">
                    <div className="projects__wrapper__title_wrapper d-flex justify-content-between align-items-center">
                        <div className="line"></div>
                        <h3>My Projects<span className='emoji'>&#128104;&#127995;&#8205;&#128187;</span></h3>
                        <div className="line"></div>
                    </div>

                    <div className="projects__wrapper__tabs my-2">
                        <Tabs defaultActiveKey="counter" id="projects_tabs" className="mb-3">
                            <Tab eventKey="counter" title="Counter">
                                <CounterPage />
                            </Tab>
                            <Tab eventKey="todo" title="Todo">
                                <TodoPage />
                            </Tab>
                            <Tab eventKey="shop" title="ShopApi">
                                <ShopPage />
                            </Tab>
                            <Tab eventKey="signup" title="SignupForm">
                                <SignUp />
                            </Tab>
                        </Tabs>
                    </div>

                </div>
            </section>
        </>
    );
}
export default HomePage;