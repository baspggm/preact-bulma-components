import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../BuildElement';
import { Directions } from '../Bulma';
import { ModifierProps } from '../Modifiers';
import Column, { ColumnsColumnProps } from './Column';

type GapSize = 'gapless' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

interface ColumnsProps extends ModifierProps {
	centered?: Directions;
	gap?: GapSize;
	multiline?: boolean;
}

const Columns = BuildElement<ColumnsProps>('columns', {
	addClasses: (props) => ({
		['is-centered']: props.centered === 'both' || props.centered === 'horizontal',
		['is-vcentered']: props.centered === 'both' || props.centered === 'vertical',
		[`is-${props.gap}`]: !!props.gap,
		['is-multiline']: !!props.multiline
	})
}) as (FunctionalComponent<RenderableProps<ColumnsProps>> & {
	Column: FunctionalComponent<RenderableProps<ColumnsColumnProps>>;
});

export default Columns;
Columns.Column = Column;
