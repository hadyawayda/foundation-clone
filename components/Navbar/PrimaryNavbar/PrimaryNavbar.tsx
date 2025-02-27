import Image from "next/image";
import Link from "next/link";

const PrimaryNavbar = () => {
  return (
    <div className="navbar flex items-center justify-between w-full px-6 py-2 h-20">
      <div className="flex items-center pr-6">
        <Image
          src="/Assets/Images/logo-better-ways.svg"
          width={150}
          height={40}
          alt="CMA CGM Logo"
        />
      </div>

      <ul className="grid grid-cols-4 xl:flex items-center font-extrabold text-sm text-center gap-x-3 gap-y-2 xl:gap-x-6">
        <li className="nav-item pl-6 border-l-2 xl:justify-self-start">
          <Link href="/cma-cgm-group">The CMA CGM Group</Link>
        </li>

        <li className="nav-item pl-6 border-l-2 xl:justify-self-start">
          <Link href="/sustainability">Sustainability</Link>
        </li>

        <li className="nav-item pl-6 border-l-2 xl:justify-self-start">
          <Link href="/decarbonization">Decarbonization</Link>
        </li>

        <li className="nav-item pl-6 border-l-2 xl:justify-self-start">
          <Link href="/innovation">Innovation</Link>
        </li>

        <li className="nav-item pl-6 border-l-2 xl:justify-self-start">
          <Link href="/careers">Careers</Link>
        </li>

        <li className="nav-item pl-6 border-l-2 xl:justify-self-start">
          <Link href="/news-media">News & Media</Link>
        </li>

        <li className="nav-item pl-6 border-l-2 xl:justify-self-start">
          <Link href="/cma-cgm-foundation">The CMA CGM Foundation</Link>
        </li>
      </ul>
    </div>
  );
};

export default PrimaryNavbar;
