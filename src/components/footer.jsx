import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../layout/wrapper'

function Footer() {
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
		<motion.footer
			ref={ref}
			className='footer mt-24 font-Poppins pb-12 bg-gray-800'
			initial='hidden'
			animate={controls}
			variants={containerVariants}
		>
			<motion.div
				className='flex justify-center lg:justify-end items-center gap-4 p-4'
				variants={itemVariants}
			>
				<img
					src='/assets/FAM_NEST_logo.png'
					alt='FAM NEST logo'
					className='w-32 lg:w-40 cursor-pointer'
				/>
				<img
					src='/assets/logo.png'
					alt='Essential Steam logo'
					className='w-32 lg:w-40 cursor-pointer'
				/>
			</motion.div>
			<Wrapper>
				<motion.div
					className='flex flex-col lg:flex-row justify-between items-center text-white'
					variants={containerVariants}
				>
					<motion.div
						className='text-center lg:text-left mb-8 lg:mb-0'
						variants={itemVariants}
					>
						<h2 className='text-2xl lg:text-3xl'>
							Can’t wait to join us? Contact us:
						</h2>
					</motion.div>
					<motion.div
						className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'
						variants={containerVariants}
					>
						<motion.div
							className='flex flex-col gap-4 text-center lg:text-left'
							variants={itemVariants}
						>
							<h3 className='text-xl'>Telegram:</h3>
							<a
								href='https://t.me/borisryabov'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline'
							>
								Boris @borisryabov
							</a>
							<a
								href='https://t.me/AlexVolvak'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline'
							>
								Alex @AlexVolvak
							</a>
							<a
								href='https://t.me/Yanshevskiy'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline'
							>
								Pavel @Yanshevskiy
							</a>
						</motion.div>
						<motion.div
							className='flex flex-col gap-4 text-center lg:text-left'
							variants={itemVariants}
						>
							<a
								href='https://www.essentialsteam.com'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline'
							>
								www.essentialsteam.com
							</a>
							<a
								href='mailto:contact@essentialsteam.com'
								className='hover:underline'
							>
								contact@essentialsteam.com
							</a>
							<a href='mailto:py@familynest.com' className='hover:underline'>
								py@familynest.com
							</a>
						</motion.div>
					</motion.div>
				</motion.div>
			</Wrapper>
		</motion.footer>
	)
}

export default Footer
