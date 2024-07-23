import React from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../layout/wrapper'

function SecondBlock() {
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
			className='relative font-Poppins'
			initial='hidden'
			animate='visible'
			variants={containerVariants}
		>
			<motion.img
				src='/public/assets/glavniy_logo.png'
				alt='logo'
				className='w-[60px] m-3'
				variants={itemVariants}
			/>
			<Wrapper>
				<motion.div
					className='flex flex-col md:flex-row items-center justify-between gap-[50px] lg:gap-[100px] xl:gap-[200px] pt-[50px] md:pt-[100px] relative xl:mx-0 overflow-hidden'
					variants={containerVariants}
				>
					<motion.div
						className='flex flex-col gap-[50px] md:gap-[100px] mx-[30px] xl:mx-0'
						variants={itemVariants}
					>
						<motion.h2
							className='text-[24px] md:text-[30px] lg:text-[40px] max-w-[480px] leading-[30px] md:leading-[40px] lg:leading-[45px] mt-[50px] md:mt-[100px] lg:mt-[150px]'
							variants={itemVariants}
						>
							Essential Steam started at Burning Man
						</motion.h2>
						<motion.div
							className='text-[14px] md:text-[16px] lg:text-[18px]'
							variants={itemVariants}
						>
							<p>
								We started fifteen years ago as steam healing practitioners, and
								birthed the movement - Steamology - at Burning Man in 2016.
							</p>
							<p className='mt-4'>
								Since then, Essential Steam was formed to expand the steam
								offering to temporary and permanent projects in California,
								keeping the original spirit of sharing and transformation
								intact.
							</p>
							<p className='mt-4'>
								In partnership with Family Nest, we launch Atmos Steam Club in
								Bali, Indonesia.
							</p>
						</motion.div>
					</motion.div>
					<motion.div
						className='flex flex-col gap-[15px] md:gap-[30px] mx-[30px] xl:mx-0'
						variants={itemVariants}
					>
						<motion.img
							src='/assets/secondBlock_1.jpg'
							alt='image1'
							className='w-full'
							variants={itemVariants}
						/>
						<motion.img
							src='/assets/secondBlock_2.jpg'
							alt='image2'
							className='w-full'
							variants={itemVariants}
						/>
					</motion.div>
					<motion.img
						src='/assets/secondBlock_logo.png'
						alt='logo'
						className='absolute w-[100px] md:w-[150px] right-[-20px] md:right-[-70px] top-[770px] md:top-[300px] xl:top-[320px] hidden md:flex'
						variants={itemVariants}
					/>
				</motion.div>
			</Wrapper>
			<motion.div
				className='flex items-start justify-start ml-[30px] mt-8'
				variants={itemVariants}
			>
				<div className='flex flex-col items-center justify-start gap-[10px] md:gap-[20px]'>
					<div className='w-[2px] h-[50px] md:h-[65px] bg-black rounded-[20px]'></div>
					<p>02</p>
				</div>
			</motion.div>
			<motion.img
				src='/assets/secondBlock_bottom_icon.png'
				alt='bottom_icon'
				className='w-full mt-[20px] md:mt-[30px]'
				variants={itemVariants}
			/>
		</motion.div>
	)
}

export default SecondBlock
