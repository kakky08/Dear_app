import { FC } from "react";
import { PrimaryInputTypes } from "../../../types/components/atoms/input/PrimaryInputTypes";
export const PrimaryInput: FC<PrimaryInputTypes> = (props) => {
    const { name, type, placeholder, width, margin } = props;
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            className={`${width} ${margin} bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2 `}
        />
    );

}
