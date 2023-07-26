import { css } from "../styled-system/css";

const style = css({
  fontSize: "3xl",
  bg: "red",
  rounded: "222px",
  display: "flex",
  color: "primary",
});

const style2 = css({
  borderRadius: "222px",
});

function App() {
  return (
    <div className={style}>
      Hello 🐼!
      <div className={style2}>123</div>
    </div>
  );
}

export default App;
