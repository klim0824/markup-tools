/**
 * Fix the viewport with JavaScript for window widths less than 360px.
 * @link https://zenn.dev/tak_dcxi/articles/690caf6e9c4e26#360px-%E6%9C%AA%E6%BA%80%E3%81%AF-js-%E3%81%A7-viewport-%E3%82%92%E5%9B%BA%E5%AE%9A%E3%81%99%E3%82%8B
 * @returns void
 */
export const viewport = (): void => {
	const viewport = document.querySelector('meta[name="viewport"]');

	const switchViewport = () => {
		const value = window.outerWidth > 360 ? 'width=device-width,initial-scale=1' : 'width=360';

		if (viewport && viewport.getAttribute('content') !== value) {
			viewport.setAttribute('content', value);
		}
	};

	addEventListener('resize', switchViewport, false);
	switchViewport();
};
