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
                    Hi! I'm Andrew, though, depending on where you've seen me, you may know me as 1jiangand2 or antpoojiangle. I will be graduating from <a href="https://dfh.hdsb.ca/" target="_blank" className="text-pink-600 hover:underline">Dr. Frank J. Hayden Secondary School</a> in Burlington, Ontario this coming June and am on track to starting my first year in <a href="https://cs.uwaterloo.ca/" target="_blank" className="text-pink-600 hover:underline">Computer Science</a> at the <a href="https://uwaterloo.ca/" target="_blank" className="text-pink-600 hover:underline">University of Waterloo</a> this coming Fall!  In high school, I participated in a variety of co-curriculars, with a leadership role in many, including: robotics, programming club, model UN, DECA, badminton team, and the link crew. Some of my interests and hobbies outside of school include mathematics, coding, badminton, biking, going out to explore, and playing video games!
                </p>
                <p className="my-8 text-gray-900">
                    In terms of programming experience, I have experience in many different languages and frameworks. This very website was created using React, TypeScript, and Tailwindcss. In my <Link to="/projects" className="text-pink-600 hover:underline">projects</Link>, I also have experience with HTML/CSS/JS, Python, Typescript, Java, C++, React, Tailwindcss, Node.js, MongoDB, JavaFX, Flask, Arduino, and Pygame. Additionally, I began my programming journey through competitive programming, spending most of my time on <a href="https://dmoj.ca/user/1jiangand2" target="_blank" className="text-pink-600 hover:underline">DMOJ: Modern Online Judge</a>, solving problems with C++, Java, and Python. I have written the <a href="https://cemc.uwaterloo.ca/contests/ccc-cco.html" target="_blank" className="text-pink-600 hover:underline">Canadian Computing Competition (CCC)</a> Senior Level twice, earning distinction (top quartile score) both times. I hope to improve day by day in both my project skills as well as my competitive programming skills!
                </p>
                <p className="my-8 text-gray-900">
                    Feel free to roam around this site to learn more about me!
                </p>
            </div>

        </div>
    );

}

export default Home;