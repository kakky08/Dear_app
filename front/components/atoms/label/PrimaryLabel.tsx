import { FC } from "react";
import { PrimaryLabelTypes } from "../../../types/components/atoms/label/PrimaryLabelTypes";

export const PrimaryLabel: FC<PrimaryLabelTypes> = (props) => {
    const { children , htmlFor} = props;
    return (
        <label
            htmlFor={ htmlFor }
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
        >
            { children }
        </label>

    );
}
