import useLocalStorage from "./useLocalStorage";
import "./styles.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleClickTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello world!</p>
        <button onClick={handleClickTheme}>Change theme</button>
      </div>
    </div>
  );
}
