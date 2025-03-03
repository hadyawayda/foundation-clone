import Image from "next/image";
import Link from "next/link";

const PrimaryNavbar = () => {
  return (
    <div className="navbar flex items-center justify-between w-full py-2 xl:px-6 xl:pl-8">
      <div className="flex items-center px-5 pr-6">
        <Image
          className="better-ways-logo"
          src="/Assets/Images/logo-better-ways.svg"
          width={200}
          height={40}
          alt="CMA CGM Logo"
        />
      </div>
      <ul className="nav-menu grid items-center font-extrabold text-center gap-y-4 ml-8 px-2 xl:ml-4">
        <li className="nav-item border-l-2">
          <Link className="px-5 xl:px-8" href="/cma-cgm-group">
            The CMA CGM Group
          </Link>
        </li>

        <li className="nav-item border-l-2">
          <Link className="px-5 xl:px-8" href="/sustainability">
            Sustainability
          </Link>
        </li>

        <li className="nav-item border-l-2">
          <Link className="px-5 xl:px-8" href="/decarbonization">
            Decarbonization
          </Link>
        </li>

        <li className="nav-item border-l-2">
          <Link className="px-5 xl:px-8" href="/innovation">
            Innovation
          </Link>
        </li>

        <li className="nav-item border-l-2">
          <Link className="px-5 xl:px-8" href="/careers">
            Careers
          </Link>
        </li>

        <li className="nav-item border-l-2">
          <Link className="px-5 xl:px-8" href="/news-media">
            News & Media
          </Link>
        </li>

        <li className="nav-item border-l-2">
          <Link className="px-5 xl:px-8" href="/cma-cgm-foundation">
            The CMA CGM Foundation
          </Link>
        </li>
      </ul>
      <div className="navigation-mobile hidden">
        <Image
          className="mx-4"
          src="/Assets/Images/icon-search.svg"
          width={22}
          height={21}
          alt="Search Button"
        />
        <button>
          <Image
            className="mx-4"
            src="/Assets/Images/icon-menu.svg"
            width={22}
            height={21}
            alt="Search Button"
          />
        </button>
      </div>
      
    </div>
  );
};

export default PrimaryNavbar;
