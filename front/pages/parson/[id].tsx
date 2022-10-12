import { useState } from "react";
import { useRouter } from 'next/router';
import { PrimaryHeader } from '../../components/molecules/layout/header/PrimaryHeader';
import { ParsonSidebar } from '../../components/organisms/sidebar/ParsonSidebar';
import { TabMenu } from '../../components/organisms/contents/TabMenu';
import { ParsonDetailCard } from "../../components/organisms/card/ParsonDetailCard";

const ParsonDetail = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isGift, setIsGift] = useState<boolean>(true);
    const [isFAQ, setIsFAQ] = useState<boolean>(false);
    const [isAnniversary, setIsAnniversary] = useState<boolean>(false);


const changeState = (isState:boolean) => {
        setIsOpen(isState)
}
    const changeContent = (isGiftState: boolean, isFAQState: boolean, isAnniversaryState: boolean) => {
        setIsGift(isGiftState);
        setIsFAQ(isFAQState);
        setIsAnniversary(isAnniversaryState);
}
    return (
        <div className="h-screen">
            {/* ヘッダー - start*/}
            <PrimaryHeader
                menu='Log out'
                link='/Login'
                changeState={changeState}
                isOpen={isOpen}
            />
            {/* ヘッダー - end*/}

            {/* コンテンツ - start*/}
            <div className="h-full bg-white">
                <div className="flex h-full text-gray-800">
                    {/* サイドバー - start*/}
                    <ParsonSidebar
                        isOpen={isOpen}
                    />
                    {/* サイドバー - end*/}

                    {/* メインコンテンツ - start*/}
                    <div className="w-full">

                        {/* 人物詳細情報 - start*/}
                        <ParsonDetailCard />
                        {/* 人物詳細情報 - start*/}

                        {/* タブメニュー - start*/}
                        <TabMenu
                            changeContent={changeContent}
                            isGift={isGift}
                            isFAQ={isFAQ}
                            isAnniversary={isAnniversary}
                        />
                        {/* タブメニュー - start*/}

                    </div>
                    {/* メインコンテンツ - end*/}
                </div>
            </div>
            {/* コンテンツ - end*/}
        </div>

    );
}

export default ParsonDetail;
