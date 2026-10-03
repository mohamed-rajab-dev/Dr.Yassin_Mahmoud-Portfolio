export function ThemeScript() {
	const script = `
		(function () {
			try {
				const savedTheme = localStorage.getItem('theme');

				const theme =
					savedTheme === 'light'
						? 'light'
						: 'dark';

				document.documentElement.dataset.theme = theme;
			} catch {
				document.documentElement.dataset.theme = 'dark';
			}
		})();
	`;

	return (
		<script
			dangerouslySetInnerHTML={{
				__html: script,
			}}
		/>
	);
}
