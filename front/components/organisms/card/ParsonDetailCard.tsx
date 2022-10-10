import Image from 'next/image';

import { FC } from "react";

export const ParsonDetailCard: FC = () => {
    return (
        <>
            {/* カード - start */}
            <section className="bg-white dark:bg-gray-900 mb-8">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:-mx-6 lg:flex lg:items-center text-center lg:text-justify lg:justify-around">
                        <Image className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"  width="250px sm:300px" height="250px sm:300px" src="/images/cap.jpg" alt="">
                    </Image>
                        <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white xl:text-4xl lg:w-96 ">
                                Name
                            </h2>
                            <p className="max-w-lg mt-2 mx-auto lg:mx-0 text-gray-500 dark:text-gray-400">弟・(男性)</p>

                            <p className="max-w-lg mt-6 mx-auto lg:mx-0 text-gray-500 dark:text-gray-400">
                                2001/10/21
                            </p>
                        </div>
                    </div>
                </div>
            </section>
                         {/* カード - end */}
        </>
    );
}
