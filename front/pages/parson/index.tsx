import { RepeatRounded } from "@material-ui/icons"
import Image from "next/image"
import Link from "next/link"
import { FC, useState } from "react"
import { PrimaryHeader } from "../../components/molecules/layout/header/PrimaryHeader"
import { ParsonSidebar } from "../../components/organisms/sidebar/ParsonSidebar"

const Parson: FC = () => {

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
            <section class="h-screen bg-opacity-50 w-full mt-10">
                <form class="container max-w-2xl mx-auto shadow-md md:w-3/4">
                    <div class="p-4 border-t-2 border-red-700 rounded-lg bg-opacity-5">
                        <div class="text-center md:w-full">
                            <div class="flex flex-col justify-center items-center space-y-8">
                                <Image alt="profil" width="80px" height="80px" src="/images/cap.jpg" class="mx-auto object-cover rounded-full h-16 w-16"/>
                                <input type="file" />
                            </div>
                        </div>
                    </div>
                    <div class="space-y-6 bg-white">
                        {/* 名前 */}
                        <div class="items-center w-full p-4 space-y-4  mt-4 text-gray-500 md:inline-flex md:space-y-0">
                            <h2 class="max-w-sm mx-auto md:w-1/3">
                                Name
                            </h2>
                        <div class="max-w-sm mx-auto md:w-2/3">
                            <div class=" relative ">
                                <input type="text" id="user-info-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                                </div>
                            </div>
                        </div>
                        <hr />
                        {/* 性別 */}
                        <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                            <h2 class="max-w-sm mx-auto md:w-1/3">
                                Gender
                            </h2>
                            <div class="max-w-sm mx-auto md:w-2/3">
                                <div class=" relative ">
                                    <select class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                                        <option value="">
                                            --------------
                                        </option>
                                        <option value="dog">
                                            男性
                                        </option>
                                        <option value="cat">
                                            女性
                                        </option>
                                        <option value="hamster">
                                            その他
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr />
                        {/* 属柄 */}
                        <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                            <h2 class="max-w-sm mx-auto md:w-1/3">
                                Relationship
                            </h2>
                            <div class="max-w-sm mx-auto md:w-2/3">
                                <div class=" relative ">
                                    <input type="text" id="user-info-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="関係性"/>
                                </div>
                            </div>
                        </div>
                        <hr />
                        {/* 誕生日 */}
                        <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                            <h2 class="max-w-sm mx-auto md:w-1/3">
                                birthday
                            </h2>
                            <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                                <div>
                                    <div class=" relative ">
                                        <select class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                                            <option value="">
                                                --------------
                                            </option>
                                            <option value="dog">
                                                2000年
                                            </option>
                                            <option value="cat">
                                                2001年
                                            </option>
                                            <option value="hamster">
                                                2002年
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div class=" relative ">
                                        <select class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                                            <option value="">
                                                --------------
                                            </option>
                                            <option value="dog">
                                                1月
                                            </option>
                                            <option value="cat">
                                                2月
                                            </option>
                                            <option value="hamster">
                                                3月
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div class=" relative ">
                                        <select class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                                            <option value="">
                                                --------------
                                            </option>
                                            <option value="dog">
                                                20日
                                            </option>
                                            <option value="cat">
                                                21日
                                            </option>
                                            <option value="hamster">
                                                22日
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                            <button type="submit" class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Register
                            </button>
                        </div>
                    </div>
                </form>
                    </section>
                    </div>
            </div>
            </>
    )
}
export default Parson;
