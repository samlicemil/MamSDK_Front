import { Link } from 'react-router';
import { LogoDark, LogoLight } from '@/assets/images';
import Icon from '@/components/icon/Icon';
import { AsideHead } from '@/components/layout/Aside';
import useAsideStatus from '@/hooks/useAsideStatus';
import useDarkMode from '@/hooks/useDarkMode';

const AsideHeaderPart = () => {
	const { asideStatus, setAsideStatus } = useAsideStatus();
	const { isDarkTheme } = useDarkMode();

	return (
		<AsideHead>
			{asideStatus && (
				<Link to='/' aria-label='Logo'>
					<img
						src={isDarkTheme ? LogoDark : LogoLight}
						alt='Bolt'
						className='h-10 transition-all duration-300 ease-in-out'
					/>
				</Link>
			)}
			<button
				type='button'
				aria-label='Toggle Aside Menu'
				onClick={() => setAsideStatus(!asideStatus)}
				className='flex h-12 w-12 cursor-pointer items-center justify-center text-zinc-500'>
				<Icon icon={asideStatus ? 'SidebarLeft01' : 'SidebarLeft'} size='text-2xl' />
			</button>
		</AsideHead>
	);
};

export default AsideHeaderPart;
