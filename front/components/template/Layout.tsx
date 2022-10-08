import { FC } from "react";
import { LayoutTypes } from "../../types/components/template/LayoutTypes";
import { HeaderAuth } from "../molecules/layout/header/HeaderAuth";

export const Layout: FC<LayoutTypes> = (props) => {
    const { children, menu, link } = props;
    return (
        <div className="h-screen">
            <HeaderAuth
                menu={menu}
                link={link}
            />
            <div className="bg-white py-20 h-[calc(100%_-_48px)]">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto h-100%">
                    {children}
                </div>
            </div>
        </div>
    );
}
