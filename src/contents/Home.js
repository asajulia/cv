import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profilepic.png';

class Home extends Component {
    render() {
        return (
            <div className="frontpage">
                <img src={profilepic} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['Hi, my name is Ása']} speed={50} eraseDelay={700}/>
                <div class="social">
                    <a href="https://www.linkedin.com/in/asajulia/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="https://codepen.io/asajulia"><i class="fa fa-codepen" aria-hidden="true"></i></a>
                    <a href="https://github.com/asajulia/"><i class="fa fa-github" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/asajulia/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://www.facebook.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                </div>
            </div>
        )
    }
}
export default Home
