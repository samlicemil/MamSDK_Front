import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Aside, { AsideBody, AsideQuickContainer, AsideQuickNav } from '@/components/layout/Aside';
import { useLocation, useNavigate } from 'react-router';
import useAsideStatus from '@/hooks/useAsideStatus';
import Icon from '@/components/icon/Icon';
import Nav, {
	NavButton,
	NavCollapse,
	NavItem,
	NavSeparator,
	NavTitle,
} from '@/components/layout/Navigation/Nav';
import pages, { TPage, TPages } from '@/Routes/pages';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Input from '@/components/form/Input';
import FieldWrap from '@/components/form/FieldWrap';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalFooterChild,
	ModalHeader,
} from '@/components/ui/Modal';
import classNames from 'classnames';
import AsideHeaderPart from '@/templates/asides/_parts/AsideHeader.part';
import AsideFooterPart from '@/templates/asides/_parts/AsideFooter.part';
import EXAMPLE from '@/examples/_index';

// const getFlattenPages = (pages: TPages, parentId?: string): TPage[] => {
// 	return Object.values(pages).flatMap((page) => {
// 		const { subPages, ...pageData } = page;
// 		const currentPage: TPage = { ...pageData, parentId };
// 		const subPagesArray = subPages ? getFlattenPages(subPages, page.id) : [];
// 		return [currentPage, ...subPagesArray];
// 	});
// };

// const Search = () => {
// 	const { asideStatus } = useAsideStatus();
// 	const navigate = useNavigate();
// 	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

// 	/**
// 	 * CMD + K open modal
// 	 */
// 	useEffect(() => {
// 		const handleKeyDown = (e: KeyboardEvent) => {
// 			if (e.metaKey && e.key.toLowerCase() === 'k') {
// 				e.preventDefault();
// 				setIsModalOpen(true);
// 			}
// 		};
// 		window.addEventListener('keydown', handleKeyDown);
// 		return () => {
// 			window.removeEventListener('keydown', handleKeyDown);
// 		};
// 	}, []);

// 	/**
// 	 * Auto focus input
// 	 */
// 	const inputRef = useRef<HTMLInputElement>(null);
// 	useEffect(() => {
// 		if (isModalOpen) {
// 			inputRef.current?.focus();
// 		}
// 	}, [isModalOpen]);

// 	/**
// 	 * Search input
// 	 */
// 	const [inputValue, setInputValue] = useState<string>('');
// 	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
// 		setInputValue(e.target.value);
// 	};

// 	const flattenDocPages = getFlattenPages(pages.documentation as TPages);
// 	const flattenExamplesPages = getFlattenPages(pages.examples as TPages);

// 	const flattenPages = [...flattenDocPages, ...flattenExamplesPages];
// 	const result = flattenPages.filter((item: TPage) =>
// 		item.text.toLowerCase().includes(inputValue.toLowerCase()),
// 	);

// 	const [selectedIndex, setSelectedIndex] = useState<number>(0);

// 	/**
// 	 * Auto fist select
// 	 */
// 	useEffect(() => {
// 		setSelectedIndex(0);
// 	}, [result.length, isModalOpen]);

// 	const handleClick = (to: string) => {
// 		navigate(to);
// 		setIsModalOpen(false);
// 	};

// 	const handleKeyDown = (e: KeyboardEvent) => {
// 		if (e.key === 'ArrowDown') {
// 			e.preventDefault();
// 			setSelectedIndex((prev) => Math.min(prev + 1, result.length - 1));
// 		} else if (e.key === 'ArrowUp') {
// 			e.preventDefault();
// 			setSelectedIndex((prev) => Math.max(prev - 1, 0));
// 		} else if (e.key === 'Enter') {
// 			e.preventDefault();
// 			const selectedItem = result[selectedIndex];
// 			if (selectedItem && selectedItem.to) {
// 				handleClick(selectedItem.to);
// 			}
// 		}
// 	};

