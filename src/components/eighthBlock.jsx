import React from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../layout/wrapper'

function EighthBlock() {
	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, staggerChildren: 0.3 },
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	}

	return (
		<motion.div
			className='eighthBlock mt-[50px] font-Poppins'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			variants={containerVariants}
		>
			<motion.img
				src='/assets/logo.png'
				alt='logo'
				className='w-[100px] md:w-[250px]'
				variants={itemVariants}
			/>
			<Wrapper>
				<motion.h2
					className='text-white text-[25px] md:text-[40px] md:ml-[100px] mx-[20px] md:mx-0 mt-[50px] md:mt-0 ml-[40px]'
					variants={itemVariants}
				>
					Visualization #3
				</motion.h2>
			</Wrapper>
		</motion.div>
	)
}

export default EighthBlock
