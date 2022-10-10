import Image from 'next/image';

import { FC } from "react";
import { TabMenuTypes } from "../../../types/components/organisms/contents/TabMenuTypes";

export const TabMenu: FC<TabMenuTypes>= (props) => {
    const { changeContent, isGift, isFAQ, isAnniversary } = props;

    return (
        <>
            {/* ボタン - start */}
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="grid grid-cols-3 gap-4 md:gap-6 xl:gap-8">
                {/* GiftButton - start */}
                                <button
                                    type="button"
                                    onClick={() => changeContent(true, false, false)}
                                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">Gift</span>
                    </button>
                    {/* GiftButton - end */}

                    {/* FAQButton - start */}
                                <button
                                    type="button"
                                    onClick={() => changeContent(false, true, false)}
                                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">FAQ</span>
                    </button>
                    {/* FAQButton - end */}

                    {/* AnniversaryButton - start */}
                                <button
                                    type="button"
                                    onClick={() => changeContent(false, false, true)}
                                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">Anniversary</span>
                    </button>
                    {/* AnniversaryButton - end */}
                </div>
                        </div>
                        {/* ボタン - end */}

                        {/* Gift - start */}
                        {isGift && (
                            <section className="bg-white">
                                <div className="container px-6 py-10 mx-auto">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 xl:mt-8">
                                        {/* gift - start */}
                                        <div className="flex justify-center sm:justify-start px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-red-200 dark:border-gray-700 dark:hover:border-transparent">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row items-center gap-8">
                                                <Image className="flex-shrink-0 object-cover rounded-full sm:mx-4"  width="100px" height="100px" src="/images/cap.jpg" alt="">
                                                </Image>
                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h2 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl group-hover:text-white">arthur melo</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* gift - end */}

                                        {/* gift - start */}
                                        <div className="flex justify-center sm:justify-start px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-red-200 dark:border-gray-700 dark:hover:border-transparent">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row items-center gap-8">
                                                <Image className="flex-shrink-0 object-cover rounded-full sm:mx-4"  width="100px" height="100px" src="/images/girl.jpg" alt="">
                                                </Image>
                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h2 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl group-hover:text-white">Amelia. Anderson</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* gift - end */}

                                        {/* gift - start */}

                                        <div className="flex justify-center sm:justify-start px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-red-200 dark:border-gray-700 dark:hover:border-transparent">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row items-center gap-8">
                                                <Image className="flex-shrink-0 object-cover rounded-full sm:mx-4"  width="100px" height="100px" src="/images/beautiful.jpg" alt="">
                                                </Image>
                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h2 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl group-hover:text-white">Olivia Wathan</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* gift - end */}

                                        {/* gift - start */}
                                        <div className="flex justify-center sm:justify-start px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-red-200 dark:border-gray-700 dark:hover:border-transparent">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row items-center gap-8">
                                                <Image className="flex-shrink-0 object-cover rounded-full sm:mx-4"  width="100px"  height="100px" src="/images/woman.jpg" alt="">
                                                </Image>
                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h2 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl group-hover:text-white">John Doe</h2>
                                                </div>
                                            </div>
                                        </div>
                                      {/* gift - start */}
                                    </div>
                                </div>
                            </section>
                        )}
                        {/* Gift - end */}
                        {/* FAQ - start */}
                        {isFAQ && (
                            <section className="bg-white py-6 sm:py-8 lg:py-12">
                                <div className="max-w-screen-xl px-4 md:px-8 mx-auto">

                                    <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                                    {/* question - start */}
                                    <div className="bg-gray-100 rounded-lg p-5">
                                        <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                                        <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">How does the product work?</h3>

                                        <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        </div>

                                        <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                                    </div>
                                    {/* question - end */}

                                    {/* question - start */}
                                    <div className="bg-gray-100 rounded-lg p-5">
                                        <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                                        <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">What are the features?</h3>

                                        <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        </div>

                                        <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                                    </div>
                                    {/* question - end */}

                                    {/* question - start */}
                                    <div className="bg-gray-100 rounded-lg p-5">
                                        <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                                        <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">What about integrations?</h3>

                                        <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        </div>

                                        <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                                    </div>
                                    {/* question - end */}

                                    {/* question - start */}
                                    <div className="bg-gray-100 rounded-lg p-5">
                                        <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                                        <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">Is support available?</h3>

                                        <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        </div>

                                        <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                                    </div>
                                    {/* question - end */}
                                    </div>
                                </div>
                                </section>
                        )}
                        {/* FAQ - end */}

                        {/* Anniversary - start */}
                        {isAnniversary && (
                            <section className="bg-white py-6 sm:py-8 lg:py-12">
                                <div className="max-w-screen-xl px-4 md:px-8 mx-auto">

                                    <div className="grid gap-4 md:gap-8">
                                    {/* Anniversary - start */}
                                    <div className="bg-gray-100 rounded-lg p-5">
                                        <div className="flex justify-between items-center gap-4">
                                        <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">How does the product work?</h3>
                                        <div className='flex justify-between items-center gap-4'>
                                            <p className="text-gray-500">9/8</p>
                                            <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                                </svg>
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    {/* Anniversary - end */}

                                    {/* Anniversary - start */}
                                    <div className="bg-gray-100 rounded-lg p-5">
                                        <div className="flex justify-between items-center gap-4">
                                            <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">What are the features?</h3>
                                            <div className='flex justify-between items-center gap-4'>
                                                <p className="text-gray-500">8/8</p>
                                                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>


                                    </div>
                                    {/* Anniversary - end */}

                                    {/* Anniversary - start */}
                                    <div className="bg-gray-100 rounded-lg p-5">
                                        <div className="flex justify-between items-center gap-4">
                                            <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">What about integrations?</h3>
                                            <div className='flex justify-between items-center gap-4'>
                                                <p className="text-gray-500">6/25</p>
                                                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Anniversary - end */}

                                        {/* Anniversary - start */}
                                    <div className="bg-gray-100 rounded-lg p-5">
                                        <div className="flex justify-between items-center gap-4">
                                            <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">Is support available?</h3>

                                            <div className='flex justify-between items-center gap-4'>
                                                <p className="text-gray-500">12/25</p>
                                                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Anniversary - end */}
                                    </div>
                                </div>
                                </section>
                        )}
                        {/* Anniversary - end */}
        </>
    )
}
