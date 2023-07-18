import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ComputerDesktopIcon from './icons/ComputerDesktopIcon';
import ContactIcon from './icons/ContactIcon';

function About() {
    return (
        <section id='about'>
            <div className='mx-auto flex px-10 py-5 md:flex-row flexcol items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center font-medium'>
                    <h1 className='text-white font-sans title-font sm:text-4xl text-3xl mb-4'>
                        GREETINGS! I'M ANDREW!
                    </h1>
                    <h2 className='text-white font-sans'>
                        PROGRAMMER, MATH ENJOYER, AND CASUAL GAMER
                    </h2>
                    <p className='mb-8 leading-relaxed'>
                        <br />
                        Hi! My name is Andrew Jiang. I am a 12th Grade student currently attending Dr. Frank J. Hayden Secondary School. 
                        I am super passionate about STEM and love to learn whatever I can about it in my free time! I like to spend my time 
                        solving math problems, competitive programming problems, and working on projects like this website! On another 
                        note, I also do love world affairs and geopolitics, and I try and spend my time learning about the world and 
                        understanding us as humans more. For this reason, I am super into Model United Nations as well, and have been 
                        to many conferences where I can debate, discuss, negotiate, and solve world issues with many peers that I have 
                        never met before! Also, I do like getting on and playing video games from time to time :D.
                    </p>
                    <div className='flex justify-center'>
                        <Stack direction='row' spacing={2}>
                            <Button
                            variant='contained'
                            href='#projects'
                            color='primary'
                            startIcon={<ComputerDesktopIcon  />}>
                                My Projects
                            </Button> 

                            <Button
                            variant='contained'
                            href='#contact'
                            color='primary'
                            startIcon={<ContactIcon />}>
                                Contact Me
                            </Button>
                        </Stack>
                    </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                    <img
                        className='object-cover object-center rounded pr-20'
                        alt='hero'
                        src='./coding.svg'
                    />
                </div>
            </div>
        </section>
    );
}

export default About;