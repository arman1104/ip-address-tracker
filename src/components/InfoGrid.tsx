import type { IpResponse } from "../services/ipApis";

interface Props {
  data: IpResponse;
}

const InfoGrid = ({ data }: Props) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-xl
        px-6 py-6
        md:px-8 md:py-8
        grid
        grid-cols-1
        md:grid-cols-4
        gap-6
        md:gap-0
        text-center
        md:text-left
      "
    >
      <InfoItem label="IP ADDRESS" value={data.ip} />
      <InfoItem
        label="LOCATION"
        value={`${data.location.city}, ${data.location.region} ${data.location.postalCode}`}
      />
      <InfoItem label="TIMEZONE" value={`UTC ${data.location.timezone}`} />
      <InfoItem label="ISP" value={data.isp} />
    </div>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="md:px-6 md:border-r md:last:border-none border-gray-200">
    <p className="text-[10px] md:text-xs tracking-widest uppercase text-gray-500 font-medium mb-2 md:mb-3">
      {label}
    </p>
    <p className="text-gray-900 text-xl md:text-2xl font-medium break-words">
      {value}
    </p>
  </div>
);

export default InfoGrid;