// 	useEffect(() => {
// 		if (isModalOpen) window.addEventListener('keydown', handleKeyDown);
// 		return () => window.removeEventListener('keydown', handleKeyDown);
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [isModalOpen, selectedIndex, result]);
// 	return (
// 		<>
// 			{!asideStatus && (
// 				<Button
// 					icon='Search01'
// 					variant='outline'
// 					color='zinc'
// 					className='mb-4 !h-[44px] w-full !text-zinc-500'
// 					onClick={() => setIsModalOpen(true)}
// 				/>
// 			)}
// 			<FieldWrap
// 				className={classNames({ hidden: !asideStatus })}
// 				firstSuffix={<Icon icon='Search01' className='text-zinc-500' />}
// 				lastSuffix={<span className='text-zinc-500'>⌘K</span>}>
// 				<Input
// 					name='search'
// 					placeholder='Search'
// 					type='search'
// 					className='mb-4 !border-zinc-500/25 transition-all duration-300 ease-in-out hover:!border-zinc-500/50'
// 					value={inputValue}
// 					onClick={() => setIsModalOpen(true)}
// 					onChange={() => {}}
// 				/>
// 			</FieldWrap>
// 			<Modal
// 				isOpen={isModalOpen}
// 				setIsOpen={setIsModalOpen}
// 				rounded='rounded-2xl'
// 				isScrollable>
// 				<ModalHeader hasCloseButton={false}>
// 					<FieldWrap
// 						firstSuffix={<Icon icon='Search01' className='text-zinc-500' />}
// 						lastSuffix={
// 							<Badge color='zinc' variant='outline' className='font-mono text-sm'>
// 								ESC
// 							</Badge>
// 						}>
// 						<Input
// 							ref={inputRef}
// 							name='search'
// 							placeholder='Search'
// 							type='search'
// 							value={inputValue}
// 							onChange={handleInputChange}
// 							className='w-full'
// 						/>
// 					</FieldWrap>
// 				</ModalHeader>
// 				<ModalBody className='pt-2'>
// 					<div className='flex flex-col gap-2'>
// 						{result.map((item, index) => (
// 							<button
// 								key={item.id + index}
// 								style={{
// 									padding: '8px',
// 									// backgroundColor: index === selectedIndex ? '#eee' : '#fff',
// 									cursor: 'pointer',
// 								}}
// 								className={classNames(
// 									'flex cursor-pointer items-center gap-4 rounded-lg border border-zinc-500/25',
// 									{
// 										'outline-2 outline-offset-1 outline-blue-500':
// 											index === selectedIndex,
// 									},
// 								)}
// 								onMouseEnter={() => setSelectedIndex(index)}
// 								onClick={() => handleClick(item.to)}>
// 								<div className='flex grow items-center gap-2'>
// 									{item.icon && <Icon icon={item.icon} />}
// 									{item.text}
// 								</div>
// 								<div className='text-xs text-zinc-500'>
// 									{flattenPages.find((i) => i.id === item.parentId)?.text}
// 								</div>
// 							</button>
// 						))}
// 					</div>
// 				</ModalBody>
// 				<ModalFooter>
// 					<ModalFooterChild>
// 						<div className='flex items-center gap-1 text-sm'>
// 							<div className='rounded-lg border border-zinc-500/50 p-1 font-mono text-sm'>
// 								<Icon icon='ArrowMoveDownLeft' />
// 							</div>
// 							<span className='text-zinc-500'>to select</span>
// 						</div>
// 						<div className='flex items-center gap-1 text-sm'>
// 							<div className='rounded-lg border border-zinc-500/50 p-1 font-mono text-sm'>
// 								<Icon icon='ArrowDown02' />
// 							</div>
// 							<div className='rounded-lg border border-zinc-500/50 p-1 font-mono text-sm'>
// 								<Icon icon='ArrowUp02' />
// 							</div>
// 							<span className='text-zinc-500'>to navigate</span>
// 						</div>
// 						<div className='flex items-center gap-1 text-sm'>
// 							<div className='rounded-lg border border-zinc-500/50 p-1 font-mono text-xs'>
// 								ESC
// 							</div>
// 							<span className='text-zinc-500'>to close</span>
// 						</div>
// 					</ModalFooterChild>
// 				</ModalFooter>
// 			</Modal>
// 		</>
// 	);
// };

