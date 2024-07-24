import React from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../layout/wrapper'

function ThirteenthBlock() {
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
					className='flex flex-col items-start justify-between pt-[50px] md:pt-[100px] relative xl:mx-0 overflow-hidden mx-[20px] '
					variants={containerVariants}
				>
					<div className='flex flex-col'>
						<div className='flex items-center gap-[14px]'>
							<img
								src='/assets/orange_arrow.png'
								alt='arrow'
								className='w-[25px]'
							/>
							<p className='text-[#C4945E] font-semibold uppercase'>SUMMARY</p>
						</div>
						<h2 className='text-[20px] md:text-[30px]'>Structural essentials</h2>
					</div>
					<div className='flex flex-col lg:flex-row text-center md:text-start items-center justify-center gap-[150px] mt-[50px] md:mt-0'>
						<div className='flex flex-col items-center md:items-start gap-[10px] lg:gap-[20px] lg:w-[370px]'>
							<img
								src='/assets/thirteenth_1.png'
								alt='404'
								className='w-[70px] md:w-[100px]'
							/>
							<h2 className='text-[#C4945E] text-[18px]'>
								Profit distribution
							</h2>
							<p className='text-[14px] md:text-[16px]'>
								Net profit will be fully distributed at least once a year in the
								form of dividends among all investors.
							</p>
							<p className='text-[14px] md:text-[16px]'>
								LP investors (shareholders) will have priority for payouts for
								first 12% return on investment
							</p>
						</div>
						<div className='flex items-center flex-col gap-[30px]'>
							<div className='flex flex-col sm:flex-row items-center gap-[50px]'>
								<div className='flex flex-col gap-[20px] w-full items-center md:items-start'>
									<img
										src='/assets/thirteenth_2.png'
										alt='404'
										className='w-[70px] md:w-[100px]'
									/>
									<h2 className='text-[#C4945E] text-[18px]'>
										Form of participation
									</h2>
									<p className='w-[180px] text-[14px] md:text-[16px]'>
										Preferred shares in PT. Essential Steam Bali
									</p>
								</div>
								<div className='flex flex-col gap-[20px] w-full items-center md:items-start'>
									<img
										src='/assets/thirteenth_3.png'
										alt='404'
										className='w-[70px] md:w-[100px]'
									/>
									<h2 className='text-[#C4945E] text-[18px]'>
										Form of participation
									</h2>
									<p className='w-[180px] text-[14px] md:text-[16px]'>
										Preferred shares in PT. Essential Steam Bali
									</p>
								</div>
							</div>
							<div className='flex flex-col sm:flex-row items-center gap-[50px]'>
								<div className='flex flex-col gap-[20px] w-full items-center md:items-start '>
									<img
										src='/assets/twelfth_3.png'
										alt='404'
										className='w-[70px] md:w-[100px]'
									/>
									<h2 className='text-[#C4945E] text-[18px]'>
										Form of participation
									</h2>
									<p className='w-[180px] text-[14px] md:text-[16px]'>
										Preferred shares in PT. Essential Steam Bali
									</p>
								</div>
								<div className='flex flex-col gap-[20px] w-full items-center md:items-start mt-[55px]'>
									<img
										src='/assets/thirteenth_4.png'
										alt='404'
										className='w-[70px] md:w-[100px]'
									/>
									<h2 className='text-[#C4945E] text-[18px]'>
										Form of participation
									</h2>
									<p className='w-[180px] text-[14px] md:text-[16px]'>
										Preferred shares in PT. Essential Steam Bali
									</p>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</Wrapper>
			<motion.div
				className='flex items-start justify-start ml-[30px] mt-8'
				variants={itemVariants}
			>
				<div className='flex flex-col items-center justify-start gap-[10px] md:gap-[20px]'>
					<div className='w-[2px] h-[50px] md:h-[65px] bg-black rounded-[20px]'></div>
					<p>13</p>
				</div>
			</motion.div>
		</motion.div>
	)
}

export default ThirteenthBlock
