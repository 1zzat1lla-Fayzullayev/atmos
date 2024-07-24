import React from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../layout/wrapper'

function Header() {
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
			className='header font-Poppins'
			initial='hidden'
			animate={controls}
			variants={containerVariants}
		>
			<Wrapper>
				<motion.div className='md:mx-[100px] flex justify-center items-center flex-col md:flex-row h-screen md:gap-[150px]'>
					<motion.img
						src='/assets/logo.png'
						alt='logo'
						className='max-w-[250px] md:max-w-[400px]'
						variants={itemVariants}
					/>
					<motion.div
						className='flex items-center gap-[20px] justify-center md:justify-end mt-[100px] md:mt-[500px]'
						variants={itemVariants}
					>
						<motion.img
							src='/assets/header_arrow.png'
							alt='arrow'
							className='w-[60px]'
							variants={itemVariants}
						/>
						<motion.p
							className='text-white w-[180px] text-[18px]'
							variants={itemVariants}
						>
							by Essential Steam & Family Nest
						</motion.p>
					</motion.div>
				</motion.div>
			</Wrapper>
		</motion.div>
	)
}

export default Header
