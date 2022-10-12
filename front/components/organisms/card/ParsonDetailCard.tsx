import Image from 'next/image';

import { FC } from "react";

export const ParsonDetailCard: FC = () => {
    return (
        <>
            {/* カード - start */}
            <section className="mb-8 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6 py-10">
                    <div className="text-center lg:-mx-6 lg:flex lg:items-center lg:justify-around lg:text-justify">
                        <Image className="h-96 w-full rounded-lg object-cover object-center lg:mx-6 lg:h-[36rem] lg:w-1/2"  width="250px sm:300px" height="250px sm:300px" src="/images/cap.jpg" alt="">
                    </Image>
                        <div className="mt-8 lg:mt-0 lg:w-1/2 lg:px-6">
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-96 xl:text-4xl ">
                                Name
                            </h2>
                            <p className="mx-auto mt-2 max-w-lg text-gray-500 dark:text-gray-400 lg:mx-0">弟・(男性)</p>

                            <p className="mx-auto mt-6 max-w-lg text-gray-500 dark:text-gray-400 lg:mx-0">
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
