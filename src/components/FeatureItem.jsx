export default function FeatureItem({ title, description, btnTitle }) {
  return (
    <div className="flex flex-col gap-4 bg-theme-card-hex border-1 border-theme-border-02 p-4 rounded-sm">
      <div className="flex flex-col grow items-start">
        <div className="grow">
          <p>{title}</p>
          <p className="mb-4 text-theme-text-sec">{description}</p>
        </div>
        <button className="btn_text">{btnTitle} ↗</button>
      </div>
      <div className="w-full aspect-square bg-[repeating-linear-gradient(-45deg,rgba(0,0,05,.05)_0_2px,transparent_2px_8px)] border-theme-border border-1  rounded-sm"></div>
    </div>
  );
}
