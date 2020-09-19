import React from "react";

class Footer extends React.Component {

	state = {
		joke :{},
		fadeIn: true
	};
	componentDidMount(){
		this.intervalId = setInterval(()=>{
			this.fetchRandomJokes();
		}, 10000);
		this.fetchRandomJokes();
	}
	async fetchRandomJokes(){
		let response = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
		let json = await response.json()
		if(Array.isArray(json)){
			json = json[0];
		}
		this.setState({joke: json, fadeIn: true});
		// fetch("https://official-joke-api.appspot.com/jokes/random").then((response) => response.json()).then(json=>{
		// 	this.setState({joke: json});
		// })
	}
	componentWillUnmount(){
		clearInterval(this.intervalId);
	}
    render() {
    	const { setup, punchline } = this.state.joke;
    	return(
	        <footer className="footer">
	            <div className="container text-center">
	            	<span className = {this.state.fadeIn? 'fade-in': 'fade-out'}>
	            		{setup} <em><b>{punchline}</b></em>
	            	</span>
	                    { /* <small className="copyright">Designed with <i className="fa fa-heart"></i> by <a href="##" target="_blank" rel="noopener noreferrer">Sudhir</a> for Portfolio</small> */}
	            </div>
	        </footer>
    )
    }
}

export default Footer;