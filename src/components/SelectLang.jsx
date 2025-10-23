import Icon from "./Icon.jsx";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const langList = [
	{
		code: "zh-CN",
		name: "简体中文",
		// selected: true,
	},
	{
		code: "en-US",
		name: "English",
		// selected: false,
	},
	{
		code: "ja-JP",
		name: "日本語",
		// selected: false,
	},
	{
		code: "zh-TW",
		name: "繁體中文",
		// selected: false,
	},
];
export default function SelectLang() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectBoxVisible, setSelectBoxVisible] = useState(false);
	const btnRef = useRef(null);
	const menuRef = useRef(null);
	useEffect(() => {
		const handleClick = e => {
			if (!selectBoxVisible) {
				return;
			}
			if (
				!btnRef.current.contains(e.target) &&
				!menuRef.current.contains(e.target)
			) {
				setSelectBoxVisible(false);
			}
		};
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [selectBoxVisible]);

	return (
		<div className='relative'>
			<button
				ref={btnRef}
				onClick={() => setSelectBoxVisible(!selectBoxVisible)}
				className='flex items-center gap-2 text-theme-text text-sm bg-theme-switch-bg px-3 py-[0.35rem] rounded-full cursor-pointer'
			>
				<Icon name='Earth' size={14} className='text-theme-text-sec' />
				<p>{langList[selectedIndex].name}</p>
			</button>
			<AnimatePresence>
				{selectBoxVisible && (
					<motion.div
						ref={menuRef}
						variants={{
							visible: {
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.2,
									ease: "easeInOut",
								},
							},
							hidden: {
								opacity: 0,
								y: 10,
								transition: {
									duration: 0.2,
									ease: "easeInOut",
								},
							},
						}}
						initial='hidden'
						animate='visible'
						exit='hidden'
						className='absolute bottom-full right-0 mb-2 shadow-theme-switch'
					>
						<ul className='flex flex-col gap-2 text-sm w-[160px] bg-theme-switch-bg px-3 py-3 rounded-sm'>
							{langList.map((item, index) => (
								<li
									key={item.code}
									onClick={() => {
										setSelectedIndex(index);
										setSelectBoxVisible(false);
									}}
									className='flex justify-between items-center nav_link px-0 cursor-pointer'
								>
									<p>{item.name}</p>
									{index === selectedIndex && <span>✓</span>}
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
