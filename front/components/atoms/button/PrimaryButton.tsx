import { FC } from "react";
import { PrimaryButtonTypes } from "../../../types/components/atoms/button/PrimaryButtonTypes";

export const PrimaryButton: FC<PrimaryButtonTypes> = (props) => {
    const { children, background, color, width, margin } = props;
    return (
        <button
            className={`block rounded-lg px-8 py-3 text-center text-sm font-semibold  outline-none ring-gray-300 transition duration-100 focus-visible:ring md:text-base ${color} ${background} ${width} ${margin}`}
        >
            {children}
        </button >
    );


}
