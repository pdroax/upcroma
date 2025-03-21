import Link from "next/link";
import "./LinkButton.css";

interface LinkButtonProps {
  to: string;
  text: string;
}

function LinkButton({ to, text }: LinkButtonProps) {
  return (
    <Link href={to} className="btn">
      <span>{text}</span>
    </Link>
  );
}

export default LinkButton;
