import React from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../layout/wrapper'

function TwelfthBlock() {
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
			transition: { duration: 0.6, staggerChildren: 0.3 },
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	}

	return (
		<motion.div
			ref={ref}
			className='relative font-Poppins mt-12 flex flex-col lg:flex-row-reverse'
			initial='hidden'
			animate={controls}
			variants={containerVariants}
		>
			<motion.img
				src='/assets/glavniy_logo_orange.png'
				alt='logo'
				className='w-16 m-3 absolute top-0 left-0'
				variants={itemVariants}
			/>
			<Wrapper>
				<motion.div
					className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 xl:gap-40 pt-12 lg:pt-24 relative xl:mx-0 overflow-hidden pb-[100px]'
					variants={containerVariants}
				>
					<div className='mt-12 lg:mt-0 mx-[20px] lg:mx-0'>
						<div className='flex flex-col gap-[50px] px-[20px]'>
							{[
								{
									title: '1st year',
									description: 'Profit $ 435,000',
								},
								{
									title: '5th year / stabilized CF',
									description: 'Profit $ 530,000',
									subDescription: 'Profitability 33.5 %',
								},
								{
									title: '5th year / full payback for investor',
									description: 'Running yield ~ 23%',
									subDescription: [
										'Valuation ~ 3,500,000',
										'IRR with exit @ year 5 ~ 26%',
									],
								},
							].map((item, index) => (
								<motion.div
									key={index}
									className='flex items-center gap-[15px]'
									variants={itemVariants}
								>
									<img
										src='/assets/orange_arrow.png'
										alt='arrow'
										className='w-[60px] xl:w-[65px]'
									/>
									<div className='flex flex-col gap-[7px]'>
										<h2 className='text-[17px] md:text-[18px]'>{item.title}</h2>
										<p className='text-[#C4945E] text-[14px] md:text-[16px]'>{item.description}</p>
										{item.subDescription && (
											<p className='text-[#C4945E] w-[197px] text-[14px] md:text-[16px]'>
												{Array.isArray(item.subDescription)
													? item.subDescription.join(' \n ')
													: item.subDescription}
											</p>
										)}
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</Wrapper>
			<div className='bg-[#22242A] py-12 pb-[130px] md:pb-0 lg:py-32 w-full lg:w-[65%] flex'>
				<Wrapper>
					<div className='flex flex-col'>
						<div className='flex flex-col mx-[20px] xl:mx-0'>
							<div className='flex items-center gap-4'>
								<img
									src='/assets/orange_arrow.png'
									alt='arrow'
									className='w-6'
								/>
								<p className='text-[#C4945E] font-semibold uppercase text-sm lg:text-base'>
									SUMMARY
								</p>
							</div>
							<h2 className='text-[17px] md:text-[25px] text-[#C4945E]'>
								Financial model essentials
							</h2>
						</div>
					</div>
					<div className='flex w-full justify-center flex-col items-start gap-[40px] mt-[50px]'>
						{[
							{
								image: '/assets/twelfth_1.png',
								title: 'Revenue at Stabilized Stage',
								description: '$ 1,630,000 per year',
							},
							{
								image: '/assets/twelfth_2.png',
								title: 'Free Cash Flow at Stabilized Stage',
								description: '$ 550,000 per year',
							},
							{
								image: '/assets/twelfth_3.png',
								title: 'Opening September 2024',
							},
						].map((item, index) => (
							<motion.div
								key={index}
								className='flex items-center gap-[10px] mx-[20px] xl:mx-0'
								variants={itemVariants}
							>
								<img
									src={item.image}
									alt='404'
									className='w-[60px] xl:w-[90px]'
								/>
								<div className='flex flex-col gap-[7px]'>
									<h3 className='text-[#C4945E] text-[16px] md:text-[20px]'>{item.title}</h3>
									{item.description && (
										<p className='text-white text-[14px] md:text-[16px]'>{item.description}</p>
									)}
								</div>
							</motion.div>
						))}
					</div>
				</Wrapper>
				<motion.div
					className='flex items-start justify-start ml-8 mt-[50px] absolute left-0 bottom-[1px] md:bottom-0'
					variants={itemVariants}
				>
					<div className='flex flex-col items-center justify-start gap-4'>
						<div className='w-[2px] h-12 lg:h-16 bg-[#C4945E] rounded-full'></div>
						<p className='text-lg lg:text-xl text-[#C4945E]'>12</p>
					</div>
				</motion.div>
			</div>
		</motion.div>
	)
}

export default TwelfthBlock
