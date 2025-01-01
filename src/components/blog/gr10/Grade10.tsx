import React from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


function Grade10() {
    return (
        
        <div>
            <div className="flex flex-col mt-20">
                <Link to="/blog" className="flex items-center mb-10 text-pink-600 hover:underline group">
                    <ChevronDoubleLeftIcon className="w-4 mr-3 group-hover:animate-bounce-horizontal" />
                    <span>Back</span>
                </Link>
                {/* title */}
                <h1 className="text-3xl font-bold">Reflecting on High School Part II: Grade 10</h1>
                <div className="flex mt-2">
                    {/* author */}
                    <h3 className="mr-4 text-sm">by <Link to="/" className="text-pink-600 hover:underline">Andrew Jiang</Link></h3>
                    {/* date */}
                    <h3 className="text-sm text-stone-400">TBD</h3>
                </div>
            </div>
            <hr className="w-64 h-1 my-8 bg-pink-600 border-0 margin-left" />
            <div>
                <p className="my-4">
                    Grade 9 was definitely a new experience for me, however it was generally stress-free. As I intended only to apply to Canadian universities, there were really no real stakes in my academic performance in grade 9, as I knew universities only looked at 11th and 12th grade marks. At the same time, however, I knew I was not putting my best foot forward when it came to school and extracurriculars, and it really started to sink in once I had slowly realized what I wanted to do after high school. Grade 10 would be the first year where I genuinely cared about my academic life, and where I finally felt the stakes were very high. This blog post will explore that year.
                </p>

                <h2 className="text-xl font-bold">The Late Summer of 2021</h2>

                <p className="my-4">My <Link to="/blog/grade-9" className="text-pink-600 hover:underline">last blog post</Link> focused almost entirely about my time within high school, and one key detail I did not dive into was the after-school math and coding classes I was taking. See, in order for me to learn and get better at contest math and programming in general, my parents had signed me up for. These were run by private tutoring schools outside of my high school, and were focused entirely on teaching math and coding concepts and techniques for various contests.</p>
                
                <p className="my-4">I was signed up for a class dedicated to prepare for American Mathematics Competition (AMC) 10 as well as a class to prepare for the Canadian Computing Competition (CCC). I began both of these classes in the summer of 2020, and started off quite well in them. However, as grade 9 progressed, I slowly started paying less and less attention to class, to the point where I became lost in the classes, especially the AMC one.</p>

                <p className="my-4">Now, you might be wondering: what's the big deal? I mean, these are extracurricular contests that don't affect my academics right? Well, that's what I thought too, which is why I didn't put much effort into these classes. But a new revelation completely turned my belief of this upside down. See, it was by late August to early September of 2021 that I'd discovered what I wanted to pursue after high school: computer science.</p>

                <p className="my-4">To be honest, I'm still not exactly sure what drew me to computer science. Maybe it was the coding classes, which I actually enjoyed. Or perhaps it was the prospect of the potentially high salaries of software jobs. Either way, this was a big shift in trajectory for me, and directly effected my mindset and planning of my future high school years (and yes, "effect" is oth a noun and a verb). The thing is, I knew very little about computer science , only that the University of Waterloo was supposedly one of the top schools in this subject in Canada. What's funny is my friend also wanted to go into something software related, and we were both utterly clueless at the time.</p>

                <img src="/blog_images/grade10/UWCSconvo.jpg" alt="UW CS Conversation" className="w-auto h-auto my-4" />

                <p className="my-4">Now, what did Waterloo CS have to do with my change in perspective of the extracurricular classes? See, the thing is, I was told that Waterloo CS (and other programs in the <a href="https://uwaterloo.ca/math/" target="_blank" className="text-pink-600 hover:underline">Faculty of Mathematics</a>) supposedly favoured students who performed well on math and computing contests. I would later on discover that this was a relatively small part of the admissions evaluation process, but this is what I had "known" at the time. Something that was more certain was another barrier for me: their insanely high admissions grade average requirement and the well-roundedness they sought in applicants through their extracurriculars. It was these newly learned facts that made me realize: I seriously needed to lock in.</p>

                <h2 className="text-xl font-bold">The Start of Grade 10: A New Resolve</h2>

                <p className="py-4">Now, I knew if I had continued on the trajectory I was already on in my after-school math and coding classes, I would be doomed to fail on the contests.</p>

                <HashLink smooth to="/blog/grade-10#top" className="flex items-center mb-10 text-pink-600 hover:underline group">
                    <ChevronDoubleUpIcon className="w-4 mr-3 group-hover:animate-bounce" />
                    <span>Back to Top</span>
                </HashLink>

            </div>
        </div>
    );
}

export default Grade10;