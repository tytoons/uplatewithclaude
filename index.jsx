import React from 'react';
import ReactDOM from 'react-dom';
import Youtube from 'react-youtube';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }
    render() {
        return (
        	<div className='header'>
        		<div className="corner-ribbon">
                    <a href='#s1'>SEASON TWO</a>
                </div>
        		<div className='title'>Up Late With Claude</div>
                <div className='icons'>
                    <a href='#' className='fa fa-envelope-square'></a>
                    <a href='#' className='fa fa-youtube-square'></a>
                    <a href='#' className='fa fa-facebook-square'></a>
                    <a href='#' className='fa fa-twitter-square'></a>
                    <a href='#' className='fa fa-instagram'></a>
                    <a href='#' className='fa fa-snapchat-square'></a>
                </div>
                <div>

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