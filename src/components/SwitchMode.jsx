import Icon from "./Icon";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export default function SwitchMode() {
	const [isActive, setIsActive] = useState(0);
	return (
		<div className='flex items-center p-1 bg-theme-switch-bg rounded-full  w-max'>
			<button
				className={`relative ${
					isActive === 0
						? "text-theme-text-hover"
						: "text-theme-text-sec"
				} hover:text-theme-text-hover cursor-pointer px-3 py-[0.35rem]`}
				onClick={() => setIsActive(0)}
			>
				<Icon name='computer' size={14} className={"z-100 relative"} />
				{isActive === 0 && (
					<motion.div
						layoutId='switch'
						transition={{ layout: { duration: 0.2 } }}
						className='w-full h-full absolute top-0 left-0 bg-theme-switch-bg-active rounded-full'
					></motion.div>
				)}
			</button>
			<button
				className={`relative ${
					isActive === 1
						? "text-theme-text-hover"
						: "text-theme-text-sec"
				} hover:text-theme-text-hover cursor-pointer px-3 py-[0.35rem]`}
				onClick={() => setIsActive(1)}
			>
				<Icon name='lightmode' size={14} className={"z-100 relative"} />
				{isActive === 1 && (
					<motion.div
						transition={{ layout: { duration: 0.2 } }}
						layoutId='switch'
						className='w-full h-full absolute top-0 left-0 bg-theme-switch-bg-active rounded-full'
					></motion.div>
				)}
			</button>
			<button
				className={`relative ${
					isActive === 2
						? "text-theme-text-hover"
						: "text-theme-text-sec"
				} hover:text-theme-text-hover cursor-pointer px-3 py-[0.35rem]`}
				onClick={() => setIsActive(2)}
			>
				<Icon name='darkmode' size={14} className={"z-100 relative"} />
				{isActive === 2 && (
					<motion.div
						transition={{ layout: { duration: 0.2 } }}
						layoutId='switch'
						className='w-full h-full absolute top-0 left-0 bg-theme-switch-bg-active rounded-full'
					></motion.div>
				)}
			</button>
		</div>
	);
}
