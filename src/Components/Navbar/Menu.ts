import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface NavbarMenuProps extends ModifierProps {
	active?: boolean;
}

export default BuildElement<NavbarMenuProps>('navbar-menu', {
	addClasses: (props) => ({
		['is-active']: !!props.active
	})
});
