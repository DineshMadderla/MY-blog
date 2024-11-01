import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Check out my E-commerce project
            </h2>
            <p className='text-gray-500 my-2'>
            Built using Typescript, MERN stack
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://ecommerce-frontend-nph5reww3-dineshs-projects-b9fd8385.vercel.app" target='_blank' rel='noopener noreferrer'>
                    Project Live Demo
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://res.cloudinary.com/djpw8bx9x/image/upload/v1729379509/Screenshot_2024-10-20_043720_tbupsx.png" />
        </div>
    </div>
  )
}
