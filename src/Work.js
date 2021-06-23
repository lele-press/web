import React from 'react'

import glare from './images/glaring.gif'
import smile from './images/smile.gif'
import workL from './images/workL.png'
import backwomen0 from './images/backwomen0.png'
import backwomen from './images/backwomen.png'
import frame from './images/frame.gif'
import I1 from './images/I1.png'
import I2 from './images/I2.png'
import I3 from './images/I3.png'
import I4 from './images/I4.png'
import I5 from './images/I5.png'
import I6 from './images/I6.png'
import I7 from './images/I7.png'
import I8 from './images/I8.png'
import teesA1 from './images/teesA1.png'
import teesA2 from './images/teesA2.png'
import teesB1 from './images/teesB1.png'
import teesB2 from './images/teesB2.png'
import teesC1 from './images/teesC1.png'
import teesC2 from './images/teesC2.png'
import teesD1 from './images/teesD1.png'
import teesD2 from './images/teesD2.png'
import comic from './images/comic.png'
import comic2 from './images/comic2.png'
import tees from './images/tees.gif'
import bat from './images/bat.gif'
import { Link } from 'react-router-dom'

class Work extends React.Component {
    render() {
        return (
            <div>
                <body>
                    <header>
                        <nav className="image">
                            <div className="image image-container" >
                                <img src={glare} alt="glare" width="240px" height="180px" />
                                <img className="transition-image-home" src={smile} alt="smile" width="240px" height="180px" />
                            </div>
                            <div className="image back-container">
                                <img src={workL} alt="" width="650px" height="180px" />
                            </div>
                            <Link to="/">
                                <div className="image back-container" >
                                    <img src={backwomen0} alt="" width="240px" height="180px" />
                                    <img className="transition-image-home" src={backwomen} alt="smile" width="240px" height="180px" />
                                </div>
                            </Link>
                        </nav>
                    </header>
                    <main className="grid-container-work">
                        <section className="illustration">
                            <div className="gif-container">
                                <img src={frame} alt="" />
                            </div>
                        </section>
                        <section className="images1">
                            <div>
                                <img src={I1} alt="illustration1" width="600px" height="800px" />
                                <img src={I2} alt="illustration2" width="600px" height="800px" />
                                <img src={I3} alt="illustration3" width="600px" height="800px" />
                                <img src={I4} alt="illustration4" width="600px" height="800px" />
                                <img src={I5} alt="illustration5" width="600px" height="800px" />
                                <img src={I6} alt="illustration6" width="600px" height="800px" />
                                <img src={I7} alt="illustration7" width="600px" height="800px" />
                                <img src={I8} alt="illustration8" width="600px" height="800px" />
                            </div>
                        </section>
                        <section className="tees">
                            <div className="gif-container">
                                <img src={tees} alt="" />
                            </div>
                        </section>
                        <section className="images2">
                            <div>
                                <div className="image_center">
                                    <img src={teesA1} alt="teesA1" width="600px" height="800px" />
                                    <img src={teesA2} alt="teesA2" width="600px" height="800px" />
                                </div>
                                <div>
                                    <img src={teesB1} alt="teesB1" width="600px" height="800px" />
                                    <img src={teesB2} alt="teesB2" width="600px" height="800px" />
                                </div>
                                <div>
                                    <img src={teesC1} alt="teesC1" width="600px" height="800px" />
                                    <img src={teesC2} alt="teesC2" width="600px" height="800px" />
                                </div>
                                <div>
                                    <img src={teesD1} alt="teesD1" width="600px" height="800px" />
                                    <img src={teesD2} alt="teesD2" width="600px" height="800px" />
                                </div>
                            </div>
                        </section>
                        <section className="comic">
                            <div className="gif-container">
                                <img src={bat} alt="" />
                            </div>
                        </section>
                        <section className="images3">
                            <Link href="https://drive.google.com/file/d/1re5KuaWLmlDQ-9toOQVhuyWfDemGG3Mz/view?usp=sharing" target="_blank" rel="noreferrer"><img src={comic} alt="comic" width="600px" height="800px" /></Link>
                            <Link href="https://drive.google.com/file/d/1t9Z2D9gjrmfFfJqbsxgTfdtJJHeo65bQ/view?usp=sharing" target="_blank" rel="noreferrer"><img src={comic2} alt="comic" width="600px" height="800px" /></Link>
                        </section>

                    </main>
                </body>
            </div>
        )
    }
}

export default Work