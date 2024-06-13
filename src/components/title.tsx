interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return <h1 className="text-5xl font-semibold mb-7">{text}</h1>;
}
