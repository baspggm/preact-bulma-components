import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

interface ItemProps extends ModifierProps {
	href?: string;
	icon?: string;
}

export default BuildElement<ItemProps>('', {
	addAttributes: (props) => ({
		['href']: props.href || '#'
	}),

	render: (className, { href, ...attribs }, { children, icon }) => (
		<li class={className} {...attribs}>
			{icon && <span class='icon is-small'><i class={icon} aria-hidden='true'></i></span>}
			<a href={href}>{children}</a>
		</li>
	)
});
