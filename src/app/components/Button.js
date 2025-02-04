export default function Button({ content, active, menuActive }) {
  return (
    <button
      className={`px-6 py-3 text-white ${active ? "btn-builder-active" : ""} ${
        menuActive ? "btn-link" : ""
      }`}>
      {content}
    </button>
  );
}
