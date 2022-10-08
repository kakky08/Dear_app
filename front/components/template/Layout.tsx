import { FC } from "react";
import { LayoutTypes } from "../../types/components/template/LayoutTypes";
import { HeaderAuth } from "../molecules/layout/header/HeaderAuth";

export const Layout: FC<LayoutTypes> = (props) => {
    const { children } = props;
    return (
        <div className="h-screen">
            <HeaderAuth
                menu="Register"
                link="/Register"

            />
            <div className="bg-white py-20">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
