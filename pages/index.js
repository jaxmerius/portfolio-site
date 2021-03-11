import Favicon from "../components/favicon";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className="h-screen">
      <Favicon />
      <Nav currentPage="Home" />
      <div className="bg-gray-400 h-full"></div>
    </div>
  );
}
