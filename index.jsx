import React from 'react';
import ReactDOM from 'react-dom';
import Youtube from 'react-youtube';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
        this.drawModals = this.drawModals.bind(this);
        this.emailAdmin = this.emailAdmin.bind(this);
    }

    drawModals() {
        return (
            <div className='modals'>
                <div id="myModal" className="modal fade" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <img src='./snapchat.jpg'/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }

    emailAdmin() {
        window.open('mailto:admin@uplatewithclaude.com?subject=Claude Rocks!');
    }

    render() {
        return (
        	<div className='header'>
                {this.drawModals()}
        		<div className="corner-ribbon">
                    <a href='#s1'>SEASON TWO</a>
                </div>
        		<div className='title'>Up Late With Claude</div>
                <div className='icons'>
                    <a className='fa fa-envelope-square' onClick={this.emailAdmin}></a>
                    <a href='https://www.youtube.com/channel/UC3638FLLLpRoXLGnojUGmAg/' target="_blank" className='fa fa-youtube-square'></a>
                    <a href='#' className='fa fa-facebook-square'></a>
                    <a href='#' className='fa fa-twitter-square'></a>
                    <a href='https://www.instagram.com/explore/tags/uplatewithclaude/' target="_blank" className='fa fa-instagram'></a>
                    <a src='snapchat.jpg' data-toggle="modal" data-target="#myModal" className='fa fa-snapchat-square'></a>
                </div>
        	</div>
        );
    }
}

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Footer';
    }
    render() {
        return (
        	<div className='footer'>
        		<div className='logo'>
                    <img src='./ocelot_fix.png'/>
                </div>
        	</div>
        );
    }
}

class YoutubeHolder extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    	const opts = {
	      height: '390',
	      width: '640',
	      playerVars: {
	        autoplay: 0
	      }
        };

        return (
            <div className='YoutubeHolder'>
	        	<Youtube
	        	 	videoId = 'xwc_9l0FsUc'
	        		opts = {opts}
	        	/>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div>
        		<Header />
        		<YoutubeHolder />
        		<Footer />
        	</div>
        );
    }
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);