import Image from "next/image";
import { FC, useState } from "react";
import { PrimaryHeader } from "../../components/molecules/layout/header/PrimaryHeader";
import { ParsonSidebar } from "../../components/organisms/sidebar/ParsonSidebar";

const Gift: FC = () => {

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

                    <section className="w-full mt-20 max-w-4xl mx-auto mb-16 shadow-md p-8 rounded-lg  border-t-2 border-red-700">
                            <div class="flex flex-col justify-center items-center py-10 space-y-8">
                                <Image alt="profil" width="80px" height="80px" src="/images/cap.jpg" class="mx-auto object-cover rounded-full h-16 w-16"/>
                                <input type="file" />
                            </div>
                            <hr />
                            {/* ギフトの名前 - start */}
                        <div className="flex items-center py-10">
                            <div className="w-1/3">
                                <h2>
                                    name
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
                             {/* ギフトの名前 - end */}
                            <hr />
                             {/* あげた人 - start */}
                            <div className="flex items-center py-10">
                            <div className="w-1/3">
                                <h2>
                                    Parson
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
                                </div>
                            </div>
                            {/* あげた人 - end */}
                            <hr />
                            {/* 日にち - start */}
                        <div className="flex items-center py-10">
                            <div className="w-1/3">
                                <h2>
                                    Date
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
                                            for (let i = 2010; i <= 2022; i++) {
                                            list.push(<option value={`${i}年`}>{`${i}年`}</option>);
                                            }
                                            return list;
                                        }())
                                    }
                            </select>
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
                            {/* 日にち - end */}
                            <hr />
                            {/* 記念日 - start */}
                             <div className="flex items-center py-10">
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
                                </div>
                            </div>
                            {/* 記念日 - end */}
                            <hr />
                            {/* 金額 - start */}
                        <div className="flex items-center py-10">
                            <div className="w-1/3">
                                <h2>
                                    Money
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
                             {/* 金額 - end */}
                            <hr />
                             {/* コメント - start */}
                            <div class="flex items-center py-10">
                                <div className="w-1/3">
                                <h2>
                                    Comment
                                </h2>
                            </div>
                            <div className="w-2/3">
                                <label class="text-gray-700" for="name">
                            <textarea class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                            </textarea>
                        </label>
                            </div>

                            </div>
                             {/* コメント - end */}
                            <hr />
                            <div class="w-full py-8 px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                <button type="submit" class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Save
                                </button>
                            </div>

                    </section>
                        {/* フォーム - end */}


                        </div>
                </div>
            </div>
            </>
    )
}

export default Gift;
