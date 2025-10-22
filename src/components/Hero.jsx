import { useOS } from "../hook/useOS";

export default function Section1() {
	const os = useOS();
	return (
		<section className='container section mx-auto bg-theme-bg '>
			<div className='max-w-[65ch] mb-[56px]'>
				<h1 className='text-[1.625rem] leading-[1.25] tracking-[-.125rem] text-balance mb-[1.4rem]'>
					为让你高效非凡而生，Cursor 是与 AI 一起编程的最佳方式。
				</h1>
				<div className=''>
					<a
						href='#'
						className='btn text-base p-[0.8rem_1.35rem] leading-[1] inline-flex items-center '
					>
						为 {os} 下载<span className='ps-1 font-sans'>⤓</span>
					</a>
				</div>
			</div>
			<div className='w-full h-[min(780px,70vh)] bg-[repeating-linear-gradient(-45deg,rgba(0,0,05,.05)_0_2px,transparent_2px_8px)] border-theme-border border-1  rounded-sm'></div>
		</section>
	);
}
