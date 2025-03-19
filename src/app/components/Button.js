export default function Button({ content, active, menuActive, href }) {
  const className = `px-6 py-3 text-white ${active ? "btn-builder-active" : ""} ${
    menuActive ? "btn-link" : ""
  }`;

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <button className={className}>{content}</button>
  );
}
