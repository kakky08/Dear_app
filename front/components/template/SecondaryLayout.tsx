import { FC, useState } from "react";
import { LayoutTypes } from "../../types/components/template/LayoutTypes";
import { PrimaryHeader } from "../molecules/layout/header/PrimaryHeader";
import { ParsonCard } from '../organisms/card/ParsonCard';
import { ParsonSidebar } from '../organisms/sidebar/ParsonSidebar';

export const SecondaryLayout: FC<LayoutTypes> = (props,) => {
    const { children, menu, link } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const dears: { id: number;  name: string; relationship: string; photo: string; }[] = [
        {
            "id": 1,
            "name": "Ahmed Omer",
            "relationship": "母親",
            "photo": "/images/beautiful.jpg"
        },
        {
            "id": 2,
            "name": "Jane Doe",
            "relationship": "友達",
            "photo": "/images/girl.jpg"
        },
        {
            "id": 3,
            "name": "Steve Ben",
            "relationship": "弟",
            "photo": "/images/cap.jpg"
        },
        {
            "id": 4,
            "name": "Patterson Johnson",
            "relationship": "姉",
            "photo": "/images/woman.jpg"
        },


    ]

    const changeState = (isState:boolean) => {
        setIsOpen(isState)
    }

    return (
        <div className="h-screen">
            <PrimaryHeader
                menu={menu}
                link={link}
                changeState={changeState}
                isOpen={isOpen}
            />

            <div className="bg-white h-full">
                <div className="flex text-gray-800 h-full">
                    {/* サイドバー */}
                    <ParsonSidebar
                        isOpen={isOpen}
                    />
                    {/* メインコンテンツ */}
                    <div className="w-full">
                        <section className="bg-white">
                            <div className="container px-6 pb-8 pt-20 mx-auto">
                                <h2 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl mb-16">My dears</h2>
                                <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {dears.map((dear, index) => (
                                        <ParsonCard
                                            key={index}
                                            id={dear.id}
                                            photo={dear.photo}
                                            name={dear.name}
                                            relationship={dear.relationship}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
