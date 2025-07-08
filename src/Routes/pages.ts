import { TIcons } from '@/types/icons.type';

export type TPage = {
	id: string;
	to: string;
	text: string;
	icon: TIcons;
	subPages?: Record<string, TPage>;
	parentId?: string;
};
export type TPages = Record<string, TPage>;

const apps = {
	// sales: {
	// 	id: 'customer',
	// 	to: '/sales',
	// 	text: 'Sales',
	// 	icon: 'Restaurant',
	// 	subPages: {
	// 		list: {
	// 			id: 'list',
	// 			to: '/sales/list',
	// 			text: 'List',
	// 			icon: 'ProductLoading',
	// 		},
	// 		view: {
	// 			id: 'view',
	// 			to: '/sales/view',
	// 			text: 'View',
	// 			icon: 'DeliveryView01',
	// 		},
	// 	},
	// },
	customer: {
		id: 'customer',
		to: '/customer',
		text: 'Customer',
		icon: 'UserMultiple',
		subPages: {
			list: {
				id: 'list',
				to: '/customer/list',
				text: 'List',
				icon: 'UserList',
			},
			edit: {
				id: 'edit',
				to: '/customer/edit',
				text: 'Edit',
				icon: 'EditUser02',
			},
			view: {
				id: 'view',
				to: '/customer/view',
				text: 'View',
				icon: 'UserAccount',
			},
		},
	},
	restaurant: {
		id: 'restaurant',
		to: '/restaurant',
		text: 'Restaurant',
		icon: 'Restaurant',
	},

	// products: {
	// 	id: 'products',
	// 	to: '/products',
	// 	text: 'Products',
	// 	icon: 'PackageOpen',
	// 	subPages: {
	// 		list: {
	// 			id: 'list',
	// 			to: '/products/list',
	// 			text: 'List',
	// 			icon: 'PackageSearch',
	// 		},
	// 		edit: {
	// 			id: 'edit',
	// 			to: '/products/edit',
	// 			text: 'Edit',
	// 			icon: 'Edit02',
	// 		},
	// 	},
	// },
	// projects: {
	// 	id: 'projects',
	// 	to: '/projects',
	// 	text: 'Projects',
	// 	icon: 'DashboardSquare03',
	// 	subPages: {
	// 		board: {
	// 			id: 'board',
	// 			to: '/projects/board',
	// 			text: 'Board',
	// 			icon: 'DashboardSquareSetting',
	// 		},
	// 		list: {
	// 			id: 'list',
	// 			to: '/projects/list',
	// 			text: 'List',
	// 			icon: 'ListView',
	// 		},
	// 		grid: {
	// 			id: 'grid',
	// 			to: '/projects/grid',
	// 			text: 'Grid',
	// 			icon: 'GridView',
	// 		},
	// 	},
	// },
	// invoices: {
	// 	id: 'invoices',
	// 	to: '/invoices',
	// 	text: 'Invoices',
	// 	icon: 'Invoice03',
	// 	subPages: {
	// 		list: {
	// 			id: 'list',
	// 			to: '/invoices/list',
	// 			text: 'List',
	// 			icon: 'Invoice02',
	// 		},
	// 		view: {
	// 			id: 'view',
	// 			to: '/invoices/view',
	// 			text: 'View',
	// 			icon: 'Invoice04',
	// 		},
	// 	},
	// },
	// mail: {
	// 	id: 'mail',
	// 	to: '/mail',
	// 	text: 'Mail',
	// 	icon: 'Mail01',
	// 	subPages: {
	// 		inbox: {
	// 			id: 'inbox',
	// 			to: '/mail/inbox',
	// 			text: 'Inbox',
	// 			icon: 'MailOpen01',
	// 		},
	// 		new: {
	// 			id: 'new',
	// 			to: '/mail/new',
	// 			text: 'New',
	// 			icon: 'MailEdit02',
	// 		},
	// 	},
	// },
	// chat: {
	// 	id: 'chat',
	// 	to: '/chat',
	// 	text: 'Chat',
	// 	icon: 'Message02',
	// },
};
const pagesExamples: TPages = {
	// list: {
	// 	id: 'list',
	// 	to: '/list',
	// 	text: 'Lists',
	// 	icon: 'LeftToRightListBullet',
	// 	subPages: {
	// 		example1: {
	// 			id: 'example1',
	// 			to: apps.products.subPages.list.to,
	// 			text: 'Example 1',
	// 			icon: 'LeftToRightListBullet',
	// 		},
	// 		example2: {
	// 			id: 'example1',
	// 			to: apps.sales.subPages.view.to,
	// 			text: 'Example 2',
	// 			icon: 'LeftToRightListBullet',
	// 		},
	// 	},
	// },
	// grid: {
	// 	id: 'grid',
	// 	to: '/grid',
	// 	text: 'Grids',
	// 	icon: 'GridView',
	// 	subPages: {
	// 		example1: {
	// 			id: 'example1',
	// 			to: apps.projects.subPages.grid.to,
	// 			text: 'Example 1',
	// 			icon: 'GridView',
	// 		},
	// 	},
	// },
	edit: {
		id: 'edit',
		to: '/edit',
		text: 'Edit',
		icon: 'PencilEdit02',
		subPages: {
			example1: {
				id: 'example1',
				to: apps.customer.subPages.edit.to,
				text: 'Example 1',
				icon: 'PencilEdit02',
			},
			// example2: {
			// 	id: 'example1',
			// 	to: apps.products.subPages.edit.to,
			// 	text: 'Example 2',
			// 	icon: 'PencilEdit02',
			// },
		},
	},
	login: {
		id: 'login',
		to: '/login',
		text: 'Login',
		icon: 'Login03',
	},
	signup: {
		id: 'signup',
		to: '/signup',
		text: 'Signup',
		icon: 'AddTeam',
	},
	notFound: {
		id: 'notFound',
		to: '/notFound',
		text: '404 Not Found',
		icon: 'HelpSquare',
	},
	underConstruction: {
		id: 'underConstruction',
		to: '/under-construction',
		text: 'Under Construction',
		icon: 'DashboardBrowsing',
	},
};
const examples = {
	exampleMain: {
		id: 'exampleMain',
		to: '/examples',
		text: 'Examples',
		icon: 'PerplexityAi',
		subPages: {
			dataVisualization: {
				id: 'dataVisualization',
				to: '/examples/data-visualization',
				text: 'Data Visualization',
				icon: 'LeftToRightListBullet',
				subPages: {
					chartsAndGraph: {
						id: 'chartsAndGraph',
						to: '/examples/data-visualization/charts-graph',
						text: 'Charts & Graph',
						icon: 'LeftToRightListBullet',
					},
					interactiveDataCards: {
						id: 'interactiveDataCards',
						to: '/examples/data-visualization/interactive-data-cards',
						text: 'Interactive Data Cards',
						icon: 'LeftToRightListBullet',
					},
					dataCards: {
						id: 'dataCards',
						to: '/examples/data-visualization/data-cards',
						text: 'Data Cards',
						icon: 'LeftToRightListBullet',
					},
					dataMaps: {
						id: 'dataMaps',
						to: '/examples/data-visualization/data-maps',
						text: 'Data Maps',
						icon: 'LeftToRightListBullet',
					},
					stats: {
						id: 'stats',
						to: '/examples/data-visualization/stats',
						text: 'Stats',
						icon: 'LeftToRightListBullet',
					},
					statsCharts: {
						id: 'statsCharts',
						to: '/examples/data-visualization/stats-charts',
						text: 'Stats Charts',
						icon: 'LeftToRightListBullet',
					},
				},
			},
			cards: {
				id: 'cards',
				to: '/examples/cards',
				text: 'Cards',
				icon: 'DashedLine02',
				subPages: {
					projects: {
						id: 'projects',
						to: '/examples/cards/projects',
						text: 'Projects',
						icon: 'DashedLine02',
					},
					locationAndAddress: {
						id: 'locationAndAddress',
						to: '/examples/cards/location-and-address',
						text: 'Location & Address',
						icon: 'DashedLine02',
					},
					integrations: {
						id: 'integrations',
						to: '/examples/cards/integrations',
						text: 'Integrations',
						icon: 'DashedLine02',
					},
					masonryLayout: {
						id: 'masonryLayout',
						to: '/examples/cards/masonry-layout',
						text: 'Masonry Layout',
						icon: 'DashedLine02',
					},
					inlineCards: {
						id: 'inlineCards',
						to: '/examples/cards/inline-cards',
						text: 'Inline Cards',
						icon: 'DashedLine02',
					},
					brandingFeaturedCards: {
						id: 'brandingFeaturedCards',
						to: '/examples/cards/branding-featured-cards',
						text: 'Branding Featured Cards',
						icon: 'DashedLine02',
					},
					trialCards: {
						id: 'trialCards',
						to: '/examples/cards/trial-cards',
						text: 'Trial Cards',
						icon: 'DashedLine02',
					},
					systemLogs: {
						id: 'systemLogs',
						to: '/examples/cards/system-logs',
						text: 'System Logs',
						icon: 'DashedLine02',
					},
					importAndExportData: {
						id: 'importAndExportData',
						to: '/examples/cards/import-and-export-data',
						text: 'Import & Export Data',
						icon: 'DashedLine02',
					},
					dataSnippets: {
						id: 'dataSnippets',
						to: '/examples/cards/data-snippets',
						text: 'Data Snippets',
						icon: 'DashedLine02',
					},
					contacts: {
						id: 'contacts',
						to: '/examples/cards/contacts',
						text: 'Contacts',
						icon: 'DashedLine02',
					},
					cardNavs: {
						id: 'cardNavs',
						to: '/examples/cards/dataCard-navs',
						text: 'Card Navs',
						icon: 'DashedLine02',
					},
					filesAndFolders: {
						id: 'filesAndFolders',
						to: '/examples/cards/files-and-folders',
						text: 'Files & Folders',
						icon: 'DashedLine02',
					},
				},
			},
			overlays: {
				id: 'overlays',
				to: '/examples/overlays',
				text: 'Overlays',
				icon: 'ChangeScreenMode',
				subPages: {
					offcanvas: {
						id: 'offcanvas',
						to: '/examples/overlays/offcanvas',
						text: 'Offcanvas',
						icon: 'ChangeScreenMode',
					},
					general: {
						id: 'general',
						to: '/examples/overlays/general',
						text: 'General',
						icon: 'ChangeScreenMode',
					},
					filters: {
						id: 'filters',
						to: '/examples/overlays/filters',
						text: 'Filters',
						icon: 'ChangeScreenMode',
					},
					reviews: {
						id: 'reviews',
						to: '/examples/overlays/reviews',
						text: 'Reviews',
						icon: 'ChangeScreenMode',
					},
					shareAndInvite: {
						id: 'shareAndInvite',
						to: '/examples/overlays/share-and-invite',
						text: 'Share & Invite',
						icon: 'ChangeScreenMode',
					},
					billingAndPayments: {
						id: 'billingAndPayments',
						to: '/examples/overlays/billing-and-payments',
						text: 'Billing & Payments',
						icon: 'ChangeScreenMode',
					},
					addAndCreateForms: {
						id: 'addAndCreateForms',
						to: '/examples/overlays/add-and-create-forms',
						text: 'Add/Create Forms',
						icon: 'ChangeScreenMode',
					},
					editForms: {
						id: 'editForms',
						to: '/examples/overlays/edit-forms',
						text: 'Edit Forms',
						icon: 'ChangeScreenMode',
					},
					dataManagement: {
						id: 'dataManagement',
						to: '/examples/overlays/data-management',
						text: 'Data Management',
						icon: 'ChangeScreenMode',
					},
					feedback: {
						id: 'feedback',
						to: '/examples/overlays/feedback',
						text: 'Feedback',
						icon: 'ChangeScreenMode',
					},
					dateAndTime: {
						id: 'dateAndTime',
						to: '/examples/overlays/date-and-time',
						text: 'Date & Time',
						icon: 'ChangeScreenMode',
					},
					authentication: {
						id: 'authentication',
						to: '/examples/overlays/authentication',
						text: 'Authentication',
						icon: 'ChangeScreenMode',
					},
					fileUploads: {
						id: 'fileUploads',
						to: '/examples/overlays/file-uploads',
						text: 'File Uploads',
						icon: 'ChangeScreenMode',
					},
					eCommerce: {
						id: 'eCommerce',
						to: '/examples/overlays/e-commerce',
						text: 'E-Commerce',
						icon: 'ChangeScreenMode',
					},
					inboxChatAndMessages: {
						id: 'inboxChatAndMessages',
						to: '/examples/overlays/inbox-chat-and-messages',
						text: 'Inbox, Chat & Messages',
						icon: 'ChangeScreenMode',
					},
				},
			},
			tables: {
				id: 'tables',
				to: '/examples/tables',
				text: 'Tables',
				icon: 'Table',
				subPages: {
					projects: {
						id: 'projects',
						to: '/examples/tables/projects',
						text: 'Projects',
						icon: 'Table',
					},
					products: {
						id: 'products',
						to: '/examples/tables/products',
						text: 'Products',
						icon: 'Table',
					},
					users: {
						id: 'users',
						to: '/examples/tables/users',
						text: 'Users',
						icon: 'Table',
					},
					orders: {
						id: 'orders',
						to: '/examples/tables/orders',
						text: 'Orders',
						icon: 'Table',
					},
					eCommerce: {
						id: 'eCommerce',
						to: '/examples/tables/e-commerce',
						text: 'E-Commerce',
						icon: 'Table',
					},
					others: {
						id: 'others',
						to: '/examples/tables/others',
						text: 'Others',
						icon: 'Table',
					},
				},
			},
			forms: {
				id: 'forms',
				to: '/examples/forms',
				text: 'Forms',
				icon: 'CustomField',
				subPages: {
					general: {
						id: 'general',
						to: '/examples/forms/general',
						text: 'General',
						icon: 'CustomField',
					},
					filters: {
						id: 'filters',
						to: '/examples/forms/filters',
						text: 'Filters',
						icon: 'CustomField',
					},
					fileUploads: {
						id: 'fileUploads',
						to: '/examples/forms/file-uploads',
						text: 'File Uploads',
						icon: 'CustomField',
					},
					addAndCreateForms: {
						id: 'addAndCreateForms',
						to: '/examples/forms/add-and-create-forms',
						text: 'Add/Create Forms',
						icon: 'CustomField',
					},
					billingAndPayments: {
						id: 'billingAndPayments',
						to: '/examples/forms/billing-and-payments',
						text: 'Billing & Payments',
						icon: 'CustomField',
					},
					layouts: {
						id: 'layouts',
						to: '/examples/forms/layouts',
						text: 'Layouts',
						icon: 'CustomField',
					},
					switches: {
						id: 'switches',
						to: '/examples/forms/switches',
						text: 'Switches',
						icon: 'CustomField',
					},
					radioAndCheckboxGroups: {
						id: 'radioAndCheckboxGroups',
						to: '/examples/forms/radio-and-checkbox-groups',
						text: 'Radio & Checkbox Groups',
						icon: 'CustomField',
					},
					textareaInput: {
						id: 'textareaInput',
						to: '/examples/forms/textarea-input',
						text: 'Textarea Input',
						icon: 'CustomField',
					},
					giftCards: {
						id: 'giftCards',
						to: '/examples/forms/gift-cards',
						text: 'Gift Cards',
						icon: 'CustomField',
					},
					reviews: {
						id: 'reviews',
						to: '/examples/forms/reviews',
						text: 'Reviews',
						icon: 'CustomField',
					},
					sidebarFilters: {
						id: 'sidebarFilters',
						to: '/examples/forms/sidebar-filters',
						text: 'Sidebar Filters',
						icon: 'CustomField',
					},
					sectionFilterBars: {
						id: 'sectionFilterBars',
						to: '/examples/forms/section-filter-bars',
						text: 'Section Filter Bars',
						icon: 'CustomField',
					},
				},
			},
			searchAndCommandPalettes: {
				id: 'searchAndCommandPalettes',
				to: '/examples/search-and-command-palettes',
				text: 'Search & Command Palettes',
				icon: 'Search01',
				subPages: {
					sidebarSearch: {
						id: 'sidebarSearch',
						to: '/examples/search-and-command-palettes/sidebar-search',
						text: 'Sidebar Search',
						icon: 'Search01',
					},
					commandPalettes: {
						id: 'commandPalettes',
						to: '/examples/search-and-command-palettes/command-palettes',
						text: 'Command Palettes',
						icon: 'Search01',
					},
					searchResults: {
						id: 'searchResults',
						to: '/examples/search-and-command-palettes/search-results',
						text: 'Search Results',
						icon: 'Search01',
					},
				},
			},
			navigations: {
				id: 'navigations',
				to: '/examples/navigations',
				text: 'Navigations',
				icon: 'Navigation03',
				subPages: {
					header: {
						id: 'header',
						to: '/examples/navigations/header',
						text: 'Header',
						icon: 'Navigation03',
					},
				},
			},
			pageSections: {
				id: 'pageSections',
				to: '/examples/page-sections',
				text: 'Page Sections',
				icon: 'ArtboardTool',
				subPages: {
					heroSections: {
						id: 'heroSections',
						to: '/examples/page-sections/heroSections',
						text: 'Hero Sections',
						icon: 'ArtboardTool',
					},
					listGroup: {
						id: 'listGroup',
						to: '/examples/page-sections/listGroup',
						text: 'List Group',
						icon: 'ArtboardTool',
					},
					descriptionList: {
						id: 'descriptionList',
						to: '/examples/page-sections/description-list',
						text: 'Description List',
						icon: 'ArtboardTool',
					},
					iconSection: {
						id: 'iconSection',
						to: '/examples/page-sections/iconSection',
						text: 'Icon Section',
						icon: 'ArtboardTool',
					},
					pricingSections: {
						id: 'pricingSections',
						to: '/examples/page-sections/pricingSections',
						text: 'Pricing Sections',
						icon: 'ArtboardTool',
					},
					timeline: {
						id: 'timeline',
						to: '/examples/page-sections/timeline',
						text: 'Timeline',
						icon: 'ArtboardTool',
					},
					faqSections: {
						id: 'faqSections',
						to: '/examples/page-sections/faqSections',
						text: 'FAQ Sections',
						icon: 'ArtboardTool',
					},
					setUpFlows: {
						id: 'setUpFlows',
						to: '/examples/page-sections/set-up-flows',
						text: 'Setup Flows',
						icon: 'ArtboardTool',
					},
					userProfile: {
						id: 'userProfile',
						to: '/examples/page-sections/user-profile',
						text: 'User Profile',
						icon: 'ArtboardTool',
					},
					notificationSystem: {
						id: 'notificationSystem',
						to: '/examples/page-sections/notification-system',
						text: 'Notification System',
						icon: 'ArtboardTool',
					},
					quickActions: {
						id: 'quickActions',
						to: '/examples/page-sections/quick-actions',
						text: 'Quick Actions',
						icon: 'ArtboardTool',
					},
					banners: {
						id: 'banners',
						to: '/examples/page-sections/banners',
						text: 'Banners',
						icon: 'ArtboardTool',
					},
					titleBars: {
						id: 'titleBars',
						to: '/examples/page-sections/title-bars',
						text: 'Title Bars',
						icon: 'ArtboardTool',
					},
				},
			},
			contactAndFooters: {
				id: 'contactAndFooters',
				to: '/examples/contactAndFooters',
				text: 'Contact And Footers',
				icon: 'InformationSquare',
				subPages: {
					contact: {
						id: 'contact',
						to: '/examples/contactAndFooters/contact',
						text: 'Contact',
						icon: 'InformationSquare',
					},
					footer: {
						id: 'footer',
						to: '/examples/contactAndFooters/footer',
						text: 'Footer',
						icon: 'InformationSquare',
					},
				},
			},
			userInterface: {
				id: 'userInterface',
				to: '/examples/user-interface',
				text: 'User Interface',
				icon: 'Puzzle',
				subPages: {
					dropdown: {
						id: 'dropdown',
						to: '/examples/user-interface/dropdown',
						text: 'Dropdown',
						icon: 'Puzzle',
					},
					select: {
						id: 'select',
						to: '/examples/user-interface/select',
						text: 'Select',
						icon: 'Puzzle',
					},
					buttons: {
						id: 'buttons',
						to: '/examples/user-interface/buttons',
						text: 'Buttons',
						icon: 'Puzzle',
					},
					buttonGroups: {
						id: 'buttonGroups',
						to: '/examples/user-interface/button-groups',
						text: 'Button Groups',
						icon: 'Puzzle',
					},
					badges: {
						id: 'badges',
						to: '/examples/user-interface/badges',
						text: 'Badges',
						icon: 'Puzzle',
					},
					progressBars: {
						id: 'progressBars',
						to: '/examples/user-interface/progress-bars',
						text: 'Progress Bars',
						icon: 'Puzzle',
					},
					popovers: {
						id: 'popovers',
						to: '/examples/user-interface/popovers',
						text: 'Popovers',
						icon: 'Puzzle',
					},
					links: {
						id: 'links',
						to: '/examples/user-interface/links',
						text: 'Links',
						icon: 'Puzzle',
					},
					navs: {
						id: 'navs',
						to: '/examples/user-interface/navs',
						text: 'Navs',
						icon: 'Puzzle',
					},
				},
			},
		},
	},
};

