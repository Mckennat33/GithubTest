import React from 'react'
import {
    UilArrowUP, 
    UilArrowDown, 
    UilTemperatureEmpty, 
    UilTear, 
    UilWind, 
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons"




function CurrentWeather() {
    return (
        <div>

            <div className='flex item-center justify-center py-6 text-xl text-cyan-300'>
                <p>Sunny</p>
                {/* Hardcoded */}
            </div>
            
            <div className='flex flex-row items-center justify-between text-white py-3'>
                <img 
                src="https://icons-for-free.com/iconfiles/png/512/sunny+temperature+weather+icon-1320196637430890623.png" 
                className='w-20'
                />
                <p className='text-5xl '>87°</p>
                <div className='flex flex-col space-y-2'>

                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTemperatureEmpty size={18} className="mr-1" />
                        Real fell:
                        <span className='font-medium ml-1'>32°</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className='font-medium ml-1'>65%</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilWind size={18} className="mr-1" />
                        Wind Speed:
                        <span className='font-medium ml-1'>11 km/h</span>
                    </div>

                </div>
            </div>
        
        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>

            <UilSun />
            <p className='font-light'>Rise: 6:45 AM</p>
            <p className='font-light'>|</p>

            <UilSunset />
            <p className='font-light'>Set: 07:35 PM</p>
            <p className='font-light'>|</p>
            
            <UilSun />
            <p className='font-light'>Low: 45°</p>
            <p className='font-light'>|</p>
            
            <UilSun />
            <p className='font-light'>Rise: 40°</p>
            <p className='font-light'>|</p>

        </div>

        </div>
    )
}

export default CurrentWeather