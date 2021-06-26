import React from 'react'

import { Link } from 'react-router-dom'
import { workL, backwomen, backwomen0, frame, I1, I2, I3, I4, I5, I6, I7, I8, glaring, smile, teesA1, teesA2, teesB1, teesB2, teesC1, teesC2, teesD1, teesD2, comic, comic2, tees, bat } from './images/images'

class Work extends React.Component {
    render() {
        return (
            <div>
                <body>
                    <header>
                        <nav className="image">
                            <div className="image image-container" >
                                <img src={glaring} alt="glare" width="240px" height="180px" />
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
                            <a href="https://drive.google.com/file/d/1re5KuaWLmlDQ-9toOQVhuyWfDemGG3Mz/view?usp=sharing" target="_blank" rel="noreferrer"><img src={comic} alt="comic" width="600px" height="800px" /></a>
                            <a href="https://drive.google.com/file/d/1t9Z2D9gjrmfFfJqbsxgTfdtJJHeo65bQ/view?usp=sharing" target="_blank" rel="noreferrer"><img src={comic2} alt="comic" width="600px" height="800px" /></a>
                        </section>

                    </main>
                </body>
            </div>
        )
    }
}

export default Work