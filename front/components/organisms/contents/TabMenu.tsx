import Image from 'next/image';

import { FC } from "react";
import { TabMenuTypes } from "../../../types/components/organisms/contents/TabMenuTypes";

export const TabMenu: FC<TabMenuTypes>= (props) => {
    const { changeContent, isGift, isFAQ, isAnniversary } = props;

    return (
        <>
            {/* ボタン - start */}
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="grid grid-cols-3 gap-4 md:gap-6 xl:gap-8">
                {/* GiftButton - start */}
                                <button
                                    type="button"
                                    onClick={() => changeContent(true, false, false)}
                                    className="group relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-red-500 px-6 py-3 font-medium transition-all">
                        <span className="absolute top-0 right-0 inline-block h-4 w-4 rounded bg-red-700 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 h-5 w-5 translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-2xl bg-red-600 transition-all delay-200 duration-500 ease-in-out group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">Gift</span>
                    </button>
                    {/* GiftButton - end */}

                    {/* FAQButton - start */}
                                <button
                                    type="button"
                                    onClick={() => changeContent(false, true, false)}
                                    className="group relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-red-500 px-6 py-3 font-medium transition-all">
                        <span className="absolute top-0 right-0 inline-block h-4 w-4 rounded bg-red-700 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 h-5 w-5 translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-2xl bg-red-600 transition-all delay-200 duration-500 ease-in-out group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">FAQ</span>
                    </button>
                    {/* FAQButton - end */}

                    {/* AnniversaryButton - start */}
                                <button
                                    type="button"
                                    onClick={() => changeContent(false, false, true)}
                                    className="group relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-red-500 px-6 py-3 font-medium transition-all">
                        <span className="absolute top-0 right-0 inline-block h-4 w-4 rounded bg-red-700 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 h-5 w-5 translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-2xl bg-red-600 transition-all delay-200 duration-500 ease-in-out group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">Anniversary</span>
                    </button>
                    {/* AnniversaryButton - end */}
                </div>
                        </div>
                        {/* ボタン - end */}

                        {/* Gift - start */}
                        {isGift && (
                            <section className="bg-white">
                                <div className="container mx-auto px-6 py-10">
                                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:mt-8">
                                        {/* gift - start */}
                                        <div className="group flex cursor-pointer justify-center rounded-xl border px-12 py-8 transition-colors duration-300 hover:border-transparent hover:bg-red-200 dark:border-gray-700 dark:hover:border-transparent sm:justify-start">
                                            <div className="flex flex-col items-center gap-8 sm:-mx-4 sm:flex-row">
                                                <Image className="shrink-0 rounded-full object-cover sm:mx-4"  width="100px" height="100px" src="/images/cap.jpg" alt="">
                                                </Image>
                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h2 className="text-xl font-semibold capitalize text-gray-700 group-hover:text-white md:text-2xl">arthur melo</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* gift - end */}

                                        {/* gift - start */}
                                        <div className="group flex cursor-pointer justify-center rounded-xl border px-12 py-8 transition-colors duration-300 hover:border-transparent hover:bg-red-200 dark:border-gray-700 dark:hover:border-transparent sm:justify-start">
                                            <div className="flex flex-col items-center gap-8 sm:-mx-4 sm:flex-row">
                                                <Image className="shrink-0 rounded-full object-cover sm:mx-4"  width="100px" height="100px" src="/images/girl.jpg" alt="">
                                                </Image>
                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h2 className="text-xl font-semibold capitalize text-gray-700 group-hover:text-white md:text-2xl">Amelia. Anderson</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* gift - end */}

                                        {/* gift - start */}

                                        <div className="group flex cursor-pointer justify-center rounded-xl border px-12 py-8 transition-colors duration-300 hover:border-transparent hover:bg-red-200 dark:border-gray-700 dark:hover:border-transparent sm:justify-start">
                                            <div className="flex flex-col items-center gap-8 sm:-mx-4 sm:flex-row">
                                                <Image className="shrink-0 rounded-full object-cover sm:mx-4"  width="100px" height="100px" src="/images/beautiful.jpg" alt="">
                                                </Image>
                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h2 className="text-xl font-semibold capitalize text-gray-700 group-hover:text-white md:text-2xl">Olivia Wathan</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* gift - end */}

                                        {/* gift - start */}
                                        <div className="group flex cursor-pointer justify-center rounded-xl border px-12 py-8 transition-colors duration-300 hover:border-transparent hover:bg-red-200 dark:border-gray-700 dark:hover:border-transparent sm:justify-start">
                                            <div className="flex flex-col items-center gap-8 sm:-mx-4 sm:flex-row">
                                                <Image className="shrink-0 rounded-full object-cover sm:mx-4"  width="100px"  height="100px" src="/images/woman.jpg" alt="">
                                                </Image>
                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h2 className="text-xl font-semibold capitalize text-gray-700 group-hover:text-white md:text-2xl">John Doe</h2>
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
                                <div className="mx-auto max-w-screen-xl px-4 md:px-8">

                                    <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
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

                                        <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                                    </div>
                                    {/* question - end */}

                                    {/* question - start */}
                                    <div className="rounded-lg bg-gray-100 p-5">
                                        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                        <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">What are the features?</h3>

                                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        </div>

                                        <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                                    </div>
                                    {/* question - end */}

                                    {/* question - start */}
                                    <div className="rounded-lg bg-gray-100 p-5">
                                        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                        <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">What about integrations?</h3>

                                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        </div>

                                        <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                                    </div>
                                    {/* question - end */}

                                    {/* question - start */}
                                    <div className="rounded-lg bg-gray-100 p-5">
                                        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                        <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">Is support available?</h3>

                                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
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
                                <div className="mx-auto max-w-screen-xl px-4 md:px-8">

                                    <div className="grid gap-4 md:gap-8">
                                    {/* Anniversary - start */}
                                    <div className="rounded-lg bg-gray-100 p-5">
                                        <div className="flex items-center justify-between gap-4">
                                        <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">How does the product work?</h3>
                                        <div className='flex items-center justify-between gap-4'>
                                            <p className="text-gray-500">9/8</p>
                                            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                                </svg>
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    {/* Anniversary - end */}

                                    {/* Anniversary - start */}
                                    <div className="rounded-lg bg-gray-100 p-5">
                                        <div className="flex items-center justify-between gap-4">
                                            <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">What are the features?</h3>
                                            <div className='flex items-center justify-between gap-4'>
                                                <p className="text-gray-500">8/8</p>
                                                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>


                                    </div>
                                    {/* Anniversary - end */}

                                    {/* Anniversary - start */}
                                    <div className="rounded-lg bg-gray-100 p-5">
                                        <div className="flex items-center justify-between gap-4">
                                            <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">What about integrations?</h3>
                                            <div className='flex items-center justify-between gap-4'>
                                                <p className="text-gray-500">6/25</p>
                                                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Anniversary - end */}

                                        {/* Anniversary - start */}
                                    <div className="rounded-lg bg-gray-100 p-5">
                                        <div className="flex items-center justify-between gap-4">
                                            <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">Is support available?</h3>

                                            <div className='flex items-center justify-between gap-4'>
                                                <p className="text-gray-500">12/25</p>
                                                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
