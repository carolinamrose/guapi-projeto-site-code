import "../styles/globals.scss";
import { ProjectProvider } from "@/hooks/ProjectContext";

function App({ Component, pageProps }) {
  return (
  <ProjectProvider>
    <Component {...pageProps} />
  </ProjectProvider>
  );
}

export default App;
