export default function Chapter({
  title,
  description,
  btnTitle,
  leftText = true,
}) {
  console.log(title, description, btnTitle);
  return (
    <section className="container section">
      <div
        className={`flex ${
          leftText ? "flex-row" : "flex-row-reverse "
        } max-[900px]:flex-col max-[900px]:items-start gap-8 items-center p-[17.5px] bg-theme-card-hex  rounded-sm border-1 border-theme-border-02`}
      >
        <div className="flex flex-col basis-[33%] max-[900px]:max-w-[65ch]  items-start text-base leading-[1.3]">
          <h3 className="text-base md:text-[1.375em]">{title}</h3>
          <p className="text-theme-text-sec mb-4 text-base md:text-[1.375em]">
            {description}
          </p>
          {btnTitle && <button className="btn_text">{btnTitle} →</button>}
        </div>
        <div className="w-[67%] h-[min(780px,70vh)] max-[900px]:w-full bg-[repeating-linear-gradient(-45deg,rgba(0,0,05,.05)_0_2px,transparent_2px_8px)] border-theme-border border-1  rounded-sm"></div>
      </div>
    </section>
  );
}
