import Image from 'next/image';
import Link from 'next/link'
import { FC } from 'react';
import { HeaderAuthTypes } from '../../../../types/components/molecules/layout/header/HeaderAuthTypes';
export const HeaderAuth: FC<HeaderAuthTypes> = (props) => {
    const { menu, link } = props;
    return (
        <>
            <nav className="bg-red-800 g-white shadow ">
                <div className="mx-auto  px-8 lg:px-16">
                    <div className="flex items-center justify-between h-16">
                        <div className="w-full justify-between flex items-center">
                            <Link href="/">
                                <a className="flex-shrink-0">
                                    <Image src="/images/logo.png" width="100px" height="20px" alt="DearアプリのLogo画像" />
                                </a>
                            </Link>
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
