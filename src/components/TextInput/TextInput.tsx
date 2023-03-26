import { IconAirPlane } from "../IconAirPlane/IconAirPlane";

interface TextInputProps {
  placeholder: string;
  onSubmit?: () => void;
}

export const TextInput = ({ placeholder, onSubmit }: TextInputProps) => {
  return (
    <section className="flex flex-1 items-center rounded border-zinc-500 bg-zinc-700 pl-2 placeholder:text-zinc-400">
      <input
        onKeyUp={(event) => {
          if (event.key === "Enter" && onSubmit) {
            onSubmit();
          }
        }}
        type="text"
        placeholder={placeholder}
        className="flex flex-1 bg-transparent p-2 pt-3 pb-3 text-white placeholder:text-zinc-400 focus:outline-none"
      />
      <button
        onClick={onSubmit}
        className="self-stretch p-2 text-zinc-400 transition-colors hover:text-zinc-300"
      >
        <IconAirPlane />
      </button>
    </section>
  );
};
