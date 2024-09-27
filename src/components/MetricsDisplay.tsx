import { Card, CardContent } from "./ui/card";

interface MetricsDisplayProps {
    downloadSpeed: number;
    uploadSpeed: number;
    ping: number;
    jitter: number;
  }
  
  // MetricsDisplay Component
  const MetricsDisplay = ({ downloadSpeed, uploadSpeed, ping, jitter }: MetricsDisplayProps) => (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Download", value: downloadSpeed, unit: "Mbps", description: "Great for streaming HD video" },
            { title: "Upload", value: uploadSpeed, unit: "Mbps", description: "Good for video calls and uploading files" },
            { title: "Ping", value: ping, unit: "ms", description: "Low ping is great for online gaming" },
            { title: "Jitter", value: jitter, unit: "ms", description: "Low jitter ensures smooth video calls" },
          ].map(({ title, value, unit, description }) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-3xl font-bold">{value.toFixed(2)} {unit}</p>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  export default MetricsDisplay;
