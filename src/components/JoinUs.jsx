import imgJoinUS from "../assets/img-joinus.jpg";
export default function JoinUs() {
	return (
		<section className='container section flex flex-col gap-8'>
			<div className='flex flex-col gap-5 items-start mb-6'>
				<h1 className='text-left text-4xl'>
					Cursor 是一个专注于打造编程未来的实干型团队。
				</h1>
				<a
					href='#'
					className='btn text-base p-[0.8rem_1.35rem] leading-[1] inline-flex items-center '
				>
					加入我们<span className='ps-1 font-sans'>↗</span>
				</a>
			</div>
			<picture>
				<source srcSet={imgJoinUS} />
				<img src={imgJoinUS} alt='Join Us' />
			</picture>
		</section>
	);
}
