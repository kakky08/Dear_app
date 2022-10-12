import { FC, useState } from "react";
import { PrimaryHeader } from "../../components/molecules/layout/header/PrimaryHeader";
import { ParsonSidebar } from "../../components/organisms/sidebar/ParsonSidebar";

const FAQ: FC = () => {

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
                                    Question
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
                                    Answer
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

<hr/>
                            <div class="w-full py-8 px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                <button type="submit" class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Save
                                </button>
                            </div>

                    </section>
                        {/* フォーム - end */}

                    {/* 一覧 - start */}
{/*  */}
                        {/* FAQ - start */}

                        <section className="mx-auto w-full max-w-6xl items-center justify-center bg-white">
                            <h2 className="border-b text-xl px-6 pb-6 mb-6">FAQ</h2>

                                <div className="mx-auto max-w-screen-xl px-4 md:px-8">

                                    <div className="grid gap-4 grid-cols-1 md:gap-8">
                                    {/* question - start */}
                                    <div className="rounded-lg bg-gray-100 p-5">
                                        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                        <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">How does the product work?</h3>

                                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        </div>


                                        <p className="text-gray-500 pb-4">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>

                                        <div class="w-full py-8 px-4 pb-4 ml-auto text-gray-500 md:w-1/3 flex">
                                            <button type="submit" class="py-2 px-4 mr-8 bg-green-100 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-400 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                編集
                                                        </button>
                                                        <button type="submit" class="py-2 px-4  bg-red-100 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-400 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                削除
                                            </button>
                                        </div>
                                    </div>
                                    {/* question - end */}

                                    {/* question - start */}
                                    <div className="rounded-lg bg-gray-100 p-5">
                                        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                        <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">How does the product work?</h3>

                                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        </div>

                                        <p className="text-gray-500 pb-4">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>

                                        <div class="w-full py-8 px-4 pb-4 ml-auto text-gray-500 md:w-1/3 flex">
                                            <button type="submit" class="py-2 px-4 mr-8 bg-green-100 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-400 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                編集
                                                        </button>
                                                        <button type="submit" class="py-2 px-4  bg-red-100 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-400 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                削除
                                            </button>
                                        </div>
                                    </div>
                                    {/* question - end */}

                                    {/* question - start */}
                                    <div className="rounded-lg bg-gray-100 p-5">
                                        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                        <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">How does the product work?</h3>

                                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        </div>

                                        <p className="text-gray-500 pb-4">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>

                                        <div class="w-full py-8 px-4 pb-4 ml-auto text-gray-500 md:w-1/3 flex">
                                            <button type="submit" class="py-2 px-4 mr-8 bg-green-100 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-400 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                編集
                                                        </button>
                                                        <button type="submit" class="py-2 px-4  bg-red-100 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-400 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                削除
                                            </button>
                                        </div>
                                    </div>
                                    {/* question - end */}

                                    {/* question - start */}
                                    <div className="rounded-lg bg-gray-100 p-5">
                                        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                        <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">How does the product work?</h3>

                                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        </div>

                                        <p className="text-gray-500 pb-4">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>

                                        <div class="w-full py-8 px-4 pb-4 ml-auto text-gray-500 md:w-1/3 flex">
                                            <button type="submit" class="py-2 px-4 mr-8 bg-green-100 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-400 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                編集
                                                        </button>
                                                        <button type="submit" class="py-2 px-4  bg-red-100 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-400 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                削除
                                            </button>
                                        </div>
                                    </div>
                                    {/* question - end */}
                                    </div>
                                </div>
                                </section>
                        {/* FAQ - end */}
                        {/*  */}
                        {/* 一覧 - end */}

                        </div>
                </div>
            </div>
            </>
    )
}

export default FAQ;
