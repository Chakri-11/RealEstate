import React from 'react'

function Info() {
  return (
    <div className='grid md:grid-cols-2 px-8 md:px-16'>
            <div className=' grid-span-1 flex flex-col '>
                <div className='flex justify-between px-4'>
                    <h2 className='font-bold font-serif text-xl'>123 Acme St. Dallas, TX</h2>
                    <p className='text-lg font-semibold'>House for Sale</p>
                    <p className='text-green-900 font-bold font-serif text-xl'>$2,677,000</p>
                </div>
                <div className='flex justify-between font-semibold px-4 lg:text-lg'>
                    <div className=''>
                        <div className='flex justify-between py-2'>
                            <p className=''>Bedrooms:</p><p>5</p>
                        </div>
                        <div className='flex'>
                            <p className=''>Bathrooms:</p><p>7</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex py-2 justify-between'>
                            <p className=''>Square Feet:</p><p>8,138</p>
                        </div>
                        <div className='flex'>
                            <p className=''>Est Payment:</p><p>$14,797/mo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid-span-1 px-4 lg:text-lg flex flex-col items-center'>
                <p>A beautiful modern-day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including a media room, workout facility, and a built-in sauna. </p>
                <button className="flex items-center md:text-lg font-semibold text-a hover:text-e px-2 py-1 md:px-4 md:py-2 rounded-full bg-NightShadow/30">View full</button>
            </div>

    </div>
  )
}

export default Info