
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/hero/HeroSection";
import PlatformOverview from "./components/platform/PlatformOverview";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";

import FeatureDetail from "./components/featureDetail/FeatureDetail";
import { featureDetails } from "./data/featureDetails";
import ComingSoonChannels from "./components/platform/ComingSoonChannel";
import ProductGuidePage from "./components/productGuide/ProductGuidePage";
import ConnectStreamInAction from "./components/sections/ConnectStreamInAction";

function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <ProductGuidePage /> */}
      <PlatformOverview />
      {/* <ComingSoonChannels /> */}
      <AboutSection />
      <ConnectStreamInAction />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-guide" element={<ProductGuidePage />}
        />

        <Route path="/features/team-inbox"
          element={
            <FeatureDetail feature={featureDetails["team-inbox"]} />
          }
        />

        <Route
          path="/features/personal-assistant"
          element={
            <FeatureDetail
              feature={featureDetails["personal-assistant"]}
            />
          }
        />

        <Route
          path="/features/broadcast"
          element={<FeatureDetail feature={featureDetails["broadcast"]} />}
        />

        <Route
          path="/features/templates"
          element={<FeatureDetail feature={featureDetails["templates"]} />}
        />

        <Route
          path="/features/flows"
          element={<FeatureDetail feature={featureDetails["flows"]} />}
        />

        <Route
          path="/features/ai-intelligence"
          element={<FeatureDetail feature={featureDetails["ai-intelligence"]} />}
        />

        <Route
          path="/features/products"
          element={<FeatureDetail feature={featureDetails["products"]} />}
        />

        <Route
          path="/features/loyalty-hub"
          element={<FeatureDetail feature={featureDetails["loyalty-hub"]} />}
        />

        <Route
          path="/features/payments"
          element={<FeatureDetail feature={featureDetails["payments"]} />}
        />

        <Route
          path="/features/calls-hub"
          element={<FeatureDetail feature={featureDetails["calls-hub"]} />}
        />

        <Route
          path="/features/contacts"
          element={<FeatureDetail feature={featureDetails["contacts"]} />}
        />

        <Route
          path="/features/analytics"
          element={<FeatureDetail feature={featureDetails["analytics"]} />}
        />

        <Route
          path="/features/team"
          element={<FeatureDetail feature={featureDetails["team"]} />}
        />

        <Route
          path="/features/supervisor"
          element={<FeatureDetail feature={featureDetails["supervisor"]} />}
        />

        <Route path="*"
          element={
            <div style={{ padding: "100px 20px", textAlign: "center" }}>
              <h2>Page not found</h2>
              <a href="/">Return to homepage</a>
            </div>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;