import Link from 'next/link'
import { FC } from 'react';
import { HeaderAuthTypes } from '../../../../types/components/molecules/layout/header/HeaderAuthTypes';
import { Logo } from '../../../atoms/logo/Logo';
export const HeaderAuth: FC<HeaderAuthTypes> = (props) => {
    const { menu, link } = props;
    return (
        <>
            <nav className="bg-red-800 shadow ">
                <div className="mx-auto  px-8 lg:px-16">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex w-full items-center justify-between">
                            <Logo
                                href="/"
                            ></Logo>
                            <div className="md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link href={link}>
                                        <a className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white">
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
