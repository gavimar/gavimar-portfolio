import React from "react";
// import snow from './snow'
import startSnow from './snow';

class LandingMain extends React.Component {
  constructor(){
    super()
    // this.resize = this.resize.bind(this)
    // this.initSnow = this.initSnow.bind(this)
    // this.startSnow = this.startSnow.bind(this)
  }
  
  
 
  render() {
    
    startSnow();
    
  

    return (
      <div className="landing-main">
<div className="landing-title">
  <h1 className="title1">Gádor Villanueva Martos</h1>
  <h1 className="title2">Front-end Developer</h1>
</div>

        <div className="bg">
  <div className="mountain">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
  <div className="mountain-two">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
   <div className="mountain-three">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
  <div className="mountain-four">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
  <div className="mountain-five">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
  <div className="cloud"></div>
</div>

{/* <div class="fire-on"></div>
	
    <div class="switch-wrap">
		<div id="switch">
			<div id="circle"></div>
		</div>
    </div>
	
    <div class="name">CSS<span>spark</span></div>
	
	<div class="section-center">
		<div class="moon">
			<div></div>
			<div></div>
			<div></div>
		</div>
		<div class="shooting-star"></div>
		<div class="shooting-star-2"></div>
		<div class="star"></div>
		<div class="star snd"></div>
		<div class="star trd"></div>
		<div class="star fth"></div>
		<div class="star fith"></div>
		<div class="circle"></div>
		<div class="wood-circle"></div>
		<div class="wood"></div>
		<div class="tree-1"></div>
		<div class="tree-2"></div>
		<div class="fire">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div class="smoke">
			<span class="s-0"></span>
			<span class="s-1"></span>
			<span class="s-2"></span>
			<span class="s-3"></span>
			<span class="s-4"></span>
			<span class="s-5"></span>
			<span class="s-6"></span>
			<span class="s-7"></span>
			<span class="s-8"></span>
			<span class="s-9"></span>
		</div>
	</div> */}
  



      </div>
    )
  }
}

export default LandingMain;