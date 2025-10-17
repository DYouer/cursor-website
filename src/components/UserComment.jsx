import user1 from "../assets/user-1.png";
import user2 from "../assets/user-2.png";
import user3 from "../assets/user-3.png";
import Comment from "./Comment";
export default function UserComment({}) {
	return (
		<section className='container section flex flex-col gap-14'>
			<h1 className='text-center text-4xl'>构建软件的新方式.</h1>

			<div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr  gap-2.5'>
				{/* 后续用foreach进行重构 */}
				<Comment
					comment='前后两批次的效果判若云泥，采用率从个位数飙升至80%以上。它像野火般迅速蔓延，最顶尖的开发者都在使用 Cursor。'
					author='Diana Hu'
					authorTitle='管理合伙人, Y Combinator'
					authorImgUrl={user1}
				/>
				<Comment
					comment='迄今为止我付费使用、毫无疑问最有用的 AI 工具就是 Cursor。它速度快、在你需要的时机和位置智能补全，括号处理得当，键盘快捷键设计合理，支持自带模型……各方面都打磨得非常到位。'
					author='shadcn'
					authorTitle='shadcn/ui 的创作者'
					authorImgUrl={user2}
				/>
				<Comment
					comment='前最出色的 LLM 应用都有一个“自主性滑杆”：你可以决定给 AI 多大的自主权。在 Cursor 中，你可以用 Tab 自动补全、用 Cmd+K 做定向编辑，或者直接放手交给全自主代理模式来处理。'
					author='Andrej Karpathy'
					authorTitle='CEO, Eureka Labs'
					authorImgUrl={user3}
				/>
				<Comment
					comment='前后两批次的效果判若云泥，采用率从个位数飙升至80%以上。它像野火般迅速蔓延，最顶尖的开发者都在使用 Cursor。'
					author='Diana Hu'
					authorTitle='管理合伙人, Y Combinator'
					authorImgUrl={user1}
				/>
				<Comment
					comment='前后两批次的效果判若云泥，采用率从个位数飙升至80%以上。它像野火般迅速蔓延，最顶尖的开发者都在使用 Cursor。'
					author='Diana Hu'
					authorTitle='管理合伙人, Y Combinator'
					authorImgUrl={user1}
				/>
				<Comment
					comment='前后两批次的效果判若云泥，采用率从个位数飙升至80%以上。它像野火般迅速蔓延，最顶尖的开发者都在使用 Cursor。'
					author='Diana Hu'
					authorTitle='管理合伙人, Y Combinator'
					authorImgUrl={user1}
				/>
			</div>
		</section>
	);
}
