import { FC } from "react";
import { PrimaryButtonTypes } from "../../../types/components/atoms/button/PrimaryButtonTypes";

export const PrimaryButton: FC<PrimaryButtonTypes> = (props) => {
    const { children, background, color, width, margin } = props;
    return (
        <button
            className={`block focus-visible:ring ring-gray-300 text-center text-sm md:text-base font-semibold  rounded-lg outline-none transition duration-100 px-8 py-3 ${color} ${background} ${width} ${margin}`}
        >
            {children}
        </button >
    );


}
