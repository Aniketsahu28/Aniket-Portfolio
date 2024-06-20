import React from 'react'
import comment from "../assets/comment.png"
import thejus from "../assets/thejus.png"
import abhishek from "../assets/abhishek.jpg"

const Testimonials = () => {
    const testimonials = [
        {
            comment: "Flexibility that the website offers across screens is nothing short of remarkable, ensuring a seamless experience that's both user-friendly and visually stunning.",
            image: abhishek,
            name: "Abhishek Sahu",
            position: ""
        },
        {
            comment: "The platform is engaging, user-friendly and captured the spirit of our event. The commitment were commendable, contributing significant to our fest's success.",
            image: thejus,
            name: "Thejus Pradeep",
            position: "Ex Joint Secretary of Student Council"
        },
    ]
    return (
        <div className='text-white text-center px-[20px] flex-col gap-6 lap:gap-14 flex py-8 lap:py-16 lap:px-28 w-full'>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center gap-4'>
                <div className='w-fit flex flex-col items-center text-[#1AC576]'>
                    <h2 className='text-4xl lap:text-6xl font-semibold mb-2 font-karla'>Testimonials</h2>
                    <hr className='w-[70%] h-[2px] lap:h-[3px] font-bold bg-[#1AC576]' />
                </div>
                <p className='font-inter lap:text-md'>What others say about me</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col lap:flex-row lap:flex-wrap items-center justify-center gap-6 lap:gap-10 font-inter'>
                {
                    testimonials.map((testimonial, i) => (
                        <div key={i} className='border-[3px] border-[#0E76D8] rounded-xl flex flex-col gap-4 p-[20px] lap:w-[30%]'>
                            <img src={comment} alt="icon" className='w-8' />
                            <p className='text-left'>{testimonial.comment}</p>
                            <div className='flex mt-4 gap-4'>
                                <img src={testimonial.image} alt="person" className='h-12 rounded-full' />
                                <div className='text-start flex items-center'>
                                    <p className='text-[18px]'>
                                        <span className='text-[#0E76D8]'>@</span> {testimonial.name} <br />
                                        {testimonial.position && <span className='text-[14px] opacity-80'>{testimonial.position}</span>}
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
