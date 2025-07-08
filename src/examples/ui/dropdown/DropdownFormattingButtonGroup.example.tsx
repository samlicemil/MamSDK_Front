import Dropdown, { DropdownMenu, DropdownToggle } from '@/components/ui/Dropdown';
import Button from '@/components/ui/Button';
import ButtonGroup from '@/components/ui/ButtonGroup';

const DropdownFormattingButtonGroupExample = () => {
	return (
		<Dropdown>
			<DropdownToggle hasIcon={false}>
				<Button icon='TextColor' variant='link' />
			</DropdownToggle>
			<DropdownMenu placement='top-start' rounded='rounded-2xl'>
				<div className='flex gap-2'>
					<ButtonGroup variant='soft' color='zinc'>
						<Button icon='TextBold' title='Bold' />
						<Button icon='TextItalic' title='Italic' />
						<Button icon='TextUnderline' title='Underline' />
						<Button icon='TextStrikethrough' title='Strikethrough' />
					</ButtonGroup>
					<ButtonGroup variant='soft' color='zinc'>
						<Button icon='TextAlignLeft' title='Text Align Left' />
						<Button icon='TextAlignRight' title='Text Align Right' />
						<Button icon='TextAlignCenter' title='Text Align Center' />
						<Button icon='TextAlignJustifyCenter' title='Text Align Justify Center' />
					</ButtonGroup>
					<ButtonGroup variant='soft' color='zinc'>
						<Button icon='TextIndentLess' title='Indent Less' />
						<Button icon='TextIndentMore' title='Indent More' />
					</ButtonGroup>
					<ButtonGroup variant='soft' color='zinc'>
						<Button icon='LeftToRightListNumber' title='Ordered List' />
						<Button icon='LeftToRightListStar' title='Unordered List' />
					</ButtonGroup>
				</div>
			</DropdownMenu>
		</Dropdown>
	);
};

export default DropdownFormattingButtonGroupExample;
