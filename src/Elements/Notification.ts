import BuildElement from '../BuildElement';
import { Colors } from '../Bulma';
import { ModifierProps } from '../Modifiers';

interface NotificationProps extends ModifierProps {
	color?: Colors;
}

export default BuildElement<NotificationProps>('notification', {
	addClasses: (props) => ({
		[`is-${props.color}`]: !!props.color
	})
});
