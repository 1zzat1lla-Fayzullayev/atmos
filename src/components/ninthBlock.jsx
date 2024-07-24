import React from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../layout/wrapper'

function NinthBlock() {
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
			className='relative font-Poppins bg-[#232429]'
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
					className='flex flex-col md:flex-row items-end justify-between gap-[50px] relative xl:mx-0 overflow-hidden'
					variants={containerVariants}
				>
					<motion.div
						className='flex flex-col gap-[50px] md:gap-[100px] mx-[30px] xl:mx-0'
						variants={itemVariants}
					>
						<div className='flex flex-col mt-[30px] lg:mt-0'>
							<div className='flex items-center gap-[14px]'>
								<img
									src='/assets/orange_arrow.png'
									alt='arrow'
									className='w-[25px]'
								/>
								<p className='text-[#C79660] font-semibold uppercase'>
									ATMOS Steam CLUB
								</p>
							</div>
							<motion.h2
								className='text-[24px] md:text-[30px] lg:text-[40px] max-w-[640px] leading-[30px] md:leading-[40px] lg:leading-[45px] text-[#C79660]'
								variants={itemVariants}
							>
								Atmos Steam Club experience goes beyond the ordinary
							</motion.h2>
						</div>

						<motion.div
							className='text-[14px] md:text-[16px] lg:text-[18px] flex flex-col gap-[20px] xl:ml-[70px]'
							variants={itemVariants}
						>
							{/* Details */}
							<div className='flex items-center gap-[15px]'>
								<img
									src='/assets/orange_star.png'
									alt='star'
									className='w-[25px]'
								/>
								<div className='flex flex-col'>
									<p className='text-white'>Worldwide network</p>
									<div className='text-[#C79660] text-[14px]'>
										<p>
											10+ stationary and pop-up Steam Centers around the world
										</p>
										<p>15+ Steam Centers will be opened in 2024-2026 </p>
										<p>17+ years of guided communal steam experience</p>
									</div>
								</div>
							</div>
							<div className='flex items-center gap-[15px]'>
								<img
									src='/assets/orange_star.png'
									alt='star'
									className='w-[25px]'
								/>
								<div className='flex flex-col'>
									<p className='text-white'>Dedicated team</p>
									<p className='text-[#C79660] text-[14px]'>
										200+ active practitioners, steam facilitators and steam
										guides around the world in constant development and
										reshaping of new communal steam protocols
									</p>
								</div>
							</div>
							<div className='flex items-center gap-[15px]'>
								<img
									src='/assets/orange_star.png'
									alt='star'
									className='w-[25px]'
								/>
								<div className='flex flex-col'>
									<p className='text-white'>Inspired customers</p>
									<div className='text-[#C79660] text-[14px]'>
										<p>
											1,000+ communal steam repeat customers around the world
										</p>
										<p>13,000+ of carried out sessions</p>
										<p>10,000+ customer sessions served</p>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>

					<div className='flex flex-col items-center'>
						<motion.img
							src='/assets/ninthBlock1.png'
							alt='image1'
							className='w-full opacity-60 fill-transparent'
							variants={itemVariants}
						/>
						<img src='/assets/stars.png' alt='star' className='px-[20px] xl:px-0' />
					</div>
				</motion.div>
			</Wrapper>
			<motion.div
				className='flex items-start justify-start ml-[30px] mt-8'
				variants={itemVariants}
			>
				<div className='flex flex-col items-center justify-start gap-[10px] md:gap-[20px]'>
					<div className='w-[2px] h-[50px] md:h-[65px] bg-[#C79660] rounded-[20px]'></div>
					<p className='text-[#C79660]'>09</p>
				</div>
			</motion.div>
		</motion.div>
	)
}

export default NinthBlock
