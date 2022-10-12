import { FC, useState } from "react";
import { LayoutTypes } from "../../types/components/template/LayoutTypes";
import { PrimaryHeader } from "../molecules/layout/header/PrimaryHeader";
import { ParsonCard } from '../organisms/card/ParsonCard';
import { HomeSidebar } from '../organisms/sidebar/HomeSidebar';

export const SecondaryLayout: FC<LayoutTypes> = (props) => {
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

            <div className="h-full bg-white">
                <div className="flex h-full text-gray-800">
                    {/* サイドバー */}
                    <HomeSidebar
                        isOpen={isOpen}
                    />
                    {/* メインコンテンツ */}
                    <div className="w-full">
                        <section className="bg-white">
                            <div className="container mx-auto px-6 pb-8 pt-20">
                                <h2 className="mb-16 text-center text-3xl font-semibold capitalize text-gray-800 lg:text-4xl">My dears</h2>
                                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
