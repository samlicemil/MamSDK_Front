/// <reference types="vite/client" />
declare module '*.tsx?raw' {
	const content: string;
	export default content;
}
