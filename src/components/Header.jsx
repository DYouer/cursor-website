import logo from "../assets/logo.svg";
import { motion, AnimatePresence } from "motion/react";
import logoAnimationMov from "../assets/logo-light-theme.mov";
import logoAnimationWebm from "../assets/logo-light-theme.webm";
import logoAnimationMp4 from "../assets/logo-light-theme.mp4";
import { useState, useCallback, useRef } from "react";

export default function Header() {
	const [logoHover, setLogoHover] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const videoRef = useRef(null);
	const socityRef = useRef(null);
	const [isHoverSocity, setIsHoverSocity] = useState(false);
	const [subnavVisible, setSubnavVisible] = useState(false);

	const [mobileNavVisible, setMobileNavVisible] = useState(false);

	const handleMouseEnter = useCallback(() => {
		setLogoHover(true);
		setIsVisible(true);
		if (videoRef.current) {
			videoRef.current.loop = true;
			videoRef.current.play();
		}
	}, []);
	const handleMouseLeave = useCallback(() => {
		setLogoHover(false);

		if (videoRef.current) {
			videoRef.current.loop = false;
		}
	}, []);
	const handleVideoEnded = useCallback(() => {
		if (!logoHover) {
			setIsVisible(false);
		}
	}, [logoHover]);
	return (
		<header className='container  fixed  mx-auto inset-x-0 bg-theme-bg top-0 px-4  text-sm'>
			<motion.div className='grid h-[52px] grid-cols-[1fr_auto_auto] lg:grid-cols-[auto_1fr_auto] items-center'>
				<a
					href='/'
					aria-label='Homepage'
					className='focus-visible:in-focus-visible relative'
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<div
						// initial={{ opacity: 0 }}
						// animate={{ opacity: logoHover ? 1 : 0 }}
						// transition={{ duration: 0.5 }}
						className='pointer-events-none absolute left-0 top-0  h-full w-auto z-10'
					>
						{/* jsx中css属性名使用驼峰命名法 */}
						<video
							ref={videoRef}
							autoPlay
							preload='auto'
							playsInline
							className={`h-full w-auto opacity-[${
								isVisible ? 1 : 0
							}] `}
							muted
							onEnded={handleVideoEnded}
							src={logoAnimationMp4}
						>
							<source src={logoAnimationMov} type='video/mov' />
							<source src={logoAnimationWebm} type='video/webm' />
							<source src={logoAnimationMp4} type='video/mp4' />
						</video>
					</div>
					<img src={logo} alt='Logo' className='w-[95.75px]' />
					{/* sr-only = “视觉隐藏，朗读可见”，是 Web 可访问性（a11y）里 最常用也最安全的隐藏手段；
凡是“设计师不想显示、但读屏用户必须知道”的内容，就给它加 sr-only。 */}
					<span className='sr-only'>Cursor</span>
				</a>
				<nav className='hidden lg:block'>
					<ul className='flex justify-center'>
						<li>
							<a href='#' className='nav_link'>
								功能
							</a>
						</li>
						<li>
							<a href='#' className='nav_link'>
								企业
							</a>
						</li>
						<li>
							<a href='#' className='nav_link'>
								定价
							</a>
						</li>
						<li
							className='relative group/link'
							onMouseEnter={() => setSubnavVisible(true)}
							onMouseLeave={() => setSubnavVisible(false)}
						>
							<a href='#' className='nav_link '>
								资源
							</a>
							<motion.div
								variants={{
									visible: {
										opacity: 1,
										y: 0,
										pointerEvents: "auto",
										transition: {
											duration: 0.14,
											ease: "easeOut",
										},
									},
									hidden: {
										opacity: 0,
										pointerEvents: "none",
										y: "-0.7rem",
										transition: {
											duration: 0.14,
											ease: "easeOut",
										},
									},
								}}
								initial='hidden'
								animate={`${
									subnavVisible ? "visible" : "hidden"
								}`}
								className='absolute left-0 top-full pt-2'
							>
								<div className=' bg-theme-card-hex border-theme-border-05 border-[1px] rounded-sm px-3 py-2 shadow-subnav'>
									<ul className='grid gap-x-[calc(10/16*1rem)] grid-cols-[repeat(2,auto)]'>
										<li className=' min-w-[8rem]'>
											<a
												href='#'
												className='subnav_link p-0 py-[.3rem] flex'
											>
												更新日志
											</a>
										</li>

										<li className=' min-w-[8rem]'>
											<a
												href='#'
												className='subnav_link p-0 py-[.3rem] flex'
											>
												博客
											</a>
										</li>
										<li className='min-w-[8rem]'>
											<a
												href='#'
												className='subnav_link p-0 py-[.3rem] flex'
											>
												文档
											</a>
										</li>
										<li className='min-w-[8rem]'>
											<a
												href='#'
												className='subnav_link p-0 py-[.3rem] flex'
											>
												社区
											</a>
										</li>
										<li className='min-w-[8rem]'>
											<a
												href='#'
												className='subnav_link p-0 py-[.3rem] flex'
												ref={socityRef}
												onMouseEnter={() =>
													setIsHoverSocity(true)
												}
												onMouseLeave={() =>
													setIsHoverSocity(false)
												}
											>
												论坛
												<motion.span
													initial={{ opacity: 0 }}
													animate={{
														opacity: isHoverSocity
															? 1
															: 0,
													}}
												>
													&nbsp;↗
												</motion.span>
											</a>
										</li>
										<li className='min-w-[8rem]'>
											<a
												href='#'
												className='subnav_link p-0 py-[.3rem] flex'
											>
												加入我们
											</a>
										</li>
									</ul>
								</div>
							</motion.div>
						</li>
					</ul>
				</nav>
				<div className='lg:hidden  col-start-3 col-end-4 ml-3 mr-[-0.3rem] flex items-center'>
					<button
						className=' w-8 aspect-square'
						onClick={() => setMobileNavVisible(true)}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.125'
							stroke='currentColor'
							width='100%'
							height='100%'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
							></path>
						</svg>
					</button>
				</div>
				<div className=' col-start-2 col-end-3 lg:col-start-3 lg:col-end-[-1] row-start-1 row-end-2 flex gap-2'>
					<button className='btn btn_ghost'>登录</button>
					<button className='btn max-sm:hidden'>下载</button>
				</div>
				<AnimatePresence>
					{mobileNavVisible && (
						<motion.nav
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: { duration: 0 },
							}}
							exit={{ opacity: 0, transition: { duration: 0 } }}
							className='bg-theme-bg fixed inset-0 z-50 px-4 opacity-100 '
						>
							<header className='flex justify-end h-[52px] items-center  mb-[4.2rem]'>
								<button
									className=' w-8 aspect-square flex items-center justify-center mr-[-0.3rem]'
									onClick={() => setMobileNavVisible(false)}
								>
									<svg
										width='100%'
										height='100%'
										viewBox='0 0 24 24'
										fill='none'
										stroke-width='1.25'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										xmlns='http://www.w3.org/2000/svg'
										class='h-full w-full'
									>
										<path
											d='M6 18L18 6M6 6l12 12'
											stroke-linecap='round'
											stroke-linejoin='round'
										></path>
									</svg>
								</button>
							</header>
							<motion.ul
								className='flex flex-col'
								variants={{
									hidden: { opacity: 0 },
									visible: {
										opacity: 1,
										transition: { staggerChildren: 0.02 },
									},
								}}
								initial='hidden'
								animate='visible'
							>
								<motion.li
									variants={{
										hidden: { opacity: 0 },
										visible: { opacity: 1 },
									}}
								>
									<a
										href='#'
										className='text-4xl leading-[1.2] focus-visible:focus-visible py-[.3rem] block'
									>
										功能
									</a>
								</motion.li>
								<motion.li
									variants={{
										hidden: { opacity: 0 },
										visible: { opacity: 1 },
									}}
								>
									<a
										href='#'
										className='text-4xl leading-[1.2] focus-visible:focus-visible py-[.3rem] block'
									>
										企业
									</a>
								</motion.li>
								<motion.li
									variants={{
										hidden: { opacity: 0 },
										visible: { opacity: 1 },
									}}
								>
									<a
										href='#'
										className='text-4xl leading-[1.2] focus-visible:focus-visible py-[.3rem] block'
									>
										定价
									</a>
								</motion.li>
								<motion.li
									variants={{
										hidden: { opacity: 0 },
										visible: { opacity: 1 },
									}}
								>
									<a
										href='#'
										className='text-4xl leading-[1.2] focus-visible:focus-visible py-[.3rem] block'
									>
										资源
									</a>
								</motion.li>
							</motion.ul>
						</motion.nav>
					)}
				</AnimatePresence>
			</motion.div>
		</header>
	);
}
