import Link from "next/link";
import { FC } from "react";
import { ParsonSidebarTypes } from "../../../types/components/organisms/sidebar/ParsonSidebarTypes";

export const HomeSidebar: FC<ParsonSidebarTypes>= (props) => {
    const { isOpen } = props;

    const menus: { name: string; link: string; icon: string; }[] = [
        {
            "name": "人物登録",
            "link": "/parson",
            "icon": "M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
        },
        {

            "name": "マイページ",
            "link": "/mypage",
            "icon": "M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
        }
    ]


    return (
        <div className={`${isOpen ? "block h-full sm:block" : 'hidden sm:block'} min-h-screen w-80 flex-col border-r bg-white px-4 py-8 dark:border-gray-700 dark:bg-gray-900`}>
            <div className="relative mt-6">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>

                <input type="text" className="w-full rounded-md  bg-white py-2 pl-10 pr-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" placeholder="Search" />
            </div>

            <div className="mt-6 flex flex-1 flex-col justify-between">
                <nav>
                    {menus.map((menu, index) => (
                        <Link key={index} href={menu.link}>
                            <a className="mt-5 flex items-center rounded-md px-4 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={menu.icon} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="mx-4 font-medium">{ menu.name }</span>
                            </a>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}
