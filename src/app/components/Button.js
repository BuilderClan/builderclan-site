const Button = ({ content, href, active, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-sm lg:text-base px-6 py-3 rounded-[82px] font-normal transition-all duration-300 ${
        active
          ? "btn-builder-active hover:opacity-90"
          : "text-white hover:text-[#CAFF33]"
      }`}
    >
      {content}
    </a>
  );
};

export default Button;
