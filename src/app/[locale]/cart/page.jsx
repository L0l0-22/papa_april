'use client';

import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';
import Image from 'next/image';
import CartForm from '@/Auth/CartForm';
import { useLocale } from 'next-intl';

export default function Page() {
    const locale = useLocale();
    const pizzaData = [
        {
            id: 1,
            title: "Star Pizza - Star Pizza Combo",
            category: "Pizza",
            name: "Garden Special",
            crust: "Star Crust",
            sauce: "Special Garlic Sauce",
            quantity: 1,
        },
        {
            id: 2,
            title: "Star Pizza - Star Pizza Combo",
            category: "Pizza",
            name: "Garden Special",
            crust: "Star Crust",
            sauce: "Special Garlic Sauce",
            quantity: 1,
        },
        {
            id: 3,
            title: "Star Pizza - Star Pizza Combo",
            category: "Pizza",
            name: "Garden Special",
            crust: "Star Crust",
            sauce: "Special Garlic Sauce",
            quantity: 1,
        },
    ];

    return (
        <div className='mx-auto max-w-[90%] py-12'>
            <Link href={`/${locale}/menu`} className="flex items-center gap-2 cursor-pointer font-[500] text-[25px]">
                <IoArrowBack size={24} className='text-mainGreen' />
                <span>Back to menu</span>
            </Link>

            <div className="flex flex-col sm:flex-col xl:flex-row gap-6 md:gap-12 xl:gap-32 xl:items-start w-full mt-7">
                <div className="flex flex-col gap-6">
                    <h5 className="flex items-center gap-2 cursor-pointer font-[500] text-[28px] pl-4">
                        Your cart
                    </h5>
                    
                    {pizzaData.map((item) => (
                        <div
                            key={item.id}
                            className="w-full xl:w-[727.68px] h-auto p-4 bg-[#EAEAEA] shadow-lg rounded-[14.1px]"
                            style={{ boxShadow: '0px 3.76px 15.04px rgba(0, 0, 0, 0.25)' }}
                        >
                            <div className="flex flex-col md:flex-row h-full">
                                <div className="w-full md:w-1/3 flex items-center justify-center">
                                    <Image 
                                        src="/images/pizza.png" 
                                        alt="pizza" 
                                        className="max-h-full object-contain"
                                        width={200}
                                        height={200}
                                    />
                                </div>

                                <div className="w-full md:w-2/3 flex flex-col justify-center gap-1 px-4 font-poppins text-sm font-medium text-gray-800 items-center md:items-start">
                                    <div>{item.title}</div>
                                    <div className="text-mainGreen font-bold">{item.category}</div>
                                    <div>{item.name}</div>
                                    <div>{item.crust}</div>
                                    <div>{item.sauce}</div>
                                    <div className="bg-white flex items-center justify-center gap-3 rounded-md border w-fit mt-2">
                                        <button className="text-xl px-3 py-1 text-mainGreen">-</button>
                                        <span className="text-lg font-bold text-mainGreen">{item.quantity}</span>
                                        <button className="text-xl px-3 py-1 text-mainGreen">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="w-full mt-6">
                        <div className="flex justify-between items-center text-[16.87px] font-[500] font-poppins text-black mb-2">
                            <span>Subtotal</span>
                            <span>EGP 450.00</span>
                        </div>

                        <div className="border-t border-[#E0E0E0] my-3"></div>

                        <div className="flex justify-between items-center text-[18px] font-[600] font-poppins text-black">
                            <span>Total</span>
                            <span>EGP 450.00</span>
                        </div>
                    </div>

                    <div className='md:flex justify-center items-center hidden'>
                        <Image 
                            src="/images/amico.png" 
                            alt="illustration"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                
                <div className="w-full mt-12 lg:mt-0">
                    <h2 className="text-xl font-semibold mb-7 text-mainGreen">Address and payment</h2>
                    <CartForm />
                </div>
            </div>
        </div>
    );
}