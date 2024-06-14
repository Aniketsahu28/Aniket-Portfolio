import React from 'react'
import ExperienceCard from './ExperienceCard'

const Experiences = () => {

    const experiences = [
        {
            title: "Full Stack developer @Revergon Solutions",
            startDate: "30th May, 2024",
            endDate: "31st July, 2024",
            location: "Navi Mumbai, India",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt impedit accusantium fuga, eveniet modi cumque sint magnam officiis adipisci exercitationem doloremque expedita, ratione doloribus fugiat. Repellendus, alias itaque. Ipsam earum, facilis obcaecati totam, quas rem nisi autem eligendi voluptatem, doloremque eum distinctio debitis? Maxime, doloremque sed repellendus perspiciatis repellat, minima nisi vel adipisci iure delectus et earum provident nostrum! Fuga?",
            tags: ["Figma", "AR-VR", "Wordpress"]
        },
        {
            title: "Frontend developer @Ideaplots",
            startDate: "October 6, 2023",
            endDate: "Present",
            location: "Navi Mumbai, India",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt impedit accusantium fuga, eveniet modi cumque sint magnam officiis adipisci exercitationem doloremque expedita, ratione doloribus fugiat. Repellendus, alias itaque. Ipsam earum, facilis obcaecati totam, quas rem nisi autem eligendi voluptatem, doloremque eum distinctio debitis? Maxime, doloremque sed repellendus perspiciatis repellat, minima nisi vel adipisci iure delectus et earum provident nostrum! Fuga? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt impedit accusantium fuga, eveniet modi cumque sint magnam officiis adipisci exercitationem doloremque expedita, ratione doloribus fugiat. Repellendus, alias itaque. Ipsam earum, facilis obcaecati totam, quas rem nisi autem eligendi voluptatem, doloremque eum distinctio debitis? Maxime, doloremque sed repellendus perspiciatis repellat, minima nisi vel adipisci iure delectus et earum provident nostrum! Fuga?",
            tags: ["React", "Tailwind css", "Figma"]
        },
    ]

    return (
        <div className='text-white text-center px-[20px] flex-col gap-6 lap:gap-14 flex py-8 lap:py-16 lap:px-28 w-full'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='w-fit flex flex-col items-center text-[#1AC576]'>
                    <h2 className='text-4xl lap:text-6xl font-semibold mb-2 font-karla'>Experiences</h2>
                    <hr className='w-[70%] h-[2px] lap:h-[3px] font-bold bg-[#1AC576]' />
                </div>
                <p className='font-inter lap:text-md'>Here is a quick summary of my recent experiences</p>
            </div>
            <div className='flex flex-col lap:w-[70%] items-center justify-center gap-6 mx-auto'>
                {experiences.map((experience, i) => (
                    <ExperienceCard experience={experience} key={"experience" + i} />
                ))}
            </div>
        </div>
    )
}

export default Experiences
