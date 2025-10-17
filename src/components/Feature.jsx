export default function Feature() {
	return (
		<section className='container section flex flex-col gap-8'>
			<h2 className='text-left text-2xl'>走在前沿</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-2.5'>
				<div className='bg-theme-card-hex border-1 border-theme-border-02 p-4 rounded-sm'>
					<div>
						<p>接入顶尖模型</p>
						<p>
							在 OpenAI、Anthropic、Gemini 和 xAI
							的所有前沿模型中自由选择。
						</p>
						<button>探索模型 →</button>
					</div>
					<div className='w-full aspect-square'></div>
				</div>
			</div>
		</section>
	);
}
