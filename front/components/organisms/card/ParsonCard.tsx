import Image from 'next/image';
import Link from "next/link";
import { FC } from 'react';
import { ParsonCardTypes } from '../../../types/components/organisms/card/ParsonCardTypes';

export const ParsonCard: FC<ParsonCardTypes> = (props) => {
    const { key, id, name, photo, relationship } = props;
    return (
            <div className="w-full max-w-xs text-center mx-auto" key={key}>
                <Link href={`/parson/${id}`}>
                    <a className=''>
                        <Image className="object-cover object-center w-full h-48 mx-auto rounded-lg" width="240px" height="144px" src={photo} alt={`${name}の画像`} />
                    </a>
                </Link>
                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{ name }</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">{ relationship }</span>
                </div>
            </div>
    );
}
