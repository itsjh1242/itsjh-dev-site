import { HomeAvatar } from "./avatar";
import { HomeControlPannel } from "./control-pannel";

export const HomePage: React.FC = () => {
  return (
    <section className="m-auto flex h-screen items-center justify-center gap-10">
      {/* Avatar */}
      <HomeAvatar />
      {/* Control Pannel */}
      <HomeControlPannel />
    </section>
  );
};
