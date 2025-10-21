export default function UpdateItem({ version, date, description }) {
  return (
    <article>
      <a className="flex flex-col gap-4 h-full bg-theme-card-hex hover:bg-theme-card-hex-hover border-theme-border-02 rounded-sm px-6 py-5 cursor-pointer">
        <div className="flex items-center gap-2 text-theme-text-sec">
          <span className="px-3 py-0.5 border border-theme-text-sec rounded-full text-sm">
            {version}
          </span>
          <div>{formatDate(date)}</div>
        </div>
        <p className="grow">{description}</p>
      </a>
    </article>
  );
}
function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}
