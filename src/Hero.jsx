import React from 'react'
import logo from './assets/icon_logo.svg'
import pic from './assets/Rectangle 1.svg'
import cardImg from './assets/avatar.svg'
import play from './assets/Icon.svg'
import apple from './assets/vector.svg'
const Hero = () => {
    return (
        <section className=''>
            {/* HeaderBar */}
            <div className=' mx-auto grid md:grid-cols-[60%,auto] md:px-16 px-8  h-full '>


                <div className='order-2 hidden md:flex items-center border-2 justify-center relative h-full'>
                    <img className='h-full object-cover' src={pic} alt="" />
                    <div className='bg-white py-4 px-4 mx-4 rounded-full absolute shadow-lg bottom-10'>
                        <p>
                            <span>
                                <span className='text-[#679fd1]'>Susan</span> is 29, lives in Long Island and spends the day as a <span className='text-[#679fd1]'>vet.</span>
                            </span>
                        </p>
                    </div>
                </div>


                <div className='py-10'>
                    <img width={45} src={logo} alt="" srcset="" />
                    {/* Introdution headline  */}
                    <div className='md:mt-28 mt-12'>

                        <div className='flex items-center flex-wrap gap-4 pb-0'>
                            <span className=' font-[400] md:text-5xl text-3xl  text-[#000000]'>Introducing </span>
                            <span className='text-[#679fd1] md:text-8xl text-6xl mt-2 custom-class'>Susan</span>
                        </div>

                        <p className='py-2 md:text-2xl text-xl mt-[-20px] text-[#676b71]'>Susan is Single ready to meet her match</p>
                        <div className='md:hidden'>
                            <img className='rounded-xl' src={pic} alt="" />
                            <div className='bg-white md:py-4 py-3 md:px-3 px-6 mt-5 rounded-full shadow-xl shadow-gray-300 text-sm'>
                                <p>
                                    <span><span className='text-[#679fd1]'>Susan</span> is 29, lives in <span className='text-[#679fd1]'>Long Island</span> and spends day ad a <span className='text-[#679fd1]'>vet.</span></span>
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* card */}

                    <div className='border-[#efefef] border-2 md:w-[60%] w-full rounded-xl pl-4 pr-6 border-box py-6 my-6'>
                        <div className='flex items-center gap-3 '>
                            <img src={cardImg} alt="" />
                            <div className=''>
                                <p> <span className=' text-[#679fd1]  custom-class text-3xl'> Vinneta</span> <br /><span className='text-sm mt-0'>Friends for 6 years</span></p>
                            </div>
                        </div>

                        <div>
                            <p className='text-lg pt-6'>Let me tell you about Suzan:</p>
                            <p className='pt-2 text-[#676b71]'>"Susan is a collector of antique furniture,vintage clothing,or other items,who is a great istener and always willing to lend an ear Jess is looking for a person who isn't afraid of banner"</p>
                        </div>

                    </div>

                    <p className='py-4 text-[#676b71]'>If you are interested in Susan you can find her on <span className='text-[#679fd1]'>Wingman</span>,which is <br /> dating app that friends help each other</p>

                    {/* button */}
                    <div>
                        <p className='pt-3 text-[#676b71]'>Download to her started</p>
                        <div className='flex items-center flex-wrap gap-4 py-2'>
                            <a href="">
                                <div className='border-[#efefef] w-fit rounded-e-md border-2 flex items-center px-2 gap-2'>
                                    <div >
                                        <img src={apple} alt="" />
                                    </div>
                                    <div>
                                        <span className='text-[9px] font-semibold'>Download on the</span>
                                        <p className=' mt-[-10px] font-semibold'>App Store</p>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className='border-[#efefef] w-fit rounded-e-md border-2 flex items-center px-2 gap-2'>
                                    <div >
                                        <img src={play} alt="" />
                                    </div>
                                    <div>
                                        <span className='text-[9px] font-semibold'>GET IT ON</span>
                                        <p className=' mt-[-10px] font-semibold'>Google Play</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero