import { FC } from "react";

interface Props {
  children: JSX.Element[] | JSX.Element;
  centerContent?: Boolean;
}

const PageLayout: FC<Props> = ({ children, centerContent }: Props) => {
  return (
    <div
      className="imageBackground"
      style={centerContent ? { display: "flex" } : { display: "block" }}
    >
      {children}
    </div>
  );
};

export default PageLayout;
