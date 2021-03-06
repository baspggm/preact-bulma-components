import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface TableRowProps extends ModifierProps {
}

export default BuildElement<TableRowProps>('', {
	render: (className, attribs, { children }) => (
		<tr class={className} {...attribs}>
			{children}
		</tr>
	)
});
