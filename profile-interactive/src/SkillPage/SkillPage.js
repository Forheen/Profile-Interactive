import React from "react";
import SkillCard from "./SkillCard";
import SphericalCLoud from "./SphericalCLoud";
const style3 = {
    position:"absolute",bottom:"-120px", left:"20px"
  };
function SkillPage () {
return(
<div className="w-100 h-screen justify-center bg-auto bg-no-repeat bg-center bg-white text-black	 ">
  
	
			<div className="container mx-auto  h-auto p-10">
				<span  className="text-lg md:text-lg lg:text-2xl font-mono text-right">
				do	&#123; <br/> &emsp;&emsp;learn&#40;new_language&#41;<br/> &#125; when &#40; passion &gt; life &#41;
 
</span>
</div>

				<div class="flex flex-col-3 gap-3 flex-wrap justify-center h-full pt-5 ">
				
				<div><SkillCard text1="Web Front End Development" text2= "From designing UI/UX to prototyping , yet worked on many projects and got to learn a lot of things on web development" lang1='HTML' lang2='JS' lang3='CSS' lang4='ReactJS'/></div>
				<div><SkillCard text1="Back End Development" text2= "Whether for android or web, back end is where you learn about the back-end logic and APIs" lang1='NodeJS' lang2='.NET' lang3='MongoDB' lang4='MY SQL'/></div>
				<div><SkillCard text1="Android Development" text2= "Through Internships, I let my hands dirty on app dev which made me efficient on building structural app with good-user-interface" lang1='Flutter' lang2='Kotlin' lang3='Compose' lang4='Dart'/></div>
				<div><SkillCard text1="Competitive Programming" text2= "To be good programmer, you need to be a good thinker and Algorithms and its implementation in Problem-solving skills makes you a perfect coder" lang1='C++' lang2='C' lang3='Java' lang4='Python'/></div>
				<div><SkillCard text1="Research" text2= "Fusing everything into cool projects" lang1='Arduino' lang2='Processing' lang3='Tableau' lang4='Data Science'/></div>


		</div>	

</div>

);
}
export default SkillPage;
