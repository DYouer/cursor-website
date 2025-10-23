import SwitchMode from "./SwitchMode.jsx";
import SelectLang from "./SelectLang.jsx";

const link = [
	{
		title: "产品",
		content: [
			{ linkTitle: "功能", outLink: false },
			{ linkTitle: "企业", outLink: false },
			{ linkTitle: "Bugbot", outLink: false },
			{ linkTitle: "CLI", outLink: false },
			{ linkTitle: "定价", outLink: false },
		],
	},
	{
		title: "资源",
		content: [
			{ linkTitle: "下载", outLink: false },
			{ linkTitle: "Web 代理", outLink: false },
			{ linkTitle: "更新日志", outLink: false },
			{ linkTitle: "文档", outLink: false },
			{ linkTitle: "论坛", outLink: true },
			{ linkTitle: "状态", outLink: true },
		],
	},
	{
		title: "公司",
		content: [
			{ linkTitle: "招聘", outLink: true },
			{ linkTitle: "博客", outLink: false },
			{ linkTitle: "社区", outLink: true },
			{ linkTitle: "学生", outLink: false },
			{ linkTitle: "品牌", outLink: false },
		],
	},
	{
		title: "法律",
		content: [
			{ linkTitle: "服务条款", outLink: false },
			{ linkTitle: "隐私政策", outLink: false },
			{ linkTitle: "数据使用", outLink: false },
			{ linkTitle: "安全", outLink: false },
		],
	},
	{
		title: "联系",
		content: [
			{ linkTitle: "X", outLink: true },
			{ linkTitle: "LinkedIn", outLink: true },
			{ linkTitle: "YouTube", outLink: true },
		],
	},
];
export default function Footer() {
	return (
		<footer className=' bg-theme-card-hex pt-16 px-4'>
			<div className='container mx-auto grid grid-cols-3 md:grid-cols-5 px-2 text-sm'>
				{link.map(item => (
					<div key={item.title} className='flex flex-col gap-3 mb-24'>
						<h4 className='text-theme-text-sec'>{item.title}</h4>
						<ul className='flex flex-col gap-3 items-start'>
							{item.content.map(content => (
								<li
									key={content.linkTitle}
									className='group flex items-start'
								>
									<a
										className='nav_link p-0 grouphover group-hover:text-theme-text-hover'
										href='#'
									>
										{content.linkTitle}
									</a>
									<span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-base leading-[1] font-mono ps-1 text-theme-text-hover cursor-pointer'>
										{content.outLink ? "↗" : ""}
									</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className='container mx-auto py-10 px-4 text-center sm:text-left'>
				<div className='flex justify-between items-center'>
					<p className='text-sm text-theme-text-sec'>
						&copy; 2024 Cursor. 保留所有权利。
					</p>
					<div className='flex gap-2 items-stretch'>
						<SwitchMode />
						<SelectLang />
					</div>
				</div>
			</div>
		</footer>
	);
}
