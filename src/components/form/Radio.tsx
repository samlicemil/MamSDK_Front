import {
	Children,
	cloneElement,
	FC,
	forwardRef,
	InputHTMLAttributes,
	ReactElement,
	ReactNode,
	useId,
} from 'react';
import classNames from 'classnames';
import themeConfig from '@/config/theme.config';
import { IValidationBaseProps } from './Validation';

// @start-snippet:: interface
export type TRadioDimension = 'sm' | 'default' | 'lg' | 'xl';

export interface IRadioProps
	extends InputHTMLAttributes<HTMLInputElement>,
		Partial<IValidationBaseProps> {
	className?: string;
	children?: ReactNode;
	id?: string;
	inputClassName?: string;
	isInline?: boolean;
	label?: ReactNode;
	description?: ReactNode;
	name: string;
	selectedValue: string | number | undefined;
	dimension?: TRadioDimension;
	value: string | number;
	disabled?: boolean;
}
// @end-snippet:: interface
const Radio = forwardRef<HTMLInputElement, IRadioProps>((props, ref) => {
	const {
		className,
		children,
		id,
		inputClassName,
		isInline = false,
		label,
		description,
		name,
		selectedValue,
		dimension = 'default',
		value,
		disabled = false,
		isValid,
		isTouched,
		invalidFeedback,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		isValidMessage,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		validFeedback,
		...rest
	} = props;

	const defaultId = useId();

	/**
	 * Width&Height & Margin & Font Size
	 */
	const radioDimensions: { [key in TRadioDimension]: { general: string; label: string } } = {
		sm: {
			general: classNames('w-5', 'h-5', 'ltr:mr-1 rtl:ml-1'),
			label: classNames('text-sm'),
		},
		default: {
			general: classNames('w-7', 'h-7', 'ltr:mr-1.5 rtl:ml-1.5'),
			label: classNames('text-base'),
		},
		lg: {
			general: classNames('w-9', 'h-9', 'ltr:mr-2 rtl:ml-2'),
			label: classNames('text-lg'),
		},
		xl: {
			general: classNames('w-10', 'h-10', 'ltr:mr-2.5 rtl:ml-2.5'),
			label: classNames('text-xl'),
		},
	};
	const radioDimensionClasses = radioDimensions[dimension].general;
	const labelDimensionClasses = radioDimensions[dimension].label;

	const radioClasses = classNames(
		'peer',
		'cursor-pointer appearance-none',
		'rounded-full',
		'bg-transparent',
		// border
		'border-zinc-100 dark:border-zinc-800',
		// hover:border
		[`hover:border-blue-500`],
		[`dark:hover:border-blue-500`],
		'disabled:!border-zinc-500',
		// checked:ring
		'checked:ring-4 checked:ring-inset checked:ring-white dark:checked:ring-zinc-900 bg-none',
		// checked:bg
		[`checked:bg-blue-500`],
		{ 'sr-only': children },
		themeConfig.borderWidth,
		themeConfig.transition,
		radioDimensionClasses,
		inputClassName,
		// disabled
		'disabled:pointer-events-none disabled:opacity-50',
		{
			'!border-red-500 ring-4 ring-red-500/30': !isValid && isTouched && invalidFeedback,
			'!border-emerald-500 focus:ring-4 focus:ring-emerald-500/30':
				isValid && isTouched && !invalidFeedback,
		},
	);

	return (
		<div
			data-component-name='Radio'
			className={classNames(
				'items-center py-1.5',
				{ flex: !isInline, 'inline-flex': isInline, 'me-4': isInline },
				'disabled:!opacity-25',
				className,
			)}>
			<input
				ref={ref}
				id={id || defaultId}
				type='radio'
				name={name}
				className={radioClasses}
				checked={selectedValue === value}
				value={value}
				disabled={disabled}
				{...rest}
			/>
			{(label || description) && (
				<div className='flex flex-col'>
					{!!label && (
						<label
							htmlFor={id || defaultId}
							className={classNames(
								'cursor-pointer text-base',
								{ '!pointer-events-none opacity-50': disabled },
								labelDimensionClasses,
							)}>
							{label}
						</label>
					)}
					{!!description && (
						<label
							htmlFor={id || defaultId}
							className={classNames(
								'cursor-pointer text-sm text-zinc-500',
								{ '!pointer-events-none opacity-50': disabled },
								labelDimensionClasses,
							)}>
							{description}
						</label>
					)}
				</div>
			)}

			{!!children && (
				<label
					className={classNames(
						'cursor-pointer overflow-hidden rounded-md border-4 border-transparent outline outline-4 outline-offset-2 outline-zinc-100 dark:outline-zinc-800',
						[`peer-checked:border-blue-500`],
					)}
					htmlFor={id || defaultId}>
					{children}
				</label>
			)}
		</div>
	);
});
Radio.displayName = 'Radio';

// @start-snippet:: interface
interface IRadioGroupProps {
	children: ReactElement<IRadioProps> | ReactElement<IRadioProps>[];
	invalidFeedback?: string;
	isInline?: boolean;
	isTouched?: boolean;
	isValid?: boolean;
	isValidMessage?: boolean;
	validFeedback?: string;
}
// @end-snippet:: interface
export const RadioGroup: FC<IRadioGroupProps> = (props) => {
	const {
		children,
		invalidFeedback,
		isInline = false,
		isTouched = false,
		isValid = false,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		isValidMessage = true,
		validFeedback,
		...rest
	} = props;
	return (
		<div data-component-name='Radio/RadioGroup' {...rest}>
			{Children.map(children, (child) =>
				cloneElement(child, {
					isInline: child.props.isInline || isInline,
					isValid,
					isTouched,
					invalidFeedback,
					validFeedback,
					isValidMessage: false,
				}),
			)}
		</div>
	);
};

export default Radio;
