'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LogForm() {
  const router = useRouter();
  const locale = useLocale();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/');
  };
  
  return (
    <form className="bg-white px-6 py-8 md:p-10 lg:p-20 w-full mx-auto rounded-md" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-semibold text-left w-full leading-relaxed">
        <span className="text-darkRed font-bold">Sign In</span> To Your Papa Johns Account For More Pizza Offers And Exclusive <br className="hidden sm:block" /> Rewards
      </h2>
      <div className="space-y-8 py-6">
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block mb-1 font-poppins font-semibold text-[16px] leading-[100%] text-[rgba(49,48,57,1)]"
          >
            Email
          </label>
          <div className="w-full h-[44.63px] p-px rounded-lg bg-linear-to-b from-[#A6A6A6] to-mainGreen">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full h-full px-4 py-2 rounded-[7px] bg-white focus:outline-none"
            />
          </div>
        </div>
        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block mb-1 font-poppins font-semibold text-[16px] leading-[100%] text-[rgba(49,48,57,1)]"
          >
            Password
          </label>
          <div className="w-full h-[44.63px] p-px rounded-lg bg-linear-to-b from-[#A6A6A6] to-mainGreen">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full h-full px-4 py-2 rounded-[7px] bg-white focus:outline-none"
            />
          </div>
        </div>
      </div>
      
      {/* Terms Checkbox */}
      <label className="flex items-start gap-2 text-sm font-poppins text-gray-700 cursor-pointer pt-4">
        <input
          type="checkbox"
          className="w-4 h-4 mt-1 accent-mainGreen"
        />
        <span>
          I agree to the <a href="#" className="underline">Terms of Service</a> and acknowledge you've read our <a href="#" className="underline">Privacy Policy</a>.
        </span>
      </label>

      {/* Submit Button */}
      <div className="pt-12">
        <button
          type="submit"
          className="w-full font-medium text-base sm:w-50 h-12.5 px-[22.53px] py-2.5 rounded-[29.65px] bg-[rgba(166,166,166,1)] text-white flex items-center justify-center gap-[11.86px] transition hover:opacity-90 uppercase"
        >
          Sign In
        </button>
      </div>
      
      <p className='font-normal text-sm pt-5'>
        Don't have an account? <Link href={`/${locale}/signup`} className="font-bold text-base">sign up</Link>
      </p>
    </form>
  );
}