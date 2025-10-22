export default function Icon({ name, className, size = 16, ...props }) {
	const iconPath = `/sprites.svg#${name}`;

	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='currentColor'
			stroke='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<use href={iconPath} />
		</svg>
	);
}
