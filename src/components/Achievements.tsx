import React from 'react';
import { TrophyIcon } from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { achievements } from './datajsons/achievementdata';

function Achievements() {
    return (
        <section id='achievements' className='text-gray-400 bg-gray-900 body-font'>
            <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                <div className='flex flex-col w-full mb-20'>
                    <TrophyIcon className='mx-auto inline-block w-10 mb-4' />
                    <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
                        My Achievements
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        Here are some achievements I've gotten over my high school years.
                    </p>
                </div>
                <div className='flex flex-wrap -m-4'>
                    {achievements.map(achievement => (
                        <div key={achievement.achievement} className='p-2 sm:w-1/2 w-full'>
                            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
                                <CheckBadgeIcon className='text-green-400 w-6 h-6 flex-shrink-0 mr-4' />
                                <span className='title-font font-medium'>
                                    <span className='text-white'>{achievement.achievement} <br /> </span> at {achievement.location}
                                </span>
                                <p>
                                    {achievement.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Achievements;