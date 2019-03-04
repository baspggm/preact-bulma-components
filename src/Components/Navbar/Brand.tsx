import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';

interface NavbarBrandProps extends ModifierProps {
}

export default function NavbarBrand(props: RenderableProps<NavbarBrandProps>) {
	const className = ClassNames('navbar-brand', {
		...AddModifierClasses(props)
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
