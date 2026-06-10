type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="
        px-6
        py-3
        rounded-xl
        bg-blue-500
        hover:bg-cyan-500
        transition-all
        duration-300
        font-medium
      "
    >
      {text}
    </button>
  );
}