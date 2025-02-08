import logo from "../assets/to-do.png";
import avatar from "../assets/avatar.jpg";
const Logo = () => {
  return (
    <div
      className={`px-8 py-3 flex flex-row justify-between items-center bg-orange-50 `}
    >
      <div className={`flex gap-2 items-center`}>
        <img className={`max-w-16`} src={logo} alt={`logo`} />
        <span className={`font-light italic text-2xl`}>TO-LIST</span>
      </div>
      <div className={``}>
      <img className={` rounded-full max-w-16 h-16`} src={avatar} alt={`logo`} />
      </div>
    </div>
  );
};

export default Logo;
