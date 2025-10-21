// import { use } from "react";
import { useOS } from "../hook/useOS";
import Icon from "./Icon";

export default function Download() {
	const os = useOS();
	return (
		<section className='container section flex flex-col gap-8'>
			<div className='flex flex-col gap-5 items-center mb-6'>
				<h1 className='text-[4.5rem]'>立即体验 Cursor。</h1>
				<a
					href='#'
					className='btn text-base p-[0.8rem_1.35rem] leading-[1] inline-flex items-center '
				>
					为 {os} 下载<span className='ps-1 font-sans'>⤓</span>
				</a>
			</div>
			<span class='' aria-hidden='true'>
				<Icon name='computer' />
				<Icon name='lightmode' />
				<Icon name='darkmode' size={14} />
			</span>
		</section>
	);
}
