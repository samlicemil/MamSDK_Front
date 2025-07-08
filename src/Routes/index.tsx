import { createBrowserRouter, RouterProvider } from 'react-router';
import { lazy } from 'react';
import LoginPage from '@/pages/Login.page';
import Protected from '@/Protected/Protected';
import Root from '@/Root';
import DefaultLayout from '@/layouts/Default.layout';
import Providers from '@/Providers/Providers';
import LandingPage from '@/pages/Landing.page';
import pages from './pages';
import MailLayout from '@/layouts/Mail.layout';
import Page404Page from '@/pages/Page404.page';
import UnderConstructionPage from '@/pages/UnderConstruction.page';
import DocumentationPages from '@/Routes/infoPages/documentationPages';
import ExamplePages from '@/Routes/infoPages/examplePages';
import RegisterPage from '@/pages/Register.page';
// import RestaurantLayout from '@/pages/apps/restaurant/_layouts/Restaurant.layout';

// Lazily loaded components for routes
// const SalesLayout = lazy(() => import('@/pages/apps/sales/_layouts/Sales.layout'));
// const SalesDashboardPage = lazy(() => import('@/pages/apps/sales/SalesDashboard.page'));
// const SalesListPage = lazy(() => import('@/pages/apps/sales/SalesList.page'));
// const SalesViewPage = lazy(() => import('@/pages/apps/sales/SalesView.page'));

const CustomerLayout = lazy(() => import('@/pages/apps/customer/_layouts/Customer.layout'));
const CustomerDashboardPage = lazy(() => import('@/pages/apps/customer/CustomerDashboard.page'));
const CustomerListPage = lazy(() => import('@/pages/apps/customer/CustomerList.page'));
const CustomerEditPage = lazy(() => import('@/pages/apps/customer/CustomerEdit.page'));
const CustomerViewPage = lazy(() => import('@/pages/apps/customer/CustomerView.page'));

const RestaurantLayout = lazy(() => import('@/pages/apps/restaurant/_layouts/Restaurant.layout'));
const RestaurantDashboardPage = lazy(
	() => import('@/pages/apps/restaurant/RestaurantDashboard.page'),
);

// const ProductsLayout = lazy(() => import('@/pages/apps/products/_layouts/Products.layout'));
// const ProductsDashboardPage = lazy(() => import('@/pages/apps/products/ProductsDashboard.page'));
// const ProductsListPage = lazy(() => import('@/pages/apps/products/ProductsList.page'));
// const ProductsEditPage = lazy(() => import('@/pages/apps/products/ProductsEdit.page'));

// const ProjectLayout = lazy(() => import('@/pages/apps/projects/_layouts/Project.layout'));
// const ProjectDashboardPage = lazy(() => import('@/pages/apps/projects/ProjectDashboard.page'));
// const ProjectBoardPage = lazy(() => import('@/pages/apps/projects/ProjectBoard.page'));
// const ProjectListPage = lazy(() => import('@/pages/apps/projects/ProjectList.page'));
// const ProjectGridPage = lazy(() => import('@/pages/apps/projects/ProjectGrid.page'));

// const InvoiceLayout = lazy(() => import('@/pages/apps/invoices/_layouts/Invoice.layout'));
// const InvoicesDashboardPage = lazy(() => import('@/pages/apps/invoices/InvoicesDashboard.page'));
// const InvoicesListPage = lazy(() => import('@/pages/apps/invoices/InvoicesList.page'));
// const InvoicesViwPage = lazy(() => import('@/pages/apps/invoices/InvoicesViw.page'));

// const ChatLayout = lazy(() => import('@/pages/apps/chat/_layouts/Chat.layout'));
// const ChatDashboardPage = lazy(() => import('@/pages/apps/chat/ChatDashboard.page'));

// const MailLayoutPage = lazy(() => import('@/pages/apps/mail/_layouts/Mail.layout.page'));
// const MailDashboardPage = lazy(() => import('@/pages/apps/mail/MailDashboard.page'));
// const MailInboxPage = lazy(() => import('@/pages/apps/mail/MailInbox.page'));
// const MailNewPage = lazy(() => import('@/pages/apps/mail/MailNew.page'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Providers />,
		children: [
			{
				path: '/',
				element: <Root />,
				children: [
					{
						path: '/',
						// element: <Protected role='admin' />,
						children: [
							{
								element: <DefaultLayout />,
								children: [
									{
										// Customer
										//path: pages.apps.customer.to,
										path: '/',
										element: <CustomerLayout />,
										children: [
											{
												path: pages.apps.customer.to,
												element: <CustomerDashboardPage />,
											},
											{
												path: pages.apps.customer.subPages.list.to,
												element: <CustomerListPage />,
											},
											{
												path: pages.apps.customer.subPages.edit.to,
												element: <CustomerEditPage />,
											},
											{
												path: pages.apps.customer.subPages.view.to,
												element: <CustomerViewPage />,
											},
										],
									},
									//Restaurant
									{
										path: pages.apps.restaurant.to,
										element: <RestaurantLayout />,
										children: [
											{
												index: true,
												element: <RestaurantDashboardPage />,
											},
										],
									},
								],
							},
						],
					},

					// Public routes
					{
						// path: pages.pagesExamples.login.to,
						path: 'login',
						element: <LoginPage />,
					},
					{
						path: pages.pagesExamples.signup.to,
						element: <RegisterPage />,
					},
					{
						path: '*',
						element: <Page404Page />,
					},
					// Protected routes
				],
			},
		],
	},
]);

const Routes = () => {
	return <RouterProvider router={router} />;
};

export default Routes;
