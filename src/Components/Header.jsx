import NavBar from "./NavBar";
import Hero from "./Hero-section";
function Header() {
  return (
    <>
      <div
        className="bg-no-repeat w-full 2xl:bg-cover md:bg-[contain] 2xl:h-[800px]"
        style={{ backgroundImage: "url('/images/Background.png')" }}
      >
        <NavBar></NavBar>
        <Hero></Hero>
      </div>
    </>
  );
}

export default Header;
