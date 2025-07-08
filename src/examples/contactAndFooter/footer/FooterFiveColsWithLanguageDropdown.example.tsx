import dayjs from 'dayjs';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '@/components/ui/Dropdown';
import Button from '@/components/ui/Button';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import ThemeContext from '@/context/themeContext';
import LANG from '@/constants/lang.constant';
import Icon from '@/components/icon/Icon';
import { LogoDark, LogoLight } from '@/assets/images';
import useDarkMode from '@/hooks/useDarkMode';

const FooterFiveColsWithLanguageDropdownExample = () => {
	const { isDarkTheme } = useDarkMode();

	const { i18n } = useTranslation();
	const { setLanguage } = useContext(ThemeContext);

	const langArray = Object.values(LANG);
	const activeLang = langArray.filter((key) => key.lng === i18n.language)[0];

	return (
		<>
			{/* ========== FOOTER ========== */}
			<footer className='mx-auto mt-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8'>
				{/* Grid */}
				<div className='mb-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5'>
					<div className='col-span-full hidden lg:col-span-1 lg:block'>
						<a
							className='flex-none text-xl font-semibold text-black focus:opacity-80 focus:outline-hidden dark:text-white'
							href='/'
							aria-label='Brand'>
							<img
								src={isDarkTheme ? LogoLight : LogoDark}
								className='h-8'
								alt='Bolt'
							/>
						</a>
						<p className='mt-3 text-xs text-zinc-600 sm:text-sm dark:text-zinc-400'>
							© {dayjs().format('YYYY')} Omtanke Studio.
						</p>
					</div>
					{/* End Col */}

					<div>
						<h4 className='text-xs font-semibold text-zinc-900 uppercase dark:text-zinc-100'>
							Product
						</h4>

						<div className='mt-3 grid space-y-3 text-sm'>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Pricing
								</a>
							</p>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Changelog
								</a>
							</p>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Docs
								</a>
							</p>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Download
								</a>
							</p>
						</div>
					</div>
					{/* End Col */}

					<div>
						<h4 className='text-xs font-semibold text-zinc-900 uppercase dark:text-zinc-100'>
							Company
						</h4>

						<div className='mt-3 grid space-y-3 text-sm'>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									About us
								</a>
							</p>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Blog
								</a>
							</p>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Careers
								</a>{' '}
								<span className='inline text-blue-600 dark:text-blue-500'>
									— We're hiring
								</span>
							</p>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Customers
								</a>
							</p>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Newsroom
								</a>
							</p>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Sitemap
								</a>
							</p>
						</div>
					</div>
					{/* End Col */}

					<div>
						<h4 className='text-xs font-semibold text-zinc-900 uppercase dark:text-zinc-100'>
							Resources
						</h4>

						<div className='mt-3 grid space-y-3 text-sm'>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Community
								</a>
							</p>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Help & Support
								</a>
							</p>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									eBook
								</a>
							</p>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									What's New
								</a>
							</p>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Status
								</a>
							</p>
						</div>
					</div>
					{/* End Col */}

					<div>
						<h4 className='text-xs font-semibold text-zinc-900 uppercase dark:text-zinc-100'>
							Developers
						</h4>

						<div className='mt-3 grid space-y-3 text-sm'>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Api
								</a>
							</p>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Status
								</a>
							</p>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									GitHub
								</a>{' '}
								<span className='inline text-blue-600 dark:text-blue-500'>
									— New
								</span>
							</p>
						</div>

						<h4 className='mt-7 text-xs font-semibold text-zinc-900 uppercase dark:text-zinc-100'>
							Industries
						</h4>

						<div className='mt-3 grid space-y-3 text-sm'>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Financial Services
								</a>
							</p>
							<p>
								<a
									className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									Education
								</a>
							</p>
						</div>
					</div>
					{/* End Col */}
				</div>
				{/* End Grid */}

				<div className='mt-5 border-t border-zinc-200 pt-5 dark:border-zinc-700'>
					<div className='sm:flex sm:items-center sm:justify-between'>
						<div className='mb-4 flex flex-col gap-3'>
							<div className='flex items-center gap-4'>
								{/* Language Dropdown */}
								<div className='relative inline-flex [--placement:top-left]'>
									<Dropdown>
										<DropdownToggle>
											<Button
												variant='soft'
												color='zinc'
												icon={activeLang.icon}
												className='px-2!'>
												{activeLang.text}
											</Button>
										</DropdownToggle>
										<DropdownMenu>
											{langArray.map((item) => (
												<DropdownItem
													isActive={activeLang.lng === item.lng}
													key={item.lng}
													onClick={() => setLanguage(item.lng)}>
													<Icon
														icon={item.icon}
														size='text-2xl'
														className='ltr:mr-2 rtl:ml-2'
													/>
													{item.text}
												</DropdownItem>
											))}
										</DropdownMenu>
									</Dropdown>
								</div>
								{/* End Language Dropdown */}

								<div className='space-x-4 text-sm'>
									<a
										className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
										href='/'>
										Terms
									</a>
									<a
										className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
										href='/'>
										Privacy
									</a>
									<a
										className='inline-flex gap-x-2 text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
										href='/'>
										Status
									</a>
								</div>
							</div>
							<div className='mt-3 lg:hidden'>
								<a
									className='flex-none text-xl font-semibold text-black focus:opacity-80 focus:outline-hidden dark:text-white'
									href='/'
									aria-label='Brand'>
									<img
										src={isDarkTheme ? LogoLight : LogoDark}
										className='h-8'
										alt='Bolt'
									/>
								</a>
								<p className='mt-1 text-xs text-zinc-600 sm:text-sm dark:text-zinc-400'>
									© {dayjs().format('YYYY')} Omtanke Studio.
								</p>
							</div>
						</div>

						<div className='flex flex-wrap items-center justify-between gap-3'>
							{/* Social Brands */}
							<div className='space-x-4'>
								<a
									className='inline-block text-zinc-500 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-500 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									<svg
										className='size-4 shrink-0'
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										viewBox='0 0 16 16'>
										<path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
									</svg>
								</a>
								<a
									className='inline-block text-zinc-500 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-500 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									<svg
										className='size-4 shrink-0'
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										viewBox='0 0 16 16'>
										<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
									</svg>
								</a>
								<a
									className='inline-block text-zinc-500 hover:text-zinc-800 focus:text-zinc-800 focus:outline-hidden dark:text-zinc-500 dark:hover:text-zinc-200 dark:focus:text-zinc-200'
									href='/'>
									<svg
										className='size-4 shrink-0'
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										viewBox='0 0 16 16'>
										<path d='M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z' />
									</svg>
								</a>
							</div>
							{/* End Social Brands */}
						</div>
						{/* End Col */}
					</div>
				</div>
			</footer>
			{/* ========== END FOOTER ========== */}
		</>
	);
};

export default FooterFiveColsWithLanguageDropdownExample;
