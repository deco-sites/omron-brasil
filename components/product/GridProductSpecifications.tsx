const DEFAULT_INFO = [
  { label: "Device type", description: "Electrocardiogram" },
  { label: "Device type", description: "Electrocardiogram" },
  { label: "Device type", description: "Electrocardiogram" },
  { label: "Device type", description: "Electrocardiogram" },
  { label: "Device type", description: "Electrocardiogram" },
  { label: "Device type", description: "Electrocardiogram" },
  { label: "Device type", description: "Electrocardiogram" },
  { label: "Device type", description: "Electrocardiogram" },
  { label: "Device type", description: "Electrocardiogram" },
  { label: "Device type", description: "Electrocardiogram" },
  { label: "Device type", description: "Electrocardiogram" },
];

export default function GridProductSpecifications() {
  return (
    <div class="grid md:grid-cols-2 gap-x-8 gap-y-3 w-full h-full">
      {DEFAULT_INFO.map((item) => (
        <div class="grid md:grid-cols-2 border-b border-b-gray-middle w-full items-center justify-between text-start pb-3">
          <span class="font-bold md:font-normal">{item.label}</span>
          <span>{item.description}</span>
        </div>
      ))}
    </div>
  );
}
