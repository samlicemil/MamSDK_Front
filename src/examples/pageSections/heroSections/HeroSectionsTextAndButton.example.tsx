import { BgSquare1, BgSquare2 } from '@/assets/images';
import useDarkMode from '@/hooks/useDarkMode';

const HeroSectionsTextAndButtonExample = () => {
	const { isDarkTheme } = useDarkMode();
	return (
		<>
			{/* Hero */}
			<div
				style={{
					backgroundImage: `url(${isDarkTheme ? BgSquare1 : BgSquare2})`,
				}}
				className='relative overflow-hidden bg-size-[auto_500px] bg-position-[center_40px] bg-no-repeat'>
				<div className='mx-auto max-w-[85rem] px-4 pt-24 pb-10 sm:px-6 lg:px-8'>
					{/* Announcement Banner */}
					<div className='flex justify-center'>
						<a
							className='inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white p-2 px-3 text-xs text-gray-600 transition hover:border-gray-300 focus:border-gray-300 focus:outline-hidden dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-neutral-600'
							href='/'>
							Explore the Our Product
							<span className='flex items-center gap-x-1'>
								<span className='border-s border-gray-200 ps-2 text-blue-600 dark:border-neutral-700 dark:text-blue-500'>
									Explore
								</span>
								<svg
									className='size-4 shrink-0 text-blue-600'
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<path d='m9 18 6-6-6-6' />
								</svg>
							</span>
						</a>
					</div>
					{/* End Announcement Banner */}

					{/* Title */}
					<div className='mx-auto mt-5 max-w-xl text-center'>
						<h1 className='block text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl dark:text-neutral-200'>
							Unlock the Full Potential of Bolt
						</h1>
					</div>
					{/* End Title */}

					<div className='mx-auto mt-5 max-w-3xl text-center'>
						<p className='text-lg text-gray-600 dark:text-neutral-400'>
							Bolt redefines open-source excellence, meticulously built with Tailwind
							CSS and visionary creativity from Omtanke Studio.
						</p>
					</div>

					{/* Buttons */}
					<div className='mt-8 flex justify-center gap-3'>
						<a
							className='inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-linear-to-tl from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-medium text-white hover:from-violet-600 hover:to-blue-600 focus:from-violet-600 focus:to-blue-600 focus:outline-hidden'
							href='/'>
							<svg
								className='size-4 shrink-0'
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								viewBox='0 0 16 16'>
								<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z'></path>
							</svg>
							Continue with Github
						</a>
					</div>
					{/* End Buttons */}
				</div>
			</div>
			{/* End Hero */}
		</>
	);
};

export default HeroSectionsTextAndButtonExample;
