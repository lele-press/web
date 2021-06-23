import React from 'react'
import glare from './images/glaring.gif'
import smile from './images/smile.gif'
import about from './images/About.png'
import aboutBlack from './images/AboutBlack.png'
import work from './images/Work.png'
import workBlack from './images/WorkBlack.png'
import contact from './images/Contact.png'
import contactBlack from './images/ContactBlack.png'

import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <body>
                    <header>
                        <nav className="image">
                            <div className="image-center image-container" >
                                <img src={glare} alt="glare" width="480px" height="360px" />
                                <img className="transition-image-home" src={smile} alt="smile" width="480px" height="360px" />
                            </div>
                        </nav>
                    </header>
                    <main className="grid-container">
                        <div className="image-container">
                            <Link to="/about">
                                <img src={about} alt="" />
                                <img className="transition-image" src={aboutBlack} alt="" />
                            </Link>
                        </div>
                        <section className="about">
                        </section>
                        <div className="image-container">
                            <Link to="work">
                                <img src={work} alt="" />
                                <img className="transition-image" src={workBlack} alt="" />
                            </Link>
                        </div>
                        <section className="work">
                        </section>
                        <div className="image-container">
                            <Link to="contact">
                                <img src={contact} alt="" />
                                <img className="transition-image" src={contactBlack} alt="" />
                            </Link>
                        </div>
                        <section className="Contact">
                        </section>
                    </main>
                </body>

            </div>
        );
    }
}

export default Home;
