import React, { useEffect, useState } from 'react'
import Header from './components/header'
import SecondBlock from './components/secondBlock'
import ThirdBlock from './components/thirdBlock'
import FourthBlock from './components/fourthBlock'
import FivethBlock from './components/fivethBlock'
import SixthBlock from './components/sixthBlock'
import SeventhBlock from './components/seventhBlock'
import EighthBlock from './components/eighthBlock'
import NinthBlock from './components/ninthBlock'
import TenthBlock from './components/tenthBlock'

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
					<FivethBlock />
					<SixthBlock />
					<SeventhBlock />
					<EighthBlock />
					<NinthBlock />
					<TenthBlock />
				</div>
			)}
		</>
	)
}

export default App
