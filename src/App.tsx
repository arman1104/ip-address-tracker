import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import InfoGrid from "./components/InfoGrid";
import MapView from "./components/MapView";
import { fetchIpData } from "./services/ipApis";
import type { IpResponse } from "./services/ipApis";

import bgMobile from "./assets/images/pattern-bg-mobile.png";
import bgDesktop from "./assets/images/pattern-bg-desktop.png";

function App() {
  const [data, setData] = useState<IpResponse | null>(null);
  const [error, setError] = useState("");

  const loadIp = async (query?: string) => {
    try {
      setError("");
      const result = await fetchIpData(query);
      setData(result);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadIp();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section
        className="relative bg-cover bg-center h-[260px] md:h-[280px]"
        style={{
          backgroundImage: `url(${window.innerWidth >= 768 ? bgDesktop : bgMobile})`,
        }}
      >
        <div className="pt-6 md:pt-8 px-4 md:px-6 text-center">
          <h1 className="text-white text-2xl md:text-3xl font-medium mb-1">
            IP Address Tracker
          </h1>

          <SearchBar onSearch={loadIp} />

          {error && (
            <p className="text-red-400 text-sm mt-2 text-center">{error}</p>
          )}
        </div>

        {/* InfoGrid - positioned absolutely only on desktop */}
        {data && (
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-20 w-[90%] max-w-[1110px] z-20">
            <InfoGrid data={data} />
          </div>
        )}
      </section>

      {/* InfoGrid - static position on mobile */}
      {data && (
        <div className="md:hidden px-4 -mt-16 relative z-20">
          <InfoGrid data={data} />
        </div>
      )}

      {/* Map */}
      <section className="flex-1 md:pt-20 -mt-6 md:mt-0">
        {data && data.location.lat && data.location.lng && (
          <MapView lat={data.location.lat} lng={data.location.lng} />
        )}
      </section>
    </div>
  );
}

export default App;
