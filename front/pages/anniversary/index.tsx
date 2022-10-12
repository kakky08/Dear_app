import { FC, useState } from "react";
import { PrimaryHeader } from "../../components/molecules/layout/header/PrimaryHeader";
import { ParsonSidebar } from "../../components/organisms/sidebar/ParsonSidebar";

const Anniversary: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const changeState = (isState:boolean) => {
        setIsOpen(isState)
    }

    return (
        <>
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
                    <div className="flex flex-col w-full px-8">

                    {/* フォーム - start */}

                    <section className="w-full mt-20 max-w-4xl mx-auto mb-16">
                        <div className="flex items-center py-4">
                            <div className="w-1/3">
                                <h2>
                                    Titel
                                </h2>
                            </div>
                            <div className="w-2/3">
                                <input
                                    type="text"
                                    id="user-info-email"
                                    class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="flex items-center py-8">
                            <div className="w-1/3">
                                <h2>
                                    Anniversary
                                </h2>
                            </div>
                            <div className="w-2/3 flex">

                            <select
                                className="block w-full mr-8 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                name="animals"
                            >
                                        {
                                        (function () {
                                            const list = [];
                                            for (let i = 1; i <= 12; i++) {
                                            list.push(<option value={`${i}月`}>{`${i}月`}</option>);
                                            }
                                            return list;
                                        }())
                                    }
                            </select>
                             <select
                                className="block w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                name="animals"
                            >
                                    {
                                        (function () {
                                            const list = [];
                                            for (let i = 1; i <= 31; i++) {
                                            list.push(<option value={`${i}日`}>{`${i}日`}</option>);
                                            }
                                            return list;
                                        }())
                                    }
                                </select>
                                </div>
                        </div>
<hr/>
                            <div class="w-full py-8 px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                <button type="submit" class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Save
                                </button>
                            </div>

                    </section>
                        {/* フォーム - end */}

                    {/* 一覧 - start */}


                        <section class="mx-auto w-full max-w-6xl items-center justify-center bg-white ">
<h2 className="border-b-2 text-xl px-6 pb-6">記念日一覧</h2>
    <ul class="flex flex-col divide divide-y ">
        <li class="flex flex-row">
            <div class="select-none cursor-pointer flex flex-1 items-center p-6">
                <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium">
                        Jean Marc
                    </div>

                </div>
                <div class="text-gray-600 text-md mr-8">
                    10月2日
                </div>
                <div>
                    <a href="#_" class="inline-flex mr-8 items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                        編集
                    </a>
                </div>
                <div>
                    <a href="#_" class="inline-flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                        削除
                    </a>
                </div>
            </div>
                                </li>
                                <li class="flex flex-row">
            <div class="select-none cursor-pointer flex flex-1 items-center p-6">
                <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium">
                        Jean Marc
                    </div>

                </div>
                <div class="text-gray-600 text-md mr-8">
                    10月2日
                </div>
                <div>
                    <a href="#_" class="inline-flex mr-8 items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                        編集
                    </a>
                </div>
                <div>
                    <a href="#_" class="inline-flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                        削除
                    </a>
                </div>
            </div>
                                </li>
                                <li class="flex flex-row">
            <div class="select-none cursor-pointer flex flex-1 items-center p-6">
                <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium">
                        Jean Marc
                    </div>

                </div>
                <div class="text-gray-600 text-md mr-8">
                    10月2日
                </div>
                <div>
                    <a href="#_" class="inline-flex mr-8 items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                        編集
                    </a>
                </div>
                <div>
                    <a href="#_" class="inline-flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                        削除
                    </a>
                </div>
            </div>
                                </li>
                                <li class="flex flex-row">
            <div class="select-none cursor-pointer flex flex-1 items-center p-6">
                <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium">
                        Jean Marc
                    </div>

                </div>
                <div class="text-gray-600 text-md mr-8">
                    10月2日
                </div>
                <div>
                    <a href="#_" class="inline-flex mr-8 items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                        編集
                    </a>
                </div>
                <div>
                    <a href="#_" class="inline-flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                        削除
                    </a>
                </div>
            </div>
        </li>
    </ul>

                    </section>
                        {/* 一覧 - end */}
                        </div>
                </div>
            </div>
            </>
    )
}

export default Anniversary;
