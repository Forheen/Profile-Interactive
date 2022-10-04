import React from "react";
import Typed from 'react-typed';
function LandingPage () {
return(
<div className="w-100 h-screen justify-center bg-auto bg-no-repeat bg-center bg-blue-600	 ">
  
  <div className="min-h-screen flex flex-col text-white bg-black items-center justify-center 	">
	
			<div className="container mx-auto text-center ">

				<h2 className="text-1xl lg:text-2xl font-sans italic ">Hey ! I'm</h2>
				<h1 className="text-2xl lg:text-3xl  text-yellow-600 font-black font-sans uppercase mb-4 mt-4">
				<Typed
      strings={['a coder','FORHEEN','FORHEEN AHMED','a developer']}
      typeSpeed={90}
	  backSpeed={100}
	  loop
  />

				</h1>
				<p className="text-base md:text-lg lg:text-1xl font-mono">If you can, Decode me!</p>


				
			</div> 


		</div>	

</div>

);
}
export default LandingPage;
