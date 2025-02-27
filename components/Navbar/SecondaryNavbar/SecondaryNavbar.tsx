import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const SecondaryNavbar = () => {
  return (
    <div className="preheader w-full flex justify-end pl-4 pr-6 lg:pr-10">
      <ul className="flex flex-row items-center">
        <li>
          <Link
            className="pr-4 gap-1.5 flex items-center"
            href="https://www.cmacgm-group.com/en/finance"
          >
            <Image
              src="/Assets/Images/user-icon.svg"
              width={14}
              height={14}
              alt="User Icon"
            />
            Finance
          </Link>
        </li>
        <li>
          <Link
            className="px-4 gap-1.5 flex items-center"
            href="https://www.cmacgm-group.com/en/subsidiaries"
          >
            Subsidiaries
          </Link>
        </li>
        <li>
          <Link
            className="px-4 gap-1.5 flex items-center"
            href="https://www.cmacgm-group.com/en/contact"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            className="px-4 gap-1.5 flex items-center"
            href="https://www.cma-cgm.com/"
          >
            Go to our business website
          </Link>
        </li>
        <li>
          <Link
            className="px-4 gap-1.5 flex items-center"
            href="https://cloud.customer.cmacgm-group.com/news_subscribe"
          >
            Subscribe to our news
          </Link>
        </li>
      </ul>
      <Image
        className="mx-4"
        src="/Assets/Images/icon-search.svg"
        width={12.8}
        height={12.8}
        alt="Search Button"
      />
      <div className="flex flex-row items-center">
        <div className="px-2 pr-1">En</div>
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
  );
};

export default SecondaryNavbar;
