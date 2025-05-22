import Link from 'next/link';
import { FaFileInvoice, FaHome, FaUsers } from 'react-icons/fa';

const links = [

    {
        name: "DashBoard",
        href: "/dashboard",
        icon: FaHome
    },
    {
        name: "Invoices",
        href: "/dashboard/invoices",
        icon: FaFileInvoice
    },
    {
        name: "Customers",
        href: "/dashboard/customers",
        icon: FaUsers
    }
]

const NavLinks = () => {
    return (
        <>
            {links.map(link => {
                const LinIcon = link.icon

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="
                        flex h-[48px] grow items-center justify-center gap-2
                        rounded-md bg-slate-500 p-3 text-lg text-white
                        font-bold
                        hover:bg-slate-400 hover:text-white
                        md:flex-none md:justify-start md:p-2 md:px-3
            "
                    >
                        <LinIcon className='w-6' />
                        <p className='hidden md:block'>{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
};

export default NavLinks;