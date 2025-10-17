export default function UserComment({
	comment,
	author,
	authorTitle,
	authorImgUrl,
}) {
	return (
		<figure className='flex flex-col bg-theme-card-hex border-1 border-theme-border-02 p-4 rounded-sm'>
			<blockquote className='grow-1'>{comment}</blockquote>
			<figcaption className='flex items-center gap-2 mt-12'>
				<picture className='w-10 h-10 rounded-sm'>
					<source srcSet={authorImgUrl} />
					<img
						src={authorImgUrl}
						alt={author}
						className='w-full h-full object-cover rounded-sm'
					/>
				</picture>
				<div className='flex flex-col text-sm'>
					{author}
					<span className='text-theme-text-sec'>{authorTitle}</span>
				</div>
			</figcaption>
		</figure>
	);
}
