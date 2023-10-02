import React from 'react'

const Footer = () => {
    return (
        <footer className='mt-auto flex flex-col items-center text-white mb-6 gap-2 md:flex-row md:justify-evenly'>
            
            <div className='flex gap-x-4 md:order-last'>
                <a className='text-3xl hover:animate-bounce' target='_blank' href="https://github.com/rdsilvadev">
                    <i className='bx bxl-github' ></i>
                </a>

                <a className='text-3xl hover:animate-bounce' target='_blank' href="https://www.linkedin.com/in/rdsilvadev/">
                    <i className='bx bxl-linkedin-square' ></i>
                </a>

                <a className='text-3xl hover:animate-bounce' target='_blank' href="https://rdsilvadev-portfolio.netlify.app/">
                    <i class='bx bxs-user-circle'></i>
                </a>

            </div>

            <p className='text-xs sm:text-base md:order-2'>• Copyright ©2023 | All rights reserved •</p>
            <p className='text-xs sm:text-base'>@rdsilvadev</p>
        </footer>
    )
}

export default Footer
