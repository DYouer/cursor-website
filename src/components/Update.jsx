import UpdateItem from "./UpdateItem";

export default function Update() {
  return (
    <section className="container section flex flex-col gap-8">
      <h2 className="text-left text-2xl">更新日志</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2.5 items-stretch">
        <UpdateItem
          version="1.7"
          date="2025-09-29T05:08:58.822Z"
          description="Agent 自动补全、Hook 与团队规则"
        />
        <UpdateItem
          version="1.6"
          date="2025-09-12T01:25:00.000Z"
          description="斜杠菜单命令、摘要功能，以及更完善的 Agent 终端"
        />
        <UpdateItem
          version="1.5"
          date="2025-08-21T19:54:00.000Z"
          description="Linear 集成、改进的 Agent 终端，以及操作系统通知"
        />
        <UpdateItem
          version="1.4"
          date="2025-08-06T19:44:00.000Z"
          description="Agent 改进的 Agent 工具、可引导性与使用可见性 与团队规则"
        />
      </div>
    </section>
  );
}
