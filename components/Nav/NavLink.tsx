import Link from 'next/link';
interface NavLinkProps {
  href: string;
  title: string;
  activeClass: string;
}

//Come back tmr
const NavLink: React.FC<NavLinkProps> = ({ href, title, activeClass }) => (
  <li className={`nav-item ${activeClass} p-2 text-center`}>
    <Link href={href}>
      <a className="nav-link waves-effect waves-light">{title}</a>
    </Link>
  </li>
);

export default NavLink;
