/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />
/* eslint-disable @typescript-eslint/no-unused-vars */
// prettier-ignore
declare type UtilityNames = 'p' | 'm' | 'w' | 'h' | 'z' | 'border' | 'grid' | 'flex' | 'bg' | 'text' | 'font' | 'opacity' | 'animate' | 'transition' | 'transform' | 'align' | 'justify' | 'content' | 'pos' | 'box' | 'overflow' | 'underline' | 'list' | 'gradient' | 'divide' | 'gap' | 'ring' | 'icon' | 'container' | 'space' | 'table' | 'order' | 'place' | 'display' | 'shadow' | 'blend' | 'filter' | 'backdrop' | 'cursor' | 'outline' | 'select';
// prettier-ignore
declare type VariantNames = 'hover' | 'active' | 'focus' | 'enabled' | 'dark' | 'light' | 'sm' | 'lg' | 'md' | 'xl' | 'xxl' | 'first' | 'last' | 'child' | 'root' | 'before' | 'after' | 'all';
// prettier-ignore
declare type AttributifyNames<Prefix extends string = ''> = `${Prefix}${UtilityNames}` | `${Prefix}${VariantNames}` | `${Prefix}${VariantNames}:${UtilityNames}`;
type AttributifyAttributes = Partial<Record<AttributifyNames, string>>;

declare namespace svelte.JSX {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface HTMLAttributes<T> extends AttributifyAttributes {}
}
