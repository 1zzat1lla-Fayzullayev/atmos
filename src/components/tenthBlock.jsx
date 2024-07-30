import React from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../layout/wrapper'

function TenthBlock() {
	const controls = useAnimation()
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	})

	React.useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

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
			ref={ref}
			className='relative font-Poppins mt-[50px]'
			initial='hidden'
			animate={controls}
			variants={containerVariants}
		>
			<motion.img
				src='/assets/glavniy_logo.png'
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
						className='grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-[50px] xl:gap-[70px] mx-[30px] xl:mx-0'
						variants={itemVariants}
					>
						<div className='flex flex-col items-center text-start'>
							<img
								src='/assets/tenth_1.jpg'
								alt='Boris Ryabov'
								className='w-[180px] mb-3'
							/>
							<h3 className='text-[#C79660] text-[20px] mb-1'>Boris Ryabov</h3>
							<p className='text-[16px] mb-3'>CEO / Co-Founder</p>
							<div className='flex items-center gap-2 mb-2'>
								<img src='/assets/star.png' alt='star' className='w-[17px]' />
								<p className='text-[14px] w-[270px]'>
									Steam practitioner, entrepreneur and teacher for 10+ years
								</p>
							</div>
							<div className='flex items-center gap-2 mb-2'>
								<img src='/assets/star.png' alt='star' className='w-[17px]' />
								<p className='text-[14px] w-[270px]'>
									12 years in PE/VC (Bright Capital, Maratika)
								</p>
							</div>
						</div>

						<div className='flex flex-col items-center text-start'>
							<img
								src='/assets/tenth_2.jpg'
								alt='Alex Baybarin'
								className='w-[180px] mb-3'
							/>
							<h3 className='text-[#C79660] text-[20px] mb-1'>Alex Baybarin</h3>
							<p className='text-[16px] mb-3'>
								Chief Product Officer / Co-Founder
							</p>
							<div className='flex items-center gap-2 mb-2'>
								<img src='/assets/star.png' alt='star' className='w-[17px]' />
								<p className='text-[14px] w-[270px]'>
									Steam and holistic wellbeing practitioner for over 15 years
								</p>
							</div>
							<div className='flex items-center gap-2 mb-2'>
								<img src='/assets/star.png' alt='star' className='w-[17px]' />
								<p className='text-[14px] w-[270px]'>
									Art of Steam camp lead at Burning Man
								</p>
							</div>
							<div className='flex items-center gap-2 mb-2'>
								<img src='/assets/star.png' alt='star' className='w-[17px]' />
								<p className='text-[14px] w-[270px]'>
									President of Steamology Institute
								</p>
							</div>
						</div>

						<div className='flex flex-col items-center text-start relative mt-[20px]'>
							<img src="/public/assets/atmos_r.png" alt="404" className='absolute w-[187px] top-[-6%]' />
							<img
								src='/public/assets/tenth_3.JPG'
								alt='Alex Volvak'
								className='w-[180px] mb-3 rounded-full filter grayscale-[100%]'
							/>
							<h3 className='text-[#C79660] text-[20px] mb-1'>Alex Volvak</h3>
							<p className='text-[16px] mb-3 w-full'>
								Chief Operations / Partnerships
							</p>
							<div className='flex items-center gap-2 mb-2'>
								<img src='/assets/star.png' alt='star' className='w-[17px]' />
								<p className='text-[14px] w-[270px]'>
									Launched several wellness, fashion and restaurant chains with
									100+ outlets in Europe and EMEA over the course of 10 years
								</p>
							</div>
							<div className='flex items-center gap-2 mb-2'>
								<img src='/assets/star.png' alt='star' className='w-[17px]' />
								<p className='text-[14px] w-[270px]'>
									Serial entrepreneur with 17+ years of experience in e-com,
									wellness and HoReCa
								</p>
							</div>
						</div>

						<div className='flex flex-col items-center text-start relative mt-[20px]'>
							<img src="/public/assets/atmos_r.png" alt="404" className='absolute w-[187px] top-[-6%]' />
							<img
								src='/assets/tenth_4.JPG'
								alt='Pāvels Janševskis'
								className='w-[180px] mb-3 rounded-full filter grayscale-[100%]'
							/>
							<h3 className='text-[#C79660] text-[20px] mb-1'>
								Pāvels Janševskis
							</h3>
							<p className='text-[16px] mb-3'>
								Chief Project Development / Local Partner in Bali
							</p>
							<div className='flex items-center gap-2 mb-2'>
								<img src='/assets/star.png' alt='star' className='w-[17px]' />
								<p className='text-[14px] w-[270px]'>
									Steam culture and intentional communities adept
								</p>
							</div>
							<div className='flex items-center gap-2 mb-2'>
								<img src='/assets/star.png' alt='star' className='w-[17px]' />
								<p className='text-[14px] w-[270px]'>
									Real estate developer with a portfolio of completed
									residential, office and mixed-use projects
								</p>
							</div>
							<div className='flex items-center gap-2 mb-2'>
								<img src='/assets/star.png' alt='star' className='w-[17px]' />
								<p className='text-[14px] w-[270px]'>
									He is now focused on developing a new family "experience
									hotel" in Bali
								</p>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</Wrapper>
			<motion.div
				className='flex items-start justify-start ml-[30px] mt-8'
				variants={itemVariants}
			>
				<div className='flex flex-col items-center justify-start gap-[10px] md:gap-[20px]'>
					<div className='w-[2px] h-[50px] md:h-[65px] bg-black rounded-[20px]'></div>
					<p>10</p>
				</div>
			</motion.div>
			<motion.img
				src='/assets/bottom_icon.svg'
				alt='bottom_icon'
				className='w-full mt-[20px] md:mt-[30px]'
				variants={itemVariants}
			/>
		</motion.div>
	)
}

export default TenthBlock
