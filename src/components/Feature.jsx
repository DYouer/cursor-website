import FeatureItem from "./FeatureItem";
export default function Feature() {
  return (
    <section className="container section flex flex-col gap-8">
      <h2 className="text-left text-2xl">走在前沿</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-2.5">
        <FeatureItem
          title="与 AI 一起编程"
          description="Cursor 将 AI 无缝集成到您的编码工作流程中，让您能够更快地编写代码、调试和学习新技术。"
          btnTitle="立即探索"
        />
        <FeatureItem
          title="全面理解代码库"
          description="Cursor 能学习你的代码库如何运作，无论规模大小或复杂程度。。"
          btnTitle="了解代码库索引"
        />
        <FeatureItem
          title="构建持久的软件"
          description="深受超过一半《财富》500 强信赖，加速研发，安全且可扩展。"
          btnTitle="探索企业版"
        />
      </div>
    </section>
  );
}
