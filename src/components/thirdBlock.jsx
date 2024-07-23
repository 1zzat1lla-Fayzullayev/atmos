import React from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../layout/wrapper'

function ThirdBlock() {
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
			className='bg-[#272727] font-Poppins'
			initial='hidden'
			animate='visible'
			variants={containerVariants}
		>
			<motion.img
				src='/assets/glavniy_logo_orange.png'
				alt='logo'
				className='w-[60px] m-3 pt-[15px]'
				variants={itemVariants}
			/>
			<Wrapper>
				<motion.div
					className='flex flex-col md:flex-row items-center justify-between gap-[30px] md:gap-[50px] lg:gap-[100px] xl:gap-[200px] relative xl:mx-0 overflow-hidden'
					variants={containerVariants}
				>
					<motion.div
						className='flex flex-col gap-[30px] md:gap-[100px] mx-[20px] md:mx-[30px] xl:mx-0'
						variants={itemVariants}
					>
						<motion.h2
							className='text-[#C4945E] text-[24px] md:text-[30px] lg:text-[40px] max-w-[440px] leading-[30px] md:leading-[40px] lg:leading-[45px] mt-[30px] md:mt-[50px] lg:mt-[100px]'
							variants={itemVariants}
						>
							Atmos Steam Club joins Family Nest Bali
						</motion.h2>
						<motion.div
							className='text-[14px] text-[#C4945E] md:text-[16px] lg:text-[18px] ml-[40px] md:ml-[70px]'
							variants={itemVariants}
						>
							<p>
								Our vision is to create the perfect vacation for the whole
								family with kids, which is why we are so committed to providing
								parents with
							</p>
							<p className='mt-4 text-white'>
								Atmos Steam Club is an investment opportunity to contribute to
								the formation of new standards
							</p>
						</motion.div>
					</motion.div>
					<motion.div
						className='flex flex-col gap-[10px] md:gap-[20px] mx-[20px] md:mx-[30px] xl:mx-0'
						variants={itemVariants}
					>
						<motion.img
							src='/assets/third_1.jpg'
							alt='image1'
							className='w-full'
							variants={itemVariants}
						/>
						<motion.div
							className='flex flex-col md:flex-row items-center'
							variants={itemVariants}
						>
							<motion.div
								className='flex items-center flex-col lg:flex-row'
								variants={itemVariants}
							>
								<motion.div
									className='flex items-center flex-col lg:flex-row'
									variants={itemVariants}
								>
									<motion.div
										className='flex items-center'
										variants={itemVariants}
									>
										<motion.img
											src='/assets/orange_arrow.png'
											alt='arrow'
											className='w-[40px] md:w-[60px] mt-[20px] md:mt-[40px] mr-[5px] md:mr-[10px]'
											variants={itemVariants}
										/>
										<motion.img
											src='/assets/FAM_NEST_logo.png'
											alt='logo1'
											className='w-[180px] md:w-[280px]'
											variants={itemVariants}
										/>
									</motion.div>
									<motion.img
										src='/assets/logo.png'
										alt='logo2'
										className='w-[100px] md:w-[150px] mt-[10px] md:mt-[20px]'
										variants={itemVariants}
									/>
								</motion.div>
							</motion.div>
						</motion.div>
					</motion.div>
				</motion.div>
			</Wrapper>
			<motion.div
				className='flex items-start justify-start ml-[20px] md:ml-[30px] mt-8'
				variants={itemVariants}
			>
				<div className='flex flex-col items-center justify-start gap-[10px] md:gap-[20px]'>
					<div className='w-[2px] h-[50px] md:h-[65px] bg-[#C4945E] rounded-[20px]'></div>
					<p className='text-[#C4945E]'>03</p>
				</div>
			</motion.div>
			<motion.img
				src='/assets/bottom_orange_icon.png'
				alt='bottom_icon'
				className='w-full mt-[20px] md:mt-[30px]'
				variants={itemVariants}
			/>
		</motion.div>
	)
}

export default ThirdBlock
