import React from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../layout/wrapper'

function EleventhBlock() {
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
		<>
			<motion.div
				ref={ref}
				className='relative font-Poppins mt-12 flex flex-col lg:flex-row'
				initial='hidden'
				animate={controls}
				variants={containerVariants}
			>
				<motion.img
					src='/assets/glavniy_logo.png'
					alt='logo'
					className='w-16 m-3 absolute top-0 left-0'
					variants={itemVariants}
				/>
				<Wrapper>
					<motion.div
						className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 xl:gap-40 pt-12 lg:pt-24 relative xl:mx-0 overflow-hidden'
						variants={containerVariants}
					>
						<div className='mt-12 lg:mt-0 mx-[20px] lg:mx-0'>
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
							<h2 className='text-2xl lg:text-3xl leading-8 lg:leading-9 mt-4 lg:mt-6 lg:w-[250px]'>
								Investment offer in a nutshell
							</h2>
							<div className='my-5 lg:my-10'>
								{[
									{ title: 'Round B2', amount: '$ 900,000', number: '1' },
									{ title: 'Valuation*', amount: '$ 2,500,000', number: '2' },
									{
										title: 'Investment ticket size',
										amount: 'From $ 50,000',
										number: '3',
									},
									{
										title: 'Internal rate of return',
										amount: 'From 19% to 30%',
										number: '4',
									},
								].map((item, index) => (
									<div key={index} className='flex items-start gap-4 mb-5'>
										<div className='relative'>
											<img
												src='/assets/orange_star.png'
												alt='star'
												className='w-20'
											/>
											<h5 className='absolute top-5 right-9 text-[#C4945E] font-semibold text-lg'>
												{item.number}
											</h5>
										</div>
										<div className='flex flex-col gap-2'>
											<h3 className='text-[#C4945E] text-lg'>{item.title}</h3>
											<p className='text-sm'>{item.amount}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</motion.div>
				</Wrapper>
				<div className='bg-[#22242A] py-12 pb-[130px] md:pb-0 lg:py-32 w-full lg:w-1/2 flex justify-center items-center'>
					<Wrapper>
						<div className='flex flex-col justify-center items-center text-center gap-5'>
							<div className='flex flex-col lg:flex-row items-center gap-5 w-full'>
								{[
									{
										title: 'LP',
										description: 'You, investors & Family Nest Bali',
										ownership: '57% ownership',
									},
									{
										title: 'GP',
										description: 'Essential Steam, LLC. California',
										ownership: '43% ownership',
									},
								].map((item, index) => (
									<div key={index} className='flex flex-col items-center'>
										<div className='border border-black flex flex-col gap-3 lg:w-[213px] w-full text-center items-center p-3'>
											<h3 className='text-[#C4945E] text-base lg:text-lg'>
												{item.title}
											</h3>
											<p className='text-white text-sm lg:text-base'>
												{item.description}
											</p>
											<p className='text-[#C4945E] text-sm lg:text-base'>
												{item.ownership}
											</p>
										</div>
										<img
											src='/assets/bottom_arrow.png'
											alt='arrow'
											className='w-10 lg:w-12'
										/>
									</div>
								))}
							</div>
							<div className='flex flex-col items-center mt-5'>
								<div className='border border-black w-full lg:w-[445px] flex flex-col items-center p-3'>
									<h3 className='text-[#C4945E] text-base lg:text-lg text-center'>
										PROJECT HOLDER
									</h3>
									<p className='text-white text-sm lg:text-base w-[180px] lg:w-[200px]'>
										Essential Steam Bali, PT. PMA, Indonesia
									</p>
								</div>
								<img
									src='/assets/bottom_arrow.png'
									alt='arrow'
									className='w-10 lg:w-12'
								/>
							</div>
							<div className='flex flex-col items-center mt-5'>
								<img
									src='/assets/eleventh_1.png'
									alt='ownership structure'
									className='w-24 lg:w-28'
								/>
								<h3 className='text-white text-xl lg:text-2xl mt-4'>
									Ownership structure
								</h3>
							</div>
						</div>
					</Wrapper>
					<motion.div
						className='flex items-start justify-start ml-8 mt-8 absolute left-0 bottom-0'
						variants={itemVariants}
					>
						<div className='flex flex-col items-center justify-start gap-4'>
							<div className='w-[2px] h-12 lg:h-16 bg-black rounded-full'></div>
							<p className='text-lg lg:text-xl'>11</p>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</>
	)
}

export default EleventhBlock
