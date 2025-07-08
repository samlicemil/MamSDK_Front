import { Link, useNavigate } from 'react-router';
import {
	ColumnDef,
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
	VisibilityState,
} from '@tanstack/react-table';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import TableTemplate, {
	TableCardFooterTemplate,
	TableIndeterminateCheckbox,
} from '@/templates/common/TableParts.template';
import pages from '@/Routes/pages';
import Button from '@/components/ui/Button';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import Dropdown, { DropdownMenu, DropdownToggle } from '@/components/ui/Dropdown';
import Checkbox from '@/components/form/Checkbox';
import { GetRestaurantsResponse, IRestaurant, Restaurant } from '@/types/input.type';
import { restaurantList } from '@/TEST_VERILERI/restaurantList';
import { useRestaurantDelete, useRestaurants } from '@/services/client/clientData/restaurant';

const columnHelper = createColumnHelper<IRestaurant>();

const TableRestaurantList = () => {
	// const navigate = useNavigate();
	const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });
	// const [data] = useState(() => [...restaurantList]);
	// const params = useMemo(
	// 	() => ({
	// 		Page: pagination.pageIndex + 1 || 1,
	// 		Take: pagination.pageSize || 10,
	// 	}),
	// 	[pagination.pageIndex, pagination.pageSize],
	// );

	const params = {
		Page: pagination.pageIndex + 1 || 1,
		Take: pagination.pageSize || 5,
	};

	const { data = [], isFetching, isLoading } = useRestaurants(params);
	const deleteMutation = useRestaurantDelete();

	// const [sorting, setSorting] = useState<SortingState>([]);
	// const [globalFilter, setGlobalFilter] = useState<string>('');
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
		Id: true,
		Name: true,
		PhoneNumber: true,
		Rate: true,
		User: true,
		Street: true,
		District: true,
		City: true,
		actions: true,
	});
	const [rowSelection, setRowSelection] = useState({});

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target;
		setColumnVisibility((prev) => ({
			...prev,
			[name]: checked,
		}));
	};

	// const totalCount = data?.Data?.length ? data.Data[0].TotalCount : 0;
	const totalCount = data?.length ? data[0].TotalCount : 0; // deneme amacli , backendden total count geldiginde silinecek

	useEffect(() => {
		console.log('Yeni veri geldi', data);
	}, [data]);

	const columns: ColumnDef<Restaurant>[] = [
		{ accessorKey: 'Id', header: 'ID' },
		{ accessorKey: 'Name', header: 'Adı' },
		{ accessorKey: 'PhoneNumber', header: 'Telefon' },
		{ accessorKey: 'Rate', header: 'Puan' },
		{ accessorKey: 'City', header: 'Şehir' },
		{ accessorKey: 'User', header: 'Sorumlu' },
	];

	// const columns = useMemo(
	// 	() => [
	// 		columnHelper.display({
	// 			cell: ({ row }) => (
	// 				<TableIndeterminateCheckbox
	// 					// eslint-disable-next-line react/jsx-props-no-spreading
	// 					{...{
	// 						checked: row.getIsSelected(),
	// 						disabled: !row.getCanSelect(),
	// 						indeterminate: row.getIsSomeSelected(),
	// 						onChange: row.getToggleSelectedHandler(),
	// 					}}
	// 				/>
	// 			),
	// 			header: ({ table }) => (
	// 				<TableIndeterminateCheckbox
	// 					// eslint-disable-next-line react/jsx-props-no-spreading
	// 					{...{
	// 						checked: table.getIsAllRowsSelected(),
	// 						indeterminate: table.getIsSomeRowsSelected(),
	// 						onChange: table.getToggleAllRowsSelectedHandler(),
	// 					}}
	// 				/>
	// 			),
	// 			// footer: ({ table }) => (
	// 			// 	<TableIndeterminateCheckbox
	// 			// 		// eslint-disable-next-line react/jsx-props-no-spreading
	// 			// 		{...{
	// 			// 			checked: table.getIsAllRowsSelected(),
	// 			// 			indeterminate: table.getIsSomeRowsSelected(),
	// 			// 			onChange: table.getToggleAllRowsSelectedHandler(),
	// 			// 		}}
	// 			// 	/>
	// 			// ),
	// 			id: 'select',
	// 			enableSorting: false,
	// 			meta: {
	// 				className: '!py-0',
	// 			},
	// 		}),

	// 		columnHelper.accessor('Id', {
	// 			cell: (info) => <div>{info.getValue()}</div>,
	// 			header: () => 'Id',
	// 			// footer: () => 'Id',
	// 		}),
	// 		columnHelper.accessor('Name', {
	// 			cell: (info) => <div>{info.getValue()}</div>,
	// 			header: () => 'Name',
	// 			// footer: () => 'Name',
	// 		}),
	// 		columnHelper.accessor('PhoneNumber', {
	// 			cell: (info) => <div>{info.getValue()}</div>,
	// 			header: () => 'Phone',
	// 			// footer: () => 'Phone',
	// 		}),
	// 		columnHelper.accessor('Rate', {
	// 			cell: (info) => <div>{info.getValue()}</div>,
	// 			header: () => 'Rate',
	// 			// footer: () => 'Rate',
	// 		}),
	// 		columnHelper.accessor('User', {
	// 			cell: (info) => <div>{info.getValue()}</div>,
	// 			header: () => 'User',
	// 			// footer: () => 'User',
	// 		}),
	// 		columnHelper.accessor('Street', {
	// 			cell: (info) => <div>{info.getValue()}</div>,
	// 			header: () => 'Street',
	// 			// footer: () => 'Street',
	// 		}),
	// 		columnHelper.accessor('District', {
	// 			cell: (info) => <div>{info.getValue()}</div>,
	// 			header: () => 'District',
	// 			// footer: () => 'District',
	// 		}),
	// 		columnHelper.accessor('City', {
	// 			cell: (info) => <div>{info.getValue()}</div>,
	// 			header: () => 'City',
	// 			// footer: () => 'City',
	// 		}),
	// 		columnHelper.accessor('TotalCount', {
	// 			cell: (info) => <div>{info.getValue()}</div>,
	// 			header: () => 'TotalCount',
	// 			// footer: () => 'TotalCount',
	// 		}),

	// 		columnHelper.display({
	// 			cell: ({ row }) => {
	// 				const restaurant = row.original;

	// 				return (
	// 					<div className='flex items-center gap-2'>
	// 						<Button
	// 							// disabled={deleteMutation.isPending}
	// 							type='button'
	// 							// icon={deleteMutation.isPending ? 'Loading01' : 'Delete01'}
	// 							icon='Delete01'
	// 							// variant='ghost'
	// 							className='text-destructive'
	// 							onClick={() => {
	// 								// if (confirm(`Delete restaurant "${restaurant.Name}"?`)) {
	// 								deleteMutation.mutate(restaurant.Id,params);
	// 								// }
	// 							}}
	// 						/>
	// 					</div>
	// 				);
	// 			},
	// 			header: 'Actions',
	// 			// footer: 'Actions',
	// 			id: 'actions',
	// 			meta: {
	// 				className: '',
	// 			},
	// 		}),
	// 	],
	// 	[],
	// );

	// const columns = [
	// 	columnHelper.display({
	// 		cell: ({ row }) => (
	// 			<TableIndeterminateCheckbox
	// 				// eslint-disable-next-line react/jsx-props-no-spreading
	// 				{...{
	// 					checked: row.getIsSelected(),
	// 					disabled: !row.getCanSelect(),
	// 					indeterminate: row.getIsSomeSelected(),
	// 					onChange: row.getToggleSelectedHandler(),
	// 				}}
	// 			/>
	// 		),
	// 		header: ({ table }) => (
	// 			<TableIndeterminateCheckbox
	// 				// eslint-disable-next-line react/jsx-props-no-spreading
	// 				{...{
	// 					checked: table.getIsAllRowsSelected(),
	// 					indeterminate: table.getIsSomeRowsSelected(),
	// 					onChange: table.getToggleAllRowsSelectedHandler(),
	// 				}}
	// 			/>
	// 		),
	// 		footer: ({ table }) => (
	// 			<TableIndeterminateCheckbox
	// 				// eslint-disable-next-line react/jsx-props-no-spreading
	// 				{...{
	// 					checked: table.getIsAllRowsSelected(),
	// 					indeterminate: table.getIsSomeRowsSelected(),
	// 					onChange: table.getToggleAllRowsSelectedHandler(),
	// 				}}
	// 			/>
	// 		),
	// 		id: 'select',
	// 		enableSorting: false,
	// 		meta: {
	// 			className: '!py-0',
	// 		},
	// 	}),

	// 	columnHelper.accessor('Id', {
	// 		cell: (info) => <div>{info.getValue()}</div>,
	// 		header: () => 'Id',
	// 		// footer: () => 'Id',
	// 	}),
	// 	columnHelper.accessor('Name', {
	// 		cell: (info) => <div>{info.getValue()}</div>,
	// 		header: () => 'Name',
	// 		// footer: () => 'Name',
	// 	}),
	// 	columnHelper.accessor('PhoneNumber', {
	// 		cell: (info) => <div>{info.getValue()}</div>,
	// 		header: () => 'Phone',
	// 		// footer: () => 'Phone',
	// 	}),
	// 	columnHelper.accessor('Rate', {
	// 		cell: (info) => <div>{info.getValue()}</div>,
	// 		header: () => 'Rate',
	// 		// footer: () => 'Rate',
	// 	}),
	// 	columnHelper.accessor('User', {
	// 		cell: (info) => <div>{info.getValue()}</div>,
	// 		header: () => 'User',
	// 		// footer: () => 'User',
	// 	}),
	// 	columnHelper.accessor('Street', {
	// 		cell: (info) => <div>{info.getValue()}</div>,
	// 		header: () => 'Street',
	// 		// footer: () => 'Street',
	// 	}),
	// 	columnHelper.accessor('District', {
	// 		cell: (info) => <div>{info.getValue()}</div>,
	// 		header: () => 'District',
	// 		// footer: () => 'District',
	// 	}),
	// 	columnHelper.accessor('City', {
	// 		cell: (info) => <div>{info.getValue()}</div>,
	// 		header: () => 'City',
	// 		// footer: () => 'City',
	// 	}),
	// 	columnHelper.accessor('TotalCount', {
	// 		cell: (info) => <div>{info.getValue()}</div>,
	// 		header: () => 'TotalCount',
	// 		// footer: () => 'TotalCount',
	// 	}),

	// 	columnHelper.display({
	// 		cell: ({ row }) => {
	// 			const restaurant = row.original;

	// 			return (
	// 				<div className='flex items-center gap-2'>
	// 					<Button
	// 						disabled={deleteMutation.isPending}
	// 						type='button'
	// 						icon={deleteMutation.isPending ? 'Loading01' : 'Delete01'}
	// 						// variant='ghost'
	// 						className='text-destructive'
	// 						onClick={() => {
	// 							// if (confirm(`Delete restaurant "${restaurant.Name}"?`)) {
	// 							deleteMutation.mutate(restaurant.Id);
	// 							// }
	// 						}}
	// 					/>
	// 				</div>
	// 			);
	// 		},
	// 		header: 'Actions',
	// 		// footer: 'Actions',
	// 		id: 'actions',
	// 		meta: {
	// 			className: '',
	// 		},
	// 	}),
	// ];

	const table = useReactTable({
		data,
		columns,
		// pageCount: Math.ceil(totalCount / pagination.pageSize),
		pageCount: 8,
		manualPagination: true,
		state: { pagination },
		onPaginationChange: setPagination,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	// const table = useReactTable({
	// 	data: data ?? [],
	// 	columns,
	// 	state: {
	// 		// sorting,
	// 		rowSelection,
	// 		// globalFilter,
	// 		// columnVisibility,
	// 		pagination,
	// 	},
	// 	// onSortingChange: setSorting,
	// 	onPaginationChange: setPagination,
	// 	enableRowSelection: true,
	// 	manualPagination: true,
	// 	manualFiltering: true,
	// 	//  pageCount: data., // test icin eklendi
	// 	// pageCount: data ? Math.ceil(data.TotalCount / pagination.pageSize) : -1,
	// 	pageCount: Math.ceil(totalCount / pagination.pageSize),

	// 	onRowSelectionChange: setRowSelection,
	// 	// enableGlobalFilter: true,
	// 	// onGlobalFilterChange: setGlobalFilter,
	// 	getCoreRowModel: getCoreRowModel(),
	// 	// getFilteredRowModel: getFilteredRowModel	(),
	// 	// getSortedRowModel: getSortedRowModel(),
	// 	// getPaginationRowModel: getPaginationRowModel(),
	// 	// initialState: {
	// 	// 	pagination: { pageSize: 20 },
	// 	// },
	// });

	if (isFetching) return <div>Bekleniyor....</div>;

	return (

		// <Card className='h-full'>
		// 	<CardHeader>
		// 		<CardHeaderChild>
		// 			<CardTitle
		// 				iconProps={{
		// 					icon: 'Restaurant',
		// 					color: 'amber',
		// 					size: 'text-3xl',
		// 				}}>
		// 				Restaurants
		// 			</CardTitle>
		// 		</CardHeaderChild>
		// 		<CardHeaderChild>
		// 			<Dropdown>
		// 				<DropdownToggle hasIcon={false}>
		// 					<Button icon='ColumnDelete' variant='link' />
		// 				</DropdownToggle>
		// 				<DropdownMenu placement='bottom-end'>
		// 					<div className='flex items-center'>
		// 						<div className='grow'>Id</div>
		// 						<div className='shrink'>
		// 							<Checkbox
		// 								dimension='sm'
		// 								name='Id'
		// 								checked={columnVisibility.Id}
		// 								onChange={handleCheckboxChange}
		// 							/>
		// 						</div>
		// 					</div>
		// 					<div className='flex items-center'>
		// 						<div className='grow'>Name</div>
		// 						<div className='shrink'>
		// 							<Checkbox
		// 								dimension='sm'
		// 								name='Name'
		// 								checked={columnVisibility.Name}
		// 								onChange={handleCheckboxChange}
		// 							/>
		// 						</div>
		// 					</div>
		// 					<div className='flex items-center'>
		// 						<div className='grow'>PhoneNumber</div>
		// 						<div className='shrink'>
		// 							<Checkbox
		// 								dimension='sm'
		// 								name='PhoneNumber'
		// 								checked={columnVisibility.PhoneNumber}
		// 								onChange={handleCheckboxChange}
		// 							/>
		// 						</div>
		// 					</div>
		// 					<div className='flex items-center'>
		// 						<div className='grow'>Rate</div>
		// 						<div className='shrink'>
		// 							<Checkbox
		// 								dimension='sm'
		// 								name='Rate'
		// 								checked={columnVisibility.Rate}
		// 								onChange={handleCheckboxChange}
		// 							/>
		// 						</div>
		// 					</div>
		// 					<div className='flex items-center'>
		// 						<div className='grow'>User</div>
		// 						<div className='shrink'>
		// 							<Checkbox
		// 								dimension='sm'
		// 								name='User'
		// 								checked={columnVisibility.User}
		// 								onChange={handleCheckboxChange}
		// 							/>
		// 						</div>
		// 					</div>
		// 					<div className='flex items-center'>
		// 						<div className='grow'>Street</div>
		// 						<div className='shrink'>
		// 							<Checkbox
		// 								dimension='sm'
		// 								name='Street'
		// 								checked={columnVisibility.Street}
		// 								onChange={handleCheckboxChange}
		// 							/>
		// 						</div>
		// 					</div>
		// 					<div className='flex items-center'>
		// 						<div className='grow'>District</div>
		// 						<div className='shrink'>
		// 							<Checkbox
		// 								dimension='sm'
		// 								name='District'
		// 								checked={columnVisibility.District}
		// 								onChange={handleCheckboxChange}
		// 							/>
		// 						</div>
		// 					</div>
		// 					<div className='flex items-center'>
		// 						<div className='grow'>City</div>
		// 						<div className='shrink'>
		// 							<Checkbox
		// 								dimension='sm'
		// 								name='City'
		// 								checked={columnVisibility.City}
		// 								onChange={handleCheckboxChange}
		// 							/>
		// 						</div>
		// 					</div>
		// 					<div className='flex items-center'>
		// 						<div className='grow'>Actions</div>
		// 						<div className='shrink'>
		// 							<Checkbox
		// 								dimension='sm'
		// 								name='actions'
		// 								checked={columnVisibility.actions}
		// 								onChange={handleCheckboxChange}
		// 							/>
		// 						</div>
		// 					</div>
		// 				</DropdownMenu>
		// 			</Dropdown>
		// 		</CardHeaderChild>
		// 	</CardHeader>
		// 	<CardBody className='overflow-auto'>
		// 		<TableTemplate table={table} hasFooter={false} />
		// 	</CardBody>
		// 	<TableCardFooterTemplate table={table} />
		// </Card>

		<div className='space-y-4'>
			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>
									{flexRender(
										header.column.columnDef.header,
										header.getContext(),
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{isLoading ? (
						<tr>
							<td colSpan={columns.length}>Yükleniyor...</td>
						</tr>
					) : (
						table.getRowModel().rows.map((row) => (
							<tr key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<td key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))
					)}
				</tbody>
			</table>

			<div className='flex items-center justify-between'>
				<Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
					Önceki
				</Button>
				<span>
					Sayfa {pagination.pageIndex + 1} / {Math.ceil(totalCount / pagination.pageSize)}
				</span>
				<Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
					Sonraki
				</Button>
			</div>
		</div>
	);
};

export default TableRestaurantList;