const DefaultAsideTemplate = () => {
	const navigate = useNavigate();
	// const location = useLocation();

	const tabs = {
		dashboard: {
			id: 'dashboard',
			title: 'Dashboard',
			icon: 'Home09',
		},
		// apps: {
		// 	id: 'apps',
		// 	title: 'Apps',
		// 	icon: 'GridView',
		// },
		// documentation: {
		// 	id: 'documentation',
		// 	title: 'Documentation',
		// 	icon: 'BookBookmark02',
		// },
		// examples: {
		// 	id: 'examples',
		// 	title: 'Examples',
		// 	icon: 'Star',
		// },
	};
	const [activeTab, setActiveTab] = useState<string>(
		localStorage.getItem('bolt_activeTab') || tabs.dashboard.id,
	);
	const handleActiveTab = (id: string) => {
		setActiveTab(id);
		localStorage.setItem('bolt_activeTab', id);

		// if (id === tabs.examples.id) navigate(pages.examples.exampleMain.to);
		// if (id === tabs.dashboard.id) navigate(pages.apps.sales.to);
	};

	// useEffect(() => {
	// 	if ([tabs.examples.id, tabs.documentation.id].includes(location.pathname.split('/')[1])) {
	// 		setActiveTab(location.pathname.split('/')[1]);
	// 		localStorage.setItem('bolt_activeTab', location.pathname.split('/')[1]);
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [location.pathname.split('/')[1]]);

	return (
		<Aside>
			<AsideHeaderPart />
			<AsideBody>
				{/* <Search /> */}
				{/* <AsideQuickContainer>
					{Object.values(tabs).map((tab) => (
						<AsideQuickNav
							key={tab.id}
							icon={tab.icon}
							isActive={activeTab === tab.id}
							onClick={() => handleActiveTab(tab.id)}>
							{tab.title}
						</AsideQuickNav>
					))}
				</AsideQuickContainer> */}
				<Nav>
					{[tabs.dashboard.id].includes(activeTab as string) && (
						<>
							{/* <NavTitle>Dashboards</NavTitle> */}
							{/* <NavItem {...pages.apps.sales} />
							<NavItem {...pages.apps.customer} /> */}
							<NavItem {...pages.apps.customer}>
								<NavButton
									icon='PlusSignCircle'
									title='New'
									onClick={() => navigate(pages.apps.customer.subPages.edit.to)}
								/>
							</NavItem>
							<NavItem {...pages.apps.restaurant}>
								<NavButton
									icon='PlusSignCircle'
									title='New'
									onClick={() => navigate(pages.apps.restaurant.to)}
								/>
							</NavItem>
						</>
					)}
					{/* {[tabs.dashboard.id].includes(activeTab as string) && (
						<>
							<NavTitle>Pages Examples</NavTitle>
							<NavCollapse {...pages.pagesExamples.list}>
								<NavItem {...pages.pagesExamples.list.subPages?.example1} />
								<NavItem {...pages.pagesExamples.list.subPages?.example2} />
							</NavCollapse>
							<NavCollapse {...pages.pagesExamples.grid}>
								<NavItem {...pages.pagesExamples.grid.subPages?.example1} />
							</NavCollapse>
							<NavCollapse {...pages.pagesExamples.edit}>
								<NavItem {...pages.pagesExamples.edit.subPages?.example1} />
								<NavItem {...pages.pagesExamples.edit.subPages?.example2} />
							</NavCollapse>
							<NavItem {...pages.pagesExamples.login} />
							<NavItem {...pages.pagesExamples.signup} />
							<NavItem {...pages.pagesExamples.notFound} />
							<NavItem {...pages.pagesExamples.underConstruction} />
						</>
					)} */}
				</Nav>
			</AsideBody>
			<AsideFooterPart />
		</Aside>
	);
};

export default DefaultAsideTemplate;
