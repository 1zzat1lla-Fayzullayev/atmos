import React from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../layout/wrapper'

function FourthBlock() {
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
			className='relative font-Poppins'
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
								<p className='text-[#C4945E] font-semibold uppercase'>
									ATMOS Steam CLUB
								</p>
							</div>
							<motion.h2
								className='text-[24px] md:text-[30px] lg:text-[40px] max-w-[640px] leading-[30px] md:leading-[40px] lg:leading-[45px]'
								variants={itemVariants}
							>
								Atmos Steam Club experience goes beyond the ordinary
							</motion.h2>
						</div>

						<motion.div
							className='text-[14px] md:text-[16px] lg:text-[18px] flex flex-col gap-[20px] xl:ml-[70px]'
							variants={itemVariants}
						>
							<div className='flex items-center gap-[15px]'>
								<img src='/assets/star.png' alt='star' className='w-[25px]' />
								<p>
									Over fifteen years of research in traditional steam practices
									have created tailored session protocols bridging guided
									meditation,
								</p>
							</div>
							<div className='flex items-center gap-[15px]'>
								<img src='/assets/star.png' alt='star' className='w-[25px]' />
								<p>
									All sessions are run by qualified facilitators, who are
									continuously educated by Steamology Institute and within the
									practitioner
								</p>
							</div>
							<div className='flex items-center gap-[15px]'>
								<img src='/assets/star.png' alt='star' className='w-[25px]' />
								<p>
									Protocols are developed and adjusted specifically for each
									Steam Center, depending on their purpose (stress relief,
									corporate bonding, men/women circles, community
									development...) and cultural
								</p>
							</div>
						</motion.div>
					</motion.div>
					<motion.div
						className='flex flex-col gap-[15px] md:gap-[30px] mx-[30px] xl:mx-0'
						variants={itemVariants}
					>
						<motion.img
							src='/assets/fourth_1.jpg'
							alt='image1'
							className='w-full'
							variants={itemVariants}
						/>
					</motion.div>
					<motion.img
						src='/assets/secondBlock_logo.png'
						alt='logo'
						className='absolute w-[100px] md:w-[150px] right-[-20px] md:right-[-50px] xl:right-0 md:top-[500px] xl:top-[120px] hidden md:flex'
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
					<p>04</p>
				</div>
			</motion.div>
		</motion.div>
	)
}

export default FourthBlock
