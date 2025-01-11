import styles from "./page.module.scss";
import Header from "./container/Header";
import Content from "./container/Content";

export default function Home() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}
