import "./Container.css";

interface ContainerProps {
  children: React.ReactNode;
  customClass?: "min-height" | "start" | "column";
}

function Container({ children, customClass }: ContainerProps) {
  return <div className={`container ${customClass || ""}`}>{children}</div>;
}

export default Container;
