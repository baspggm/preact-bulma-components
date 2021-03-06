import { FunctionalComponent, h, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { Sides } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';
import Divider, { DropdownDividerProps } from './Divider';
import Item, { DropdownItemProps } from './Item';

export interface DropdownProps extends ModifierProps {
	active?: boolean;
	align?: Sides;
	direction?: 'down' | 'up';
	hoverable?: boolean;
	label: string;
}

const Dropdown = BuildElement<DropdownProps>('dropdown', {
	addClasses: (props) => ({
		[`is-active`]: !!props.active,
		[`is-hoverable`]: !!props.hoverable,
		[`is-up`]: !!props.direction && props.direction === 'up',
		[`is-${props.align}`]: !!props.align
	}),

	render: (className, attribs, { children, label }) => (
		<div class={className} {...attribs}>
			<div class='dropdown-trigger'>
				<button class='button' aria-haspopup='true' aria-controls='dropdown-menu'>{label}</button>
			</div>

			<div class='dropdown-menu' id='dropdown-menu' role='menu'>
				<div class='dropdown-content'>
					{children}
				</div>
			</div>
		</div>
	)
}) as (FunctionalComponent<RenderableProps<DropdownProps>> & {
	Divider: FunctionalComponent<RenderableProps<DropdownDividerProps>>;
	Item: FunctionalComponent<RenderableProps<DropdownItemProps>>;
});

export default Dropdown;
Dropdown.Divider = Divider;
Dropdown.Item = Item;
