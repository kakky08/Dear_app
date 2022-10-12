import Image from 'next/image';
import Link from "next/link";
import { FC } from "react";
import { LogoTypes } from "../../../types/components/atoms/logo/LogoTypes";

export const Logo: FC<LogoTypes> = (props) => {
    const { href } = props;
    return (
        <Link href={href}>
            <a className="shrink-0">
                <Image src="/images/logo.png" width="100px" height="20px" alt="DearアプリのLogo画像" />
            </a>
        </Link>
    );

}
