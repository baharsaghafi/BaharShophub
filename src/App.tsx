import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Component1 from "./pages/component1";
import Component from "./pages/component";
import Component2 from "./pages/component2";
import Component3 from "./pages/component3";
import Component4 from "./pages/component4";
import Component5 from "./pages/component5";
import Component6 from "./pages/component6";
import Component7 from "./pages/component7";
import Component8 from "./pages/component8";
import Component9 from "./pages/component9";
import Component10 from "./pages/component10";
import Component11 from "./pages/component11";
import Component12 from "./pages/component12";
import Component13 from "./pages/component13";
import Component14 from "./pages/component14";
import Component15 from "./pages/component15";
import Component16 from "./pages/component16";
import Component17 from "./pages/component17";
import Component18 from "./pages/component18";
import Component19 from "./pages/component19";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/8":
        title = "";
        metaDescription = "";
        break;
      case "/2":
        title = "";
        metaDescription = "";
        break;
      case "/3":
        title = "";
        metaDescription = "";
        break;
      case "/4":
        title = "";
        metaDescription = "";
        break;
      case "/5":
        title = "";
        metaDescription = "";
        break;
      case "/51":
        title = "";
        metaDescription = "";
        break;
      case "/52":
        title = "";
        metaDescription = "";
        break;
      case "/521":
        title = "";
        metaDescription = "";
        break;
      case "/53":
        title = "";
        metaDescription = "";
        break;
      case "/54":
        title = "";
        metaDescription = "";
        break;
      case "/541":
        title = "";
        metaDescription = "";
        break;
      case "/6":
        title = "";
        metaDescription = "";
        break;
      case "/61":
        title = "";
        metaDescription = "";
        break;
      case "/62":
        title = "";
        metaDescription = "";
        break;
      case "/63":
        title = "";
        metaDescription = "";
        break;
      case "/64":
        title = "";
        metaDescription = "";
        break;
      case "/65":
        title = "";
        metaDescription = "";
        break;
      case "/71":
        title = "";
        metaDescription = "";
        break;
      case "/7":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Component1 />} />
      <Route path="/8" element={<Component />} />
      <Route path="/2" element={<Component2 />} />
      <Route path="/3" element={<Component3 />} />
      <Route path="/4" element={<Component4 />} />
      <Route path="/5" element={<Component5 />} />
      <Route path="/51" element={<Component6 />} />
      <Route path="/52" element={<Component7 />} />
      <Route path="/521" element={<Component8 />} />
      <Route path="/53" element={<Component9 />} />
      <Route path="/54" element={<Component10 />} />
      <Route path="/541" element={<Component11 />} />
      <Route path="/6" element={<Component12 />} />
      <Route path="/61" element={<Component13 />} />
      <Route path="/62" element={<Component14 />} />
      <Route path="/63" element={<Component15 />} />
      <Route path="/64" element={<Component16 />} />
      <Route path="/65" element={<Component17 />} />
      <Route path="/71" element={<Component18 />} />
      <Route path="/7" element={<Component19 />} />
    </Routes>
  );
}
export default App;
