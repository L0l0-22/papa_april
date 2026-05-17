'use client';

import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';
import Image from 'next/image';
import CartForm from '@/Auth/CartForm';
import { useLocale } from 'next-intl';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeFromCart } from '@/redux/slices/cartSlice';

export default function Page() {
    const locale = useLocale();
    const dispatch = useDispatch();
    const { items: cartItems } = useSelector((state) => state.cart);

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const total = subtotal; // You can add tax/shipping here if needed

    const handleUpdateQuantity = (cartItemId, newQuantity) => {
        if (newQuantity <= 0) {
            dispatch(removeFromCart(cartItemId));
        } else {
            dispatch(updateQuantity({ cartItemId, quantity: newQuantity }));
        }
    };

    return (
        <div className='mx-auto max-w-[90%] py-12'>
            <Link href={`/${locale}/menu`} className="flex items-center gap-2 cursor-pointer font-medium text-[25px]">
                <IoArrowBack size={24} className='text-mainGreen' />
                <span>Back to menu</span>
            </Link>

            <div className="flex flex-col sm:flex-col xl:flex-row gap-6 md:gap-12 xl:gap-32 xl:items-start w-full mt-7">
                <div className="flex flex-col gap-6 flex-1">
                    <h5 className="flex items-center gap-2 cursor-pointer font-medium text-[28px] pl-4">
                        Your cart
                    </h5>
                    
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div
                                key={item.cartItemId}
                                className="w-full h-auto p-4 bg-[#EAEAEA] shadow-lg rounded-[14.1px]"
                                style={{ boxShadow: '0px 3.76px 15.04px rgba(0, 0, 0, 0.25)' }}
                            >
                                <div className="flex flex-col md:flex-row h-full">
                                    <div className="w-full md:w-1/3 flex items-center justify-center">
                                        <Image 
                                            src={item.product.image || "/images/pizza.png"} 
                                            alt={item.product.name} 
                                            className="max-h-[150px] object-contain"
                                            width={200}
                                            height={200}
                                        />
                                    </div>

                                    <div className="w-full md:w-2/3 flex flex-col justify-center gap-1 px-4 font-poppins text-sm font-medium text-gray-800 items-center md:items-start">
                                        <div className="text-lg font-bold">{item.product.name}</div>
                                        <div className="text-mainGreen font-bold">{item.size?.size_name} {item.crust?.crust_name ? `- ${item.crust.crust_name}` : ''}</div>
                                        <div className="text-gray-600">Price: EGP {item.price.toFixed(2)}</div>
                                        
                                        <div className="bg-white flex items-center justify-center gap-3 rounded-md border w-fit mt-2">
                                            <button 
                                                onClick={() => handleUpdateQuantity(item.cartItemId, item.quantity - 1)}
                                                className="text-xl px-3 py-1 text-mainGreen"
                                            >-</button>
                                            <span className="text-lg font-bold text-mainGreen">{item.quantity}</span>
                                            <button 
                                                onClick={() => handleUpdateQuantity(item.cartItemId, item.quantity + 1)}
                                                className="text-xl px-3 py-1 text-mainGreen"
                                            >+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 text-gray-500 italic">
                            Your cart is empty. Go back to the menu to add some delicious food!
                        </div>
                    )}

                    {cartItems.length > 0 && (
                        <div className="w-full mt-6">
                            <div className="flex justify-between items-center text-[16.87px] font-medium font-poppins text-black mb-2">
                                <span>Subtotal</span>
                                <span>EGP {subtotal.toFixed(2)}</span>
                            </div>

                            <div className="border-t border-[#E0E0E0] my-3"></div>

                            <div className="flex justify-between items-center text-[18px] font-semibold font-poppins text-black">
                                <span>Total</span>
                                <span>EGP {total.toFixed(2)}</span>
                            </div>
                        </div>
                    )}

                    <div className='md:flex justify-center items-center hidden'>
                        <Image 
                            src="/images/amico.png" 
                            alt="illustration"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                
                <div className="w-full mt-12 lg:mt-0 lg:max-w-md">
                    <h2 className="text-xl font-semibold mb-7 text-mainGreen">Address and payment</h2>
                    <CartForm />
                </div>
            </div>
        </div>
    );
}