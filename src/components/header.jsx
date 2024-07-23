import React from 'react'
import Wrapper from '../layout/wrapper'

function Header() {
	return (
		<>
			<div className='header font-Poppins'>
				<Wrapper>
					<div className='md:mx-[100px] flex justify-center items-center flex-col md:flex-row h-screen md:gap-[150px]'>
						<img
							src='/assets/logo.png'
							alt='logo'
							className='max-w-[250px] md:max-w-[400px] '
						/>
						<div className='flex items-center gap-[20px] justify-center md:justify-end mt-[100px] md:mt-[500px]'>
							<img
								src='/public/assets/header_arrow.png'
								alt='arrow'
								className='w-[60px]'
							/>
							<p className='text-white w-[180px] text-[18px]'>
								by Essential Steam & Family Nest
							</p>
						</div>
					</div>
				</Wrapper>
			</div>
		</>
	)
}

export default Header
