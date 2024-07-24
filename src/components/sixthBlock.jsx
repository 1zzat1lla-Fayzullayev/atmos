import React from 'react'
import Wrapper from '../layout/wrapper'

function SixthBlock() {
	return (
		<>
			<div className='sixthBlock mt-[50px] font-Poppins'>
				<img src='/assets/logo.png' alt='logo' className='w-[100px] md:w-[250px]' />
				<Wrapper>
					<h2 className='text-white text-[20px] md:text-[40px] md:ml-[100px] mx-[20px] md:mx-0 mt-[50px] md:mt-0'>Visualization #1</h2>
				</Wrapper>
			</div>
		</>
	)
}

export default SixthBlock
