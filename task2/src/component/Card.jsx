import React from 'react'

const Card = (props) => {
    const {
        price,
        priceNew,
        diskon,
        tier,
        nameTier,
        fitur,
        className
    } = props
    console.log('fitur', fitur);
    return (
        <div className={`p-3 border-2 rounded-xl bg-white w-80 h-[38rem] relative ${className}`}>
            <p className='font-bold text-lg'>Tier {tier}</p>
            <p className='font-bold text-[#5B8AE8] text-2xl mb-5'>{nameTier}</p>
            <hr />
            <div className='flex items-center mt-3 gap-4 '>
                <p className='line-through text-slate-500 text-xl'>Rp {price}</p>
                <p className='bg-red-100/50 text-red-500 p-1 rounded-lg px-2'>-{diskon}%</p>
            </div>
            <p className='font-semibold text-3xl mt-1'>Rp {priceNew}</p>
            <p className='text-slate-500 text-[10px] mt-2'>Harga belum termasuk PPN 11%</p>
            <div className='border-2 rounded-lg text-center py-2 my-4'>
                Chat Sales
            </div>

            <div className='mt-5 font-semibold pl-5 mb-10'>
                <p className='mb-2'>FITUR</p>
                <ul class="list-disc">
                    {fitur?.map((item) =>
                        <li>{item}</li>
                    )}
                </ul>
            </div>


            <div className='absolute left-0 bottom-5 w-full'>
                <hr />
                <div className='flex items-center justify-between mt-3 gap-4 px-7'>
                    <p className='text-slate-500 text-xl'>Instalasi</p>
                    <p className='bg-purple-100/50 text-black px-3 p-1 rounded-lg'>FREE</p>
                </div>
            </div>
        </div>
    )
}

export default Card