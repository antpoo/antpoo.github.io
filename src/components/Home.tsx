import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <div className="flex flex-col items-center justify-center my-20">
            <img src={`${process.env.PUBLIC_URL}/andrew_headshot.jpeg`} alt="Andrew Jiang" className="w-20 h-20 rounded-full" />
            <h1 className="my-8 text-3xl font-bold">Greetings, I'm Andrew Jiang!</h1>
            <hr className="w-64 h-1 mx-auto bg-pink-600 border-0" />
            <div>
                <p className="my-8 text-gray-900"> 
                    Hi! I'm Andrew, though, depending on where you've seen me, you may know me as 1jiangand2 or antpoojiangle. I graduated from <a href="https://dfh.hdsb.ca/" target="_blank" className="text-pink-600 hover:underline">Dr. Frank J. Hayden Secondary School</a> in Burlington, Ontario this past June and am currently my 1A term in <a href="https://cs.uwaterloo.ca/" target="_blank" className="text-pink-600 hover:underline">Computer Science</a> at the <a href="https://uwaterloo.ca/" target="_blank" className="text-pink-600 hover:underline">University of Waterloo</a>. In UW, I am part of the backend team of the <a href="https://teamwaterloop.ca/" target="_blank" className="text-pink-600 hover:underline">Waterloop</a> design team, and am a part of the <a href="https://puremath.club/" target="_blank" className="text-pink-600 hover:underline">Pure Math Club</a>. I hope to make the most out of the years to come here!
                </p>
                <p className="my-8 text-gray-900">
                    In terms of programming experience, I have experience in many different languages and frameworks. This very website was created using React, TypeScript, and Tailwindcss. In my <Link to="/projects" className="text-pink-600 hover:underline">projects</Link>, I also have experience with HTML/CSS/JS, Python, Typescript, Java, C++, React, Tailwindcss, Node.js, MongoDB, JavaFX, Flask, Arduino, and Pygame. Additionally, I began my programming journey through competitive programming, spending most of my time on <a href="https://dmoj.ca/user/1jiangand2" target="_blank" className="text-pink-600 hover:underline">DMOJ: Modern Online Judge</a>, solving problems with C++, Java, and Python. I have written the <a href="https://cemc.uwaterloo.ca/contests/ccc-cco.html" target="_blank" className="text-pink-600 hover:underline">Canadian Computing Competition (CCC)</a> Senior Level twice, earning distinction (top quartile score) both times. Finally, I've participated in various hackathons across the last couple of years, even winning at a few of them!
                </p>
                <p className="my-8 text-gray-900">
                    Feel free to roam around this site to learn more about me!
                </p>
            </div>

        </div>
    );

}

export default Home;