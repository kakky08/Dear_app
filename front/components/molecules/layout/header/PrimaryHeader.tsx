import Link from 'next/link'
import { FC } from 'react';
import { PrimaryHeaderTypes } from '../../../../types/components/molecules/layout/header/PrimaryHeaderTypes';
import { Logo } from '../../../atoms/logo/Logo';

export const PrimaryHeader: FC<PrimaryHeaderTypes> = (props) => {
    // const isOpen = false;
    const { menu, link, changeState, isOpen } = props;
    const listMenus: { name: string; link: string; icon: string; }[] = [
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
        <>
            <nav className="bg-red-800 g-white shadow ">
                <div className="mx-auto  px-8 lg:px-16">
                    <div className="flex items-center justify-between h-16">

                        <div className="w-full justify-between flex items-center">
                            {/* ハンバーガーメニュー */}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => changeState(!isOpen)}
                                    className={`${isOpen ? 'items-end justify-end': 'items-center justify-center'} block sm:hidden shadow-sm flex w-full px-4 py-2`}
                                    id="options-menu"
                                >
                                    {(isOpen) && (
                                        <svg className="w-8 h-8 over:bg-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    )}
                                    {(isOpen) || (

                                    <svg width="24" height="24" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                        </path>
                                    </svg>
                                    )}

                                </button>
                            </div>

                            <Logo
                                href="/"
                            ></Logo>
                            <div className="md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link href={link}>
                                        <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            { menu }
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
