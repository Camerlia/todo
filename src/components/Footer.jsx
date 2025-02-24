import logo from "../assets/to-do.png";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer
      className={`px-8 py-3 flex flex-col md:flex-row justify-between items-center bg-orange-50`}
    >
      <div
        className={`flex flex-col md:flex-row gap-2 items-center mb-2 md:mb-0`}
      >
        <img className={`max-w-12`} src={logo} alt={`logo`} />
        <span className={`font-light italic text-2xl`}>TO-LIST</span>
      </div>
      <p
        className={`text-base md:text-xl font-light italic text-center md:text-left`}
      >
        © 2025 Camelia. All Rights Reserved.
      </p>
      <div className={`flex flex-row gap-3`}>
             
        <a href="https://github.com/Camerlia/">
        <img className={"w-8 h-8 cursor-pointer"} src={github} alt={`github`} />
        </a>
        
        <a href="www.linkedin.com/in/camelia-afolabi">
        <img
          className={"w-8 h-8 cursor-pointer"}
          src={linkedin}
          alt={`linkedin`}
        />
        </a>
       
        <a href="https://x.com/camelia_flow?s=21">
        <img
          className={"w-8 h-8 cursor-pointer"}
          src={twitter}
          alt={`twitter`}
        />
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
