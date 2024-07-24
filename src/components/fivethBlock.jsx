import React from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../layout/wrapper'

function FivethBlock() {
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
				src='/assets/glavniy_logo.png'
				alt='logo'
				className='w-[60px] m-3'
				variants={itemVariants}
			/>
			<Wrapper>
				<motion.div
					className='flex flex-col md:flex-row justify-between gap-[50px] xl:mx-0 '
					variants={containerVariants}
				>
					<motion.div
						className='flex flex-col mx-[30px] xl:mx-0'
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
							<div className='flex lg:items-center flex-col lg:flex-row gap-[30px] '>
								<div className='lg:border-r-[2px] lg:border-r-black pr-[30px]'>
									<motion.h2
										className='text-[24px] md:text-[30px] lg:text-[40px] leading-[30px] md:leading-[40px] lg:leading-[45px] xl:w-[670px]'
										variants={itemVariants}
									>
										Customer journey is fully guided by our trained session
										facilitators
									</motion.h2>
								</div>
								<p className='text-[#C4945E] lg:w-[450px] text-[25px]'>
									2 – 3 hours
								</p>
							</div>
						</div>
						<div className='flex items-start flex-col xl:flex-row gap-[30px] mt-[50px]'>
							<div className='flex xl:flex-col items-start flex-row'>
								<div className='flex items-center xl:gap-[20px] gap-[5px]'>
									<div>
										<h3 className='text-[#C4945E] xl:w-[130px] text-[16px] xl:text-[18px]'>
											Undress and prepare
										</h3>
										<p className='text-[12px] md:text-[15px]'>
											(culture-dependent degree of nakedness)
										</p>
									</div>
									<div className='w-[100px] h-[2px] xl:hidden bg-black'></div>
									<img
										src='/assets/1.png'
										alt='404'
										className='w-[50px] xl:w-[100px] flex xl:hidden'
									/>
								</div>

								<div className='w-[2px] hidden xl:flex h-[150px] bg-black ml-[50px] mt-[20px] mb-[20px]'></div>
							</div>
							<div className='flex xl:flex-col items-center xl:items-start flex-row gap-[5px] md:gap-[20px] xl:gap-0'>
								<div>
									<h3 className='text-[#C4945E] text-[16px] xl:text-[18px]'>
										Soft start: Slow temp rising for 20 minutes
									</h3>
									<ul className='xl:ml-[20px] flex flex-col gap-[10px]'>
										<li className='text-[12px] md:text-[15px] list-disc xl:max-w-[410px]'>
											Parasympathetic nervous system ("rest and digest") is
											activated – you feel relaxed
										</li>
										<li className='text-[12px] md:text-[15px] list-disc xl:max-w-[450px]'>
											While sympathetic nervous system ("fight or flight")
											activity is decreased — your mind calms down, fears and
											stress are gone for a while
										</li>
										<li className='text-[12px] md:text-[15px] list-disc'>
											Enhanced by group dynamics of all participants within a
											similar flow of states
										</li>
									</ul>
								</div>
								<div className='w-[100px] h-[2px] bg-black xl:hidden'></div>
								<img
									src='/assets/2.png'
									alt='404'
									className='w-[50px] xl:w-[100px] xl:hidden flex'
								/>
								<div className='w-[2px] h-[50px] hidden xl:flex bg-black ml-[100px] mt-[20px] mb-[20px]'></div>
							</div>

							<div className='flex xl:flex-col items-center gap-[5px] md:gap-[20px] xl:gap-0 xl:items-start flex-row'>
								<div>
									<h3 className='text-[#C4945E] text-[18px] xl:w-[320px]'>
										A deep cooling / heating up cycle & relaxation
									</h3>
									<ul className='xl:ml-[20px] flex flex-col gap-[10px]'>
										<li className='text-[12px] md:text-[15px] list-disc xl:max-w-[300px]'>
											Subtle sensations of the body arise leading the same
											concentration and reflection again.
										</li>
										<li className='text-[12px] md:text-[15px] list-disc xl:max-w-[300px]'>
											Session concludes with a deep relaxation afterwards.
										</li>
									</ul>
								</div>
								<div className='w-[100px] h-[2px] bg-black xl:hidden'></div>
								<img
									src='/assets/3.png'
									alt='404'
									className='w-[50px] xl:w-[100px] xl:hidden flex'
								/>
								<div className='w-[2px] hidden xl:flex h-[75px] bg-black ml-[90px] mt-[20px] mb-[20px]'></div>
							</div>
						</div>
						<div className='flex items-center justify-between'>
							<img
								src='/assets/1.png'
								alt='404'
								className='w-[100px] hidden xl:flex'
							/>
							<div className='w-[100px] h-[2px] bg-black mx-[10px] hidden xl:flex'></div>
							<img
								src='/assets/2.png'
								alt='404'
								className='w-[100px] hidden xl:flex'
							/>
							<div className='w-[100px] h-[2px] bg-black mx-[10px] hidden xl:flex'></div>
							<img
								src='/assets/3.png'
								alt='404'
								className='w-[100px] hidden xl:flex'
							/>
							<div className='w-[100px] h-[2px] bg-black mx-[10px] hidden xl:flex'></div>
							<img
								src='/assets/4.png'
								alt='404'
								className='w-[100px] hidden xl:flex'
							/>
							<div className='w-[100px] h-[2px] bg-black mx-[10px] hidden xl:flex'></div>
							<img
								src='/assets/5.png'
								alt='404'
								className='w-[100px] hidden xl:flex'
							/>
							<div className='w-[100px] h-[2px] bg-black mx-[10px] hidden xl:flex'></div>
							<img
								src='/assets/6.png'
								alt='404'
								className='w-[100px] hidden xl:flex'
							/>
							<div className='w-[100px] h-[2px] bg-black mx-[10px] hidden xl:flex'></div>
							<img
								src='/assets/1.png'
								alt='404'
								className='w-[100px] hidden xl:flex'
							/>
						</div>

						<div className='flex xl:grid grid-cols-5 place-content-center justify-end place-items-start gap-[50px] xl:gap-[230px] xl:pl-[200px] flex-col mt-[30px] xl:mt-0'>
							<div className='flex xl:flex-col-reverse items-center xl:items-start flex-row gap-[5px] md:gap-[20px] xl:gap-0'>
								<div>
									<h3 className='text-[#C4945E]'>Self-actualization</h3>
									<ul className='xl:ml-[20px]'>
										<li className='list-disc text-[12px] md:text-[13px] xl:w-[250px]'>
											A steam guide suggest to think about such questions like:
											”What is your intention? Why did you come here? Any fears
											or challenges”
										</li>
									</ul>
								</div>
								<div className='w-[100px] h-[2px] bg-black xl:hidden'></div>
								<img
									src='/assets/4.png'
									alt='404'
									className='w-[50px] xl:w-[100px] xl:hidden flex'
								/>
								<div className='w-[2px] h-[50px] bg-black hidden xl:flex ml-[30px] mt-[20px] mb-[20px]'></div>
							</div>
							<div className='flex flex-row xl:flex-col-reverse items-center gap-[5px] md:gap-[20px] xl:gap-0 xl:items-start'>
								<div className='xl:pl-[50px] xl:w-[300px]'>
									<h3 className='text-[#C4945E] xl:w-[160px]'>
										Heat continues — you sense tensions
									</h3>
									<ul className='xl:ml-[20px]'>
										<li className='list-disc text-[12px] md:text-[13px]'>
											Because you are already relaxed deeper body tensions are
											recognized, while superficial tensions go away.
										</li>
										<li className='list-disc text-[12px] md:text-[13px]'>
											When the tension is recognized, your attention
											concentrates on that area — thus sparking questions like:
											“Why is it happening?”
										</li>
									</ul>
								</div>
								<div className='w-[100px] h-[2px] bg-black xl:hidden'></div>
								<img
									src='/assets/5.png'
									alt='404'
									className='w-[50px] xl:w-[100px] xl:hidden flex'
								/>
								<div className='w-[2px] h-[50px] bg-black hidden xl:flex ml-[150px] mt-[20px] mb-[20px]'></div>
							</div>
							<div className='flex flex-row xl:flex-col-reverse items-center gap-[5px] md:gap-[20px] xl:gap-0 xl:items-start'>
								<div className='xl:pl-[50px] xl:w-[300px]'>
									<h3 className='text-[#C4945E] xl:w-[200px]'>
										Transformational experience
									</h3>
									<ul className='xl:ml-[40px]'>
										<li className='list-disc text-[12px] md:text-[13px]'>
											Once you are relaxed and most tensions alongside with
											blocked emotions are released, it allows you to come up
											with a new attitude to the situation. That’s a
											transformational experience.
										</li>
									</ul>
								</div>
								<div className='w-[100px] h-[2px] bg-black xl:hidden'></div>
								<img
									src='/assets/6.png'
									alt='404'
									className='w-[50px] xl:w-[100px] xl:hidden flex'
								/>
								<div className='w-[2px] h-[50px] bg-black hidden xl:flex ml-[85px] mt-[20px] mb-[20px]'></div>
							</div>
							<div className='flex flex-row xl:flex-col-reverse items-center gap-[5px] md:gap-[20px] xl:gap-0 xl:items-start'>
								<div className='xl:pl-[100px] xl:w-[300px]'>
									<h3 className='text-[#C4945E] xl:w-[150px] '>
										Integrate the experience
									</h3>
									<ul>
										<li className='list-disc text-[12px] md:text-[13px]'>
											Once completed inside, the session is not yet over.
											Conversation, tea, music, yoga or meditation - there are
											many scenarios to integrate the blissful state after the
											session.
										</li>
									</ul>
								</div>
								<div className='w-[100px] h-[2px] bg-black xl:hidden'></div>
								<img
									src='/assets/1.png'
									alt='404'
									className='w-[50px] xl:w-[100px] xl:hidden flex'
								/>
								<div className='w-[2px] h-[50px] bg-black hidden xl:flex ml-[190px] mt-[20px] mb-[20px]'></div>
							</div>
						</div>
					</motion.div>

					<motion.img
						src='/assets/secondBlock_logo.png'
						alt='logo'
						className='absolute w-[100px] md:w-[150px] right-[-20px] md:right-[100px] xl:right-0 md:top-[500px] xl:top-[120px] hidden xl:flex'
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
					<p>05</p>
				</div>
			</motion.div>
		</motion.div>
	)
}

export default FivethBlock
