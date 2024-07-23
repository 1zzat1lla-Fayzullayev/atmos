import React, { useEffect, useState } from 'react'
import Header from './components/header'
import SecondBlock from './components/secondBlock'
import ThirdBlock from './components/thirdBlock'
import FourthBlock from './components/fourthBlock'

function App() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 3000)

		return () => clearInterval(timer)
	}, [])

	return (
		<>
			{loading ? (
				<div className='bg-[#272727] h-screen w-screen'>
					<div className='flex justify-center items-center h-full'>
						<div className='flex flex-col items-center gap-[40px]'>
							<img src='/assets/logo.png' alt='logo' className='w-[180px]' />
							<span className='loader'></span>
						</div>
					</div>
				</div>
			) : (
				<div>
					<Header />
					<SecondBlock />
					<ThirdBlock />
					<FourthBlock />
				</div>
			)}
		</>
	)
}

export default App
