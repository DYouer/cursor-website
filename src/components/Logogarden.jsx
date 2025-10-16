import React from "react";
import stripeLogo from "../assets/logo-stripe.svg";
import openAILogo from "../assets/logo-openai.svg";
import linearLogo from "../assets/logo-linear.svg";
import datadogLogo from "../assets/logo-datadog.svg";

export default function Section2() {
	return (
		<section className='!pb-[2.1rem] !pt-0 container section  bg-theme-bg '>
			<h3 className='text-center text-sm mb-[1.4rem]'>
				每天都深受数百万专业开发者信赖。
			</h3>
			<div className='grid grid-cols-8 max-[900px]:grid-cols-4 gap-2.5'>
				<div className='flex items-center justify-center w-full h-[6.25rem] px-[7.5px] bg-theme-card-hex border-1 border-theme-border-02 rounded-sm'>
					<picture className='h-10 w-auto object-contain'>
						<source srcSet={stripeLogo}></source>
						<img
							src={stripeLogo}
							alt='stripe logo'
							className='w-full h-full object-contain'
						/>
					</picture>
				</div>
				<div className='flex items-center justify-center w-full h-[6.25rem] px-[7.5px] bg-theme-card-hex border-1 border-theme-border-02 rounded-sm'>
					<picture className='h-10 w-auto object-contain'>
						<source srcSet={openAILogo}></source>
						<img
							src={openAILogo}
							alt='openai logo'
							className='w-full h-full object-contain'
						/>
					</picture>
				</div>
				<div className='flex items-center justify-center w-full h-[6.25rem] px-[7.5px] bg-theme-card-hex border-1 border-theme-border-02 rounded-sm'>
					<picture className='h-10 w-auto object-contain'>
						<source srcSet={datadogLogo}></source>
						<img
							src={datadogLogo}
							alt='datadog logo'
							className='w-full h-full object-contain'
						/>
					</picture>
				</div>
				<div className='flex items-center justify-center w-full h-[6.25rem] px-[7.5px] bg-theme-card-hex border-1 border-theme-border-02 rounded-sm'>
					<picture className='h-10 w-auto object-contain'>
						<source srcSet={linearLogo}></source>
						<img
							src={linearLogo}
							alt='linear logo'
							className='w-full h-full object-contain'
						/>
					</picture>
				</div>
				<div className='flex items-center justify-center w-full h-[6.25rem] px-[7.5px] bg-theme-card-hex border-1 border-theme-border-02 rounded-sm'>
					<picture className='h-10 w-auto object-contain'>
						<source srcSet={stripeLogo}></source>
						<img
							src={stripeLogo}
							alt='stripe logo'
							className='w-full h-full object-contain'
						/>
					</picture>
				</div>
				<div className='flex items-center justify-center w-full h-[6.25rem] px-[7.5px] bg-theme-card-hex border-1 border-theme-border-02 rounded-sm'>
					<picture className='h-10 w-auto object-contain'>
						<source srcSet={openAILogo}></source>
						<img
							src={openAILogo}
							alt='openai logo'
							className='w-full h-full object-contain'
						/>
					</picture>
				</div>
				<div className='flex items-center justify-center w-full h-[6.25rem] px-[7.5px] bg-theme-card-hex border-1 border-theme-border-02 rounded-sm'>
					<picture className='h-10 w-auto object-contain'>
						<source srcSet={datadogLogo}></source>
						<img
							src={datadogLogo}
							alt='datadog logo'
							className='w-full h-full object-contain'
						/>
					</picture>
				</div>
				<div className='flex items-center justify-center w-full h-[6.25rem] px-[7.5px] bg-theme-card-hex border-1 border-theme-border-02 rounded-sm'>
					<picture className='h-10 w-auto object-contain'>
						<source srcSet={linearLogo}></source>
						<img
							src={linearLogo}
							alt='linear logo'
							className='w-full h-full object-contain'
						/>
					</picture>
				</div>
			</div>
		</section>
	);
}
