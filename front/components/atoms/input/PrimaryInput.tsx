import { FC } from "react";
import { PrimaryInputTypes } from "../../../types/components/atoms/input/PrimaryInputTypes";
export const PrimaryInput: FC<PrimaryInputTypes> = (props) => {
    const { name, type, placeholder, width, margin } = props;
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            className={`${width} ${margin} rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring `}
        />
    );

}
