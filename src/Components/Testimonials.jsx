import React from 'react'
import comment from "../assets/comment.png"
import thejus from "../assets/thejus.png"

const Testimonials = () => {
    const testimonials = [
        {
            comment: "I'm delighted to provide a testimonial for our college fest webiste. The platform is engaging, user-friendly and captured the spirit of our event. Their commitment were commendable, contributing significant to our fest's success.",
            image: thejus,
            name: "Thejus Pradeep",
            position: "Joint Secretary of Student Council"
        },
        {
            comment: "I'm delighted to provide a testimonial for our college fest webiste. The platform is engaging, user-friendly and captured the spirit of our event. Their commitment were commendable, contributing significant to our fest's success.",
            image: thejus,
            name: "Thejus Pradeep",
            position: "Joint Secretary of Student Council"
        },
        {
            comment: "I'm delighted to provide a testimonial for our college fest webiste. The platform is engaging, user-friendly and captured the spirit of our event. Their commitment were commendable, contributing significant to our fest's success.",
            image: thejus,
            name: "Thejus Pradeep",
            position: "Joint Secretary of Student Council"
        }
    ]
    return (
        <div className='text-white text-center px-[20px] flex-col gap-6 lap:gap-14 flex py-8 lap:py-16 lap:px-28 w-full'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='w-fit flex flex-col items-center text-[#1AC576]'>
                    <h2 className='text-4xl lap:text-6xl font-semibold mb-2 font-karla'>Testimonials</h2>
                    <hr className='w-[70%] h-[2px] lap:h-[3px] font-bold bg-[#1AC576]' />
                </div>
                <p className='font-inter lap:text-md'>What others say about me</p>
            </div>
            <div className='flex flex-col lap:flex-row lap:flex-wrap items-center justify-center gap-6 lap:gap-10 font-inter'>
                {
                    testimonials.map((testimonial, i) => (
                        <div key={i} className='border-[3px] border-[#0E76D8] rounded-xl flex flex-col gap-4 p-[20px] lap:w-[30%]'>
                            <img src={comment} alt="icon" className='w-8' />
                            <p className='text-left'>{testimonial.comment}</p>
                            <div className='flex mt-4 gap-4'>
                                <img src={testimonial.image} alt="person" className='h-12' />
                                <div className='text-start'>
                                    <p className='text-[18px]'>
                                        <span className='text-[#0E76D8]'>@</span> {testimonial.name} <br />
                                        <span className='text-[14px] opacity-80'>{testimonial.position}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials
