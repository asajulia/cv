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
                    <a href="https://www.linkedin.com/in/asajulia/" target="_blank"><i class="fa fa-linkedin"></i></a>
                    <a href="https://codepen.io/asajulia" target="_blank"><i class="fa fa-codepen"></i></a>
                    <a href="https://github.com/asajulia/" target="_blank"><i class="fa fa-github"></i></a>
                    <a href="https://www.instagram.com/asajulia/" target="_blank"><i class="fa fa-instagram"></i></a>
                    <a href="https://www.facebook.com" target="_blank"><i class="fa fa-facebook"></i></a> 
                </div>
            </div>
        )
    }
}
export default Home