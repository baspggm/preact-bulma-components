import { h } from 'preact';
import BuildElement from '../BuildElement';
import { OtherSizes } from '../Bulma';
import { ModifierProps } from '../Modifiers';

interface IconProps extends ModifierProps {
	size?: OtherSizes;
}

export default BuildElement<IconProps>('icon', {
	addClasses: (props) => ({
		[`is-${props.size}`]: !!props.size
	}),

	render: (className, attr) => (
		<span class={className} {...attr}>
			<i>todo: class</i>
		</span>
	)
});
