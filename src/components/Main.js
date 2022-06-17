import React from 'react';
import shirts from '../assets/shirts.jpg'
import ojam from '../assets/ojam.jpeg'
import shirts3 from '../assets/shirts3.jpg'
import shirts5 from '../assets/shirts5.jpg'
import shirts9 from '../assets/shirts9.jpg'
import pullover from '../assets/pullover.jpg'
import shirt7 from '../assets/shirt7.jpg'
import shirt10 from '../assets/shirt10.jpg'
import shirts4 from '../assets/shirts4.jpg'
import shirts8 from '../assets/shirts8.jpg'

const Main = () => {
    return (
        <div>
            <div className="elegance">
                <h1 className="h1">Elegance is<br/>good taste,<br/>plus a dash<br/>of during </h1>
                <div>
                    <img className="shirt1" src={shirts} width="400px" height="400px"/>
                    <p>lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.
                        Viverra morbi cras auque<br/> egastas distum habitasse</p>
                </div>
                <img className="shirt2" src={ojam} width="400px" height="450px"/>
            </div>
            <div className="naj">
                <div className="najm" >
                </div>
                <div className="social">
                <span style={{padding:'10px'}}>•Facebook</span>
                <span style={{padding:'10px'}}>•Instagram</span>
                <span style={{padding:'10px'}}>•Twitter</span>
                </div>
                <div className="border1" >
                </div>
            </div>
            <div className="things">
                <div className="choice">
                    <h1>New In</h1>
                </div>
                <div>
                    <p className="paragraph">lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Viverra morbi cras auque<br/> egastas distum habitasse</p>
                    <div className="hodDies">
                        <h3>Hoddies</h3>
                        <h3>Jeans & Shirts</h3>
                        <h3>T-Shirts</h3>
                        <h3>Jackets</h3>
                    </div>
                </div>
            </div>
            <div className="collection">
                <div className="price">
                    <img src={shirts3} border="1px solid" width="350px" height="350px"/>
                    <div className="cost">$199</div>
                    <div className="cost1">AhaZ Shirts</div>
                </div>
                <div className="price">
                <img src={shirts9} border="1px solid" width="350px" height="350px" />
                    <div className="cost">$199</div>
                    <div className="cost1">AhaZ Shirts</div>
                </div>
                <div className="price">
                <img src={shirts5} border="1px solid" width="350px" height="350px" />
                    <div className="cost">$199</div>
                    <div className="cost1">AhaZ Shirts</div>
                </div>
            </div>
            <div className="feature">
                <h1>Featured Collections</h1>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing <elit className=""></elit>
                    Viverra morbi cras auque egastas<br/> distum habitasse.
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra morbi<br/> cras auqueegastas distum habitasse</p>

                <img src={pullover} width="300px" height="400px" style={{margin:'40px'}}/>
                <img src={shirts} border="1px solid" width="300px" height="300px" style={{margin:'40px'}}/>
            </div>
            <div className="separator">
            </div>
            <div>
                <h1 className="ahaz">AhaZ was created to inspire you to be<br/>
                    the best version of yourself. Our goal is<br/>
                    to bring you clothes that blanket you in <br/>
                    quality, design, and comfort.
                </h1>
                <div className="par">
                    <p style={{margin: '100px'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                        Viverra morbi cras auque egastas distum habitasse.
                        lorem<br/> ipsum dolor sit amet, consectetur adipiscing elit.
                        Viverra<br/> morbi cras auqueegastas distum habitasse</p>
                    <p style={{margin: '100px'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                        Viverra morbi cras auque egastas distum habitasse.
                        lorem<br/> ipsum dolor sit amet, consectetur adipiscing elit.
                        Viverra<br/> morbi cras auqueegastas distum habitasse</p>
                </div>
                <div className="design">
                    <img src={shirt10} width="450px" height="500px" border="1px solid" style={{margin: '50px'}}/>
                    <div className="shirts4">
                        <img src={shirts4} width="400px" height="400px" border="1px solid" style={{margin: '50px'}}/>
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                            Viverra morbi cras auque egastas distum habitasse.
                            lorem<br/> ipsum dolor sit amet, consectetur adipiscing elit.
                            Viverra<br/> morbi cras auqueegastas distum habitass </p>
                        <button className="butt">About us</button>
                    </div>
                </div>
                <div className="separator1">
                </div>
            </div>
            <div className="video">
                <img src={shirts} border="1px solid" width="800px" height="800px"/>
            </div>
            <div className="separator1">
            </div>

            <div className="news">
                <div className="end">
               <span><h5>•Want some news</h5></span>
                <h1>Get in Touch</h1>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                    Viverra morbi cras auque egastas distum habitasse.
                    lorem<br/> ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra<br/> morbi cras auqueegastas distum habitass </p>
                </div>

                <img className="shirts8" src={shirts8} width="300px" height="400px" style={{padding:'50px'}}/>
            </div>
            <div className="separator1">
            </div>
        </div>

    );
};

export default Main;