// const documentation = {
// 	gettingStarted: {
// 		id: 'gettingStarted',
// 		to: '/documentation/getting-started',
// 		text: 'Getting Started',
// 		icon: 'Flag02',
// 		subPages: {
// 			installation: {
// 				id: 'installation',
// 				to: '/documentation/getting-started/installation',
// 				text: 'Installation',
// 				icon: 'BookOpen02',
// 			},
// 			changelog: {
// 				id: 'changelog',
// 				to: '/documentation/getting-started/changelog',
// 				text: 'Changelog',
// 				icon: 'Catalogue',
// 			},
// 		},
// 	},
// 	content: {
// 		id: 'content',
// 		to: '/documentation/content',
// 		text: 'Content',
// 		icon: 'TextSquare',
// 		subPages: {
// 			typography: {
// 				id: 'typography',
// 				to: '/documentation/content/typography',
// 				text: 'Typography',
// 				icon: 'TextSmallcaps',
// 			},
// 		},
// 	},
// 	layout: {
// 		id: 'layout',
// 		to: '/documentation/layout',
// 		text: 'Layout',
// 		icon: 'AiBrowser',
// 		subPages: {
// 			aside: {
// 				id: 'aside',
// 				to: '/documentation/layout/aside',
// 				text: 'Aside',
// 				icon: 'ArtboardTool',
// 			},
// 			wrapper: {
// 				id: 'wrapper',
// 				to: '/documentation/layout/wrapper',
// 				text: 'Wrapper',
// 				icon: 'ArtboardTool',
// 			},
// 			header: {
// 				id: 'header',
// 				to: '/documentation/layout/header',
// 				text: 'Header',
// 				icon: 'ArtboardTool',
// 			},
// 			subheader: {
// 				id: 'subheader',
// 				to: '/documentation/layout/subheader',
// 				text: 'Subheader',
// 				icon: 'ArtboardTool',
// 			},
// 			container: {
// 				id: 'container',
// 				to: '/documentation/layout/container',
// 				text: 'Container',
// 				icon: 'ArtboardTool',
// 			},
// 		},
// 	},
// 	baseComponent: {
// 		id: 'baseComponent',
// 		to: '/documentation/base-component',
// 		text: 'Base Component',
// 		icon: 'Puzzle',
// 		subPages: {
// 			accordion: {
// 				id: 'accordion',
// 				to: '/documentation/base-component/accordion',
// 				text: 'Accordion',
// 				icon: 'ListView',
// 			},
// 			alerts: {
// 				id: 'alerts',
// 				to: '/documentation/base-component/alerts',
// 				text: 'Alerts',
// 				icon: 'AlertCircle',
// 			},
// 			avatar: {
// 				id: 'avatar',
// 				to: '/documentation/base-component/avatar',
// 				text: 'Avatar',
// 				icon: 'UserCircle',
// 			},
// 			avatarGroup: {
// 				id: 'avatarGroup',
// 				to: '/documentation/base-component/avatarGroup',
// 				text: 'Avatar Group',
// 				icon: 'UserGroup',
// 			},
// 			badge: {
// 				id: 'badge',
// 				to: '/documentation/base-component/badge',
// 				text: 'Badge',
// 				icon: 'CheckmarkBadge01',
// 			},
// 			blockquote: {
// 				id: 'blockquote',
// 				to: '/documentation/base-component/blockquote',
// 				text: 'Blockquote',
// 				icon: 'QuoteDownSquare',
// 			},
// 			button: {
// 				id: 'button',
// 				to: '/documentation/base-component/button',
// 				text: 'Button',
// 				icon: 'Rectangular',
// 			},
// 			buttonGroup: {
// 				id: 'buttonGroup',
// 				to: '/documentation/base-component/buttonGroup',
// 				text: 'Button Group',
// 				icon: 'DashboardSquare01',
// 			},
// 			card: {
// 				id: 'card',
// 				to: '/documentation/base-component/card',
// 				text: 'Card',
// 				icon: 'DashedLine02',
// 			},
// 			chatBubbles: {
// 				id: 'chatBubbles',
// 				to: '/documentation/base-component/chatBubbles',
// 				text: 'Chat Bubbles',
// 				icon: 'Comment01',
// 			},
// 			carousel: {
// 				id: 'carousel',
// 				to: '/documentation/base-component/carousel',
// 				text: 'Carousel',
// 				icon: 'CarouselHorizontal02',
// 			},
// 			collapse: {
// 				id: 'collapse',
// 				to: '/documentation/base-component/collapse',
// 				text: 'Collapse',
// 				icon: 'SquareArrowShrink02',
// 			},
// 			contextMenu: {
// 				id: 'context-menu',
// 				to: '/documentation/base-component/context-menu',
// 				text: 'Context Menu',
// 				icon: 'MouseRightClick01',
// 			},
// 			datepicker: {
// 				id: 'datepicker',
// 				to: '/documentation/base-component/datepicker',
// 				text: 'Datepicker',
// 				icon: 'Calendar03',
// 			},
// 			devices: {
// 				id: 'devices',
// 				to: '/documentation/base-component/devices',
// 				text: 'Devices',
// 				icon: 'Browser',
// 			},
// 			dropdown: {
// 				id: 'dropdown',
// 				to: '/documentation/base-component/dropdown',
// 				text: 'Dropdown',
// 				icon: 'Menu10',
// 			},
// 			lists: {
// 				id: 'lists',
// 				to: '/documentation/base-component/lists',
// 				text: 'Lists',
// 				icon: 'LeftToRightListBullet',
// 			},
// 			listGroup: {
// 				id: 'listGroup',
// 				to: '/documentation/base-component/listGroup',
// 				text: 'List Group',
// 				icon: 'LeftToRightListTriangle',
// 			},
// 			legendIndicator: {
// 				id: 'legendIndicator',
// 				to: '/documentation/base-component/legendIndicator',
// 				text: 'Legend Indicator',
// 				icon: 'LabelImportant',
// 			},
// 			modal: {
// 				id: 'modal',
// 				to: '/documentation/base-component/modal',
// 				text: 'Modal',
// 				icon: 'ChangeScreenMode',
// 			},
// 			offcanvas: {
// 				id: 'offcanvas',
// 				to: '/documentation/base-component/offcanvas',
// 				text: 'Offcanvas',
// 				icon: 'SidebarRight',
// 			},
// 			popover: {
// 				id: 'popover',
// 				to: '/documentation/base-component/popover',
// 				text: 'Popover',
// 				icon: 'CursorInfo01',
// 			},
// 			progress: {
// 				id: 'progress',
// 				to: '/documentation/base-component/progress',
// 				text: 'Progress',
// 				icon: 'PieChart09',
// 			},
// 			fileUploadingProgress: {
// 				id: 'fileUploadingProgress',
// 				to: '/documentation/base-component/fileUploadingProgress',
// 				text: 'File Uploading Progress',
// 				icon: 'Clock03',
// 			},
// 			ratings: {
// 				id: 'ratings',
// 				to: '/documentation/base-component/ratings',
// 				text: 'Ratings',
// 				icon: 'Star',
// 			},
// 			skeleton: {
// 				id: 'skeleton',
// 				to: '/documentation/base-component/skeleton',
// 				text: 'Skeleton',
// 				icon: 'Loading03',
// 			},
// 			spinners: {
// 				id: 'spinners',
// 				to: '/documentation/base-component/spinners',
// 				text: 'Spinners',
// 				icon: 'Loading02',
// 			},
// 			styledIcons: {
// 				id: 'styledIcons',
// 				to: '/documentation/base-component/styledIcons',
// 				text: 'Styled Icons',
// 				icon: 'PaintBoard',
// 			},
// 			toasts: {
// 				id: 'toasts',
// 				to: '/documentation/base-component/toasts',
// 				text: 'Toasts',
// 				icon: 'Notification03',
// 			},
// 			timeline: {
// 				id: 'timeline',
// 				to: '/documentation/base-component/timeline',
// 				text: 'Timeline',
// 				icon: 'Archive01',
// 			},
// 			treeView: {
// 				id: 'treeView',
// 				to: '/documentation/base-component/treeView',
// 				text: 'Tree View',
// 				icon: 'GitMerge',
// 			},
// 			tooltip: {
// 				id: 'tooltip',
// 				to: '/documentation/base-component/tooltip',
// 				text: 'Tooltip',
// 				icon: 'Comment02',
// 			},
// 		},
// 	},
// 	forms: {
// 		id: 'forms',
// 		to: '/documentation/forms',
// 		text: 'Forms',
// 		icon: 'PencilEdit02',
// 		subPages: {
// 			input: {
// 				id: 'input',
// 				to: '/documentation/forms/input',
// 				text: 'Input',
// 				icon: 'CustomField',
// 			},
// 			inputGroup: {
// 				id: 'input-group',
// 				to: '/documentation/forms/input-group',
// 				text: 'Input Group',
// 				icon: 'GroupItems',
// 			},
// 			textarea: {
// 				id: 'textarea',
// 				to: '/documentation/forms/textarea',
// 				text: 'Textarea',
// 				icon: 'TextFirstlineRight',
// 			},
// 			fileInput: {
// 				id: 'file-input',
// 				to: '/documentation/forms/file-input',
// 				text: 'File Input',
// 				icon: 'FileAdd',
// 			},
// 			checkbox: {
// 				id: 'checkbox',
// 				to: '/documentation/forms/checkbox',
// 				text: 'Checkbox',
// 				icon: 'CheckmarkSquare02',
// 			},
// 			radio: {
// 				id: 'radio',
// 				to: '/documentation/forms/radio',
// 				text: 'Radio',
// 				icon: 'RadioButton',
// 			},
// 			select: {
// 				id: 'select',
// 				to: '/documentation/forms/select',
// 				text: 'Select',
// 				icon: 'CustomField',
// 			},
// 			rangeSlider: {
// 				id: 'range-slider',
// 				to: '/documentation/forms/range-slider',
// 				text: 'Range Slider',
// 				icon: 'SlidersHorizontal',
// 			},
// 		},
// 	},
// 	icon: {
// 		id: 'icon',
// 		to: '/documentation/icon',
// 		text: 'Icon',
// 		icon: 'Award02',
// 	},
// };

// const pages = { apps, pagesExamples, documentation, examples };
const pages = { apps, pagesExamples, examples };
export default pages;
