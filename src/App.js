import { Link, Route, Routes } from "react-router-dom";
import Navbar           from "./components/Navbar";
import Home             from "./pages/Home";
import About            from "./pages/About";
import Contact          from "./pages/Contact";
import NotFound         from "./pages/NotFound";
import NewsRoutes       from "./NewsRoutes";
import DocumentWritter  from "./pages/DocumentWritter";
import Certificate      from "./pages/Certificate";
import GuideBook        from "./components/GuideBook";

// Curation
import Curation1        from "./pages/Curation1";
import Curation3        from "./pages/crtn/Curation3";
import Curation3_1      from "./pages/crtn/Curation3_1";
import Curation4        from "./pages/crtn/Curation4";
import Curation11       from "./pages/crtn/Curation11";
import Curation16       from "./pages/crtn/Curation16";
// EndCuration

// Foto
import G2021            from "./pages/gallery/G2021";
import G2022            from "./pages/gallery/G2022";
// End Foto

// Video
import V2021 from "./pages/video/V2021";
import V2022 from "./pages/video/V2022";
// End Video

// News
import News1 from "./pages/news/News1";
import News2 from "./pages/news/News2";
import News3 from "./pages/news/News3";
import News4 from "./pages/news/News4";
import News5 from "./pages/news/News5";
// End News
function App() {
  
  return (
    <>
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Curation */}
            <Route path="/curation1" element={<Curation1 />} />
            <Route path="/curation3" element={<Curation3 />} />
            <Route path="/curation3_1" element={<Curation3_1 />}  />
            <Route path="/curation4" element={<Curation4 />}  />
            <Route path="/curation11" element={<Curation11 />}  />
            <Route path="/curation16" element={<Curation16 />}  />
          {/* End Curation */}

          {/* News */}
            <Route path="/news1" element={<News1 />} />
            <Route path="/news2" element={<News2 />} />
            <Route path="/news3" element={<News3 />} />
            <Route path="/news4" element={<News4 />} />
            <Route path="/news5" element={<News5 />} />
          {/* End News */}

          {/* Link Video */}
          <Route path="/V2021" element={<V2021 />} />
          <Route path="/V2022" element={<V2022 />} />
          {/* End Link Video */}

          {/* Link Gallery Foto */}
          <Route path="/G2021" element={<G2021 />} />
          <Route path="/G2022" element={<G2022 />} />
          {/* End Link Gallery Foto */}
          
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/guidebook" element={<GuideBook />} />
          <Route path="/document_writter" element={<DocumentWritter />} />
          <Route path="/newslist/*" element={<NewsRoutes />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

