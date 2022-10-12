import { FC } from "react";
import { PrimaryLabelTypes } from "../../../types/components/atoms/label/PrimaryLabelTypes";

export const PrimaryLabel: FC<PrimaryLabelTypes> = (props) => {
    const { children , htmlFor} = props;
    return (
        <label
            htmlFor={ htmlFor }
            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
        >
            { children }
        </label>

    );
}
