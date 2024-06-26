import React from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Grade9() {
    return (
        <div>
            <div className="flex flex-col mt-20">
                <Link to="/blog" className="flex items-center mb-10 text-pink-600 hover:underline group">
                    <ChevronDoubleLeftIcon className="w-4 mr-3 group-hover:animate-bounce-horizontal" />
                    <span>Back</span>
                </Link>
                {/* title */}
                <h1 className="text-3xl font-bold">Reflecting on High School Part I: Grade 9</h1>
                <div className="flex mt-2">
                    {/* author */}
                    <h3 className="mr-4 text-sm">by <Link to="/" className="text-pink-600 hover:underline">Andrew Jiang</Link></h3>
                    {/* date */}
                    <h3 className="text-sm text-stone-400">17 June 2024</h3>
                </div>
            </div>
            <hr className="w-64 h-1 my-8 bg-pink-600 border-0 margin-left" />
            <div>
                <p className="my-4">
                    Going from middle school to high school is a big shift in anyone's life. As a child, ever since I was in kindergarten, my life was so simple. Wake up in the morning, go to school, come home, do the extracurricular activities my parents signed me up for, then go sleep. There wasn't much to think about since I was very lucky to have parents who took care of many things in my life for me. Thus, when it came time to enter high school, I must admit I was feeling slightly nervous and anxious. The small bubble I lived in was about to pop, and I would enter into a phase of life where I had to make active decisions on how I wanted things to be.
                </p>

                <h2 className="text-xl font-bold">Early Grade 8</h2>

                <p className="my-4">
                    My entrance into high school, specifically the 9th grade, starts in grade 8. Of course, this was the year where teachers and guidance staff at my middle school started to talk about high school. For most people, it's a simple process: attend the high school that is your home school. This did not apply to me nor my classmates, for we were in the gifted program. Historically, it would've been simple for us. There was only one high school in our entire city that offered the gifted program: Nelson High School. However, this was going to change, starting exactly for the students entering high school in my grade. 
                </p>

                <p className="my-4">
                    Another high school, M.M. Robinson High School, was going to be offering the gifted program. If I recall correctly, this was in part due to a third high school, Robert Bateman High School, shutting down, and its students being transferred over to Nelson. This, obviously, filled up student capacity, and resulted in having to move a lot of the gifted students over to MMR. The thing is, not every gifted kid was to be moved to MMR. Those who lived North of highway 403 were to go to MMR, and those who lived South of it were to go to Nelson. This hit me by surprise, as that meant that most of my friends at the time were to go to Nelson, whilst I was to go to MMR. 
                </p>

                <p className="my-4">
                    It was possible to still go to the other school if you really wanted to, however it was extremely rare. My parents and I tried to get me into Nelson, but this was unsuccessful. Furthermore, we were also heavily considering signing up for the IB program, at Burlington Central High School, as well as the I-STEM program, at Aldershot High School, and even thought of attending a school in the neighbouring town of Oakville. We also considered the possibility of attending a Catholic high school, specifically Corpus Christi High School. And of course, there was still the option of my local home school, which was Dr. Frank J. Hayden Secondary School, where I would end up graduating from. This left me with the following options:
                </p>

                <ul className="my-4 ml-6 list-disc list-inside">
                    <li>Nelson High School (Burlington, Gifted)</li>
                    <li>M.M. Robinson High School (Burlington, Gifted)</li>
                    <li>Burlington Central High School (Burlington, IB)</li>
                    <li>Aldershot High School (Burlington, I-STEM)</li>
                    <li>Corpus Christi High School (Burlington, Catholic Home School)</li>
                    <li>Dr. Frank J. Hayden Secondary School (Burlington, Home School)</li>
                    <li>White Oaks Secondary School (Oakville, IB)</li>
                    <li>Abbey Park High School (Oakville, AP and Gifted)</li>
                </ul>

                <p className="my-4">
                    Immediately, I decided I did not wish to attend a school in Oakville. I heard that the students there were generally more competitive, and I was afraid I'd fall behind. This left me with the schools in Burlington. I ended up not applying for IB as I had missed the deadline, and decided against I-STEM because Aldershot was simply too far. As mentioned earlier, I was unable to go to Nelson as well. This left me with three more options: Hayden, Corpus, and MMR. In the end, I picked MMR, because at least some of my friends from middle school would still be there, as well as the fact that they offered the gifted program. Later I would realize that the gifted program was not really that special in high school.
                </p>

                <p className="my-4">
                    Throughout the year, Nelson High School and M.M. Robinson High School sent in their gifted representatives to give presentations and information sessions about high school. This included things about student life, courses, preparation, etc. I remember what we had to pick for grade 9: a math course, a science course, a physical education course, a French course, an English course, an arts course, a geography course, and an elective. For the math, science, French, English, and geography, we simply needed to pick which stream we wanted. I opted to pick academic + gifted wherever possible, otherwise I would give up the pathway to university. For my phys-ed course, I just picked the regular male phys-ed. For arts I picked music, and for my elective I picked technology studies. Everyting seemed like a smooth sailing, and I was slowly getting more and more excited for high school.
                </p>

                <h2 className="text-xl font-bold">COVID-19</h2>

                <p className="my-4">
                    Very unluckily for me, as well as everyone else in my grade, my final year of middle school happened to be the 2019-2020 school year, right when COVID-19 first was a thing. Everyone by now remembers the infamous March quarantine, where they said that we'd be back a few weeks after March break. We never ended up going back to class, and my last time in Charles R. Beaudoin Public School was before March break of 2020. Our teachers continued leaving assignments through Google Classroom, and I tried to complete as much of them as possible. I did end up not attending most of the optional Google Meets. Our graduation ceremony and trip had to be cancelled, so middle school ended off with quite the opposite of a bang. On top of that, I basically stopped attending most of my extracurriculars, only staying in the ones that were able to be offered online.
                </p>

                <p className="my-4">
                    Obviously, COVID-19 did not miraculously stop being a pandemic by the time high school was to start for me, and this caused my first year of high school to be drastically different from what a normal high school year would look like. First of all, due to COVID-19, we had two options for how we wanted to attend school: in-person/online hybrid or fully online. Second of all, COVID-19 turned our original semester system (with four courses per term) to a quadmester system (with two courses per term). This meant that each school day we would only have two classes, each ranging from two to three hours long. I opted to go for in-person/online hybrid, whereby we would go to school in-person for the first class, then attend the second class online at home. However, we would only even go in person for two or three of the days per week. This meant we were in-person for roughly a quarter of the time. Also, each week we'd swap which class was the in-person one. This arrangement definitely raised some red flags for me; I had opted to go in-person to try and have a somewhat normal high school experience, however this was completely not it. Furthermore, reasonably we had to follow COVID-19 prevention measures, such as face masks, constant hand sanitation, and social distancing.
                </p>

                <h2 className="text-xl font-bold">Quadmester 1</h2>

                <p className="my-4">
                     My first quadmester courses were music (AMU1O1) and geography (CGC1D5), which I took in-person/online at MMR. I found music class to be quite easy; we were learning how to read notes and play piano for the first time&mdash;right after I had just completed my RCM Level 10 piano exam. We also had these small activities that we did with our "campfire groups", which were just groups of two to three students. Another element of that class was the wind instruments. Having played the euphonium in elementary school, I opted to continue that in high school, so I checked one out and continued going through the playing exercises. I remember also having to compose music, which was also not too difficult as I had learnt music theory before this.
                </p>

                <p className="my-4">
                    Geography was completely different. It was much more academic and "textbook" based, versus music which was much more hands on. We learned a variety of things about geography; from landforms, to urban sprawl, to unsustainable lifestyles, and much more. There's honestly not much to say about this course; it was my last time ever taking geography in school (at least until the time of writing this).
                </p>

                <p className="my-4">
                    As the semester drew to a close, I knew I did not like this hybrid system. Furthermore, in order to actually catch the school bus every morning, I would have to wake up at 6:45 AM, which is not TOO early, but definitely earlier than I would have liked. All of this drew me to eventually switch to full online for the proceeding quadmesters.
                </p>

                <h2 className="text-xl font-bold">Quadmesters 2-4</h2>

                <p className="my-4">
                    After switching to full online, I no longer took courses from MMR; rather I took them from Virtual School Secondary (VSS), as it was named at the time. This meant that students from all over the Halton District School Board (HDSB) could be in the same classes as me, and I found myself in the same classes as some of my friends who went to Nelson.
                </p>

                <p className="my-4">
                    I must say, I definitely enjoyed the fully virtual format a lot more, contrary to many others. It gave me a lot of flexibility and comfort. I was able to wake up minutes before my class, and I got to take it from the comfort of my own desk, rather than the desks in the classrooms. The only big disadvantage I found was the assignments. In particular, I remember in science (SNC1D5), our assignemnts were literally having to submit the notes that we took throughout the course. Also, in phys-ed (PPL1OM), we had to take videos of ourselves exercising. 
                </p>

                <p className="my-4">
                    February would also be when I wrote my first computing competition ever, as well as my first math contest. I wrote the Canadian Computing Competition (CCC) Junior Level and received a score of 54/75 on it. At the time, I didn't know much about this competition and had no idea whether or not this was a good score. After learning more, I realized that it was not bad but also not good, for the junior level. I also wrote the Pascal math contest. This was a multiple choice test with twenty-five problems. The first ten were each worth five points, the next ten were worth six points each, then the final five were worth eight points each. Any unanswered problem was also worth two points, up to a total of twenty points. This contest I had been preparing for since I was in grade 8, and thus had very high expectations for myself. Due to COVID-19, I had to take it online, however this did not change much as it was multiple choice anyways. I found myself stuck on a problem in the final section, but eventually pushed through and solved it.
                </p>

                <p className="my-4">
                    After the discussion ban was lifted, I talked with my friend about the contest. He told me that he got an answer one less than mine on the problem I was stuck on. It turns out I was wrong. I overcounted one of the cases and my answer was one too many. This came as a shock and disappointed me for a bit. After receiving my score, I found it to be higher than what I'd expected. I got 130/150. It turns out, one of the problems was missing the correct answer entirely, and thus everyone was awarded the full eight points for it. I was definitely disappointed in myself with my score, as I was expecting at least 140, but I did not get too discouraged from it. At the time, I did not know that there was an honour roll, but I would later find out that me putting one less than the correct answer on that one problem was the reason why I did not make honour roll, as I was off by eight points, which was how much that problem was worth.
                </p>

                <h2 className="text-xl font-bold">Planning for Grade 10</h2>

                <p className="my-4">
                    After being in virtual school for a while, I decided that I did not wish to return to MMR. The simple reason for it was that it was too far. Having to wake up at 6:45 AM every morning was definitely not my cup of tea, and I also saw no real distinction between the gifted program and the regular academic stream. As a result, I underwent the transfer process and transferred to my local home school: Dr. Frank J. Hayden Secondary School. As a result, I had to do course selection manually with the guidance counselor, rather than submit my courses through myBlueprint normally. I submitted the school transfer form and selected my courses (which I will go over in my next blog post) and was set to become a Hayden student effective September 2021.
                </p>

                <p className="my-4">
                    Something else I did was take Civics and Careers (CHV2O1 and GLC2O1) in summer 2021. I figured these courses were quite simple vs. the more academic courses, and wanted to get them over with. Nothing of major interest really happened during these courses, apart from my hospitalization for a few days due to getting myocarditis from the COVID-19 vaccine.
                </p>

                <h2 className="text-xl font-bold">Final Reflection of Grade 9</h2>
                
                <p className="my-4">
                    Looking back, I must say my grade 9 year was&#8230; different. I did not get the normal high school experience, including academically, extracurriculars, and socially. I did not join any clubs in school as there were no regular clubs that I could join easily in virtual school. I did, however, complete my forty required hours of community service to graduate in grade 9. At that point, I still did not know what I wanted to do after high school, so I did not really have any goals for what grade average I wanted. My grade 9 grades were the lowest of all of my high school grades (at the time of writing), with my mark in French (FSF1D5) being my only sub-90 mark. I definitely think that COVID-19 caused my impression of high school to be extremely skewed and I do think this was a very unique 9th grade experience. Overall, I don't have any regrets about grade 9, but I must say I do not miss it that much, at least the academic side of it. 
                </p>

                <p className="my-4 mb-10">
                    Grade 9 was definitely a long year, and I certainly missed many parts of it in this blog post. If anything really important comes to mind, I will update this blog post with that. Otherwise, thank you very much for reading this post! I truly appreciate it, and I hope to see you in the next one!
                </p>

                <HashLink smooth to="/blog/grade-9#top" className="flex items-center mb-10 text-pink-600 hover:underline group">
                    <ChevronDoubleUpIcon className="w-4 mr-3 group-hover:animate-bounce" />
                    <span>Back to Top</span>
                </HashLink>

            </div>
        </div>
    );
}

export default Grade9;