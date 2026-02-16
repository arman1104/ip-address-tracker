export interface IpResponse {
  ip: string;
  isp: string;
  location: {
    city: string;
    region: string;
    postalCode: string;
    timezone: string;
    lat: number;
    lng: number;
  };
}

export const fetchIpData = async (query?: string): Promise<IpResponse> => {
  const url = query
    ? `https://ipapi.co/${query}/json/`
    : `https://ipapi.co/json/`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch IP data");
  }

  const data = await response.json();

  if (!data.latitude || !data.longitude) {
    throw new Error("Invalid IP address or domain");
  }

  return {
    ip: data.ip,
    isp: data.org || "Unknown ISP",
    location: {
      city: data.city,
      region: data.region,
      postalCode: data.postal || "",
      timezone: data.utc_offset || "",
      lat: data.latitude,
      lng: data.longitude,
    },
  };
};
