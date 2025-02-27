import Image from "next/image";
import Link from "next/link";

const PrimaryNavbar = () => {
  return (
    <div className="navbar flex items-center justify-between w-full py-2 px-5 xl:px-6 xl:pl-8">
      <div className="flex items-center pr-6">
        <Image
          src="/Assets/Images/logo-better-ways.svg"
          width={200}
          height={40}
          alt="CMA CGM Logo"
        />
      </div>
	  <ul className="nav-menu grid 2xl:flex items-center font-extrabold text-center gap-x-2 gap-y-4 ml-8 p-2 xl:gap-x-4 xl:ml-4">
		<li className="nav-item px-5 xl:pl-8 xl:pr-4 border-l-2">
		  <Link href="/cma-cgm-group">The CMA CGM Group</Link>
		</li>

		<li className="nav-item px-5 xl:pl-8 xl:pr-4 border-l-2">
		  <Link href="/sustainability">Sustainability</Link>
		</li>

		<li className="nav-item px-5 xl:pl-8 xl:pr-4 border-l-2">
		  <Link href="/decarbonization">Decarbonization</Link>
		</li>

		<li className="nav-item px-5 xl:pl-8 xl:pr-4 border-l-2">
		  <Link href="/innovation">Innovation</Link>
		</li>

		<li className="nav-item px-5 xl:pl-8 xl:pr-4 border-l-2">
		  <Link href="/careers">Careers</Link>
		</li>

		<li className="nav-item px-5 xl:pl-8 xl:pr-4 border-l-2">
		  <Link href="/news-media">News & Media</Link>
		</li>

		<li className="nav-item px-5 xl:pl-8 xl:pr-4 border-l-2">
		  <Link href="/cma-cgm-foundation">The CMA CGM Foundation</Link>
		</li>
		</ul>
    </div>
  );
};

export default PrimaryNavbar;
