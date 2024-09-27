// Define props for SpeedGauge component
interface SpeedGaugeProps {
    value: number;
    max: number;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }
  
  // SpeedGauge Component
  const SpeedGauge = ({ value, max, label, icon: Icon }: SpeedGaugeProps) => (
    <div className="relative flex flex-col items-center">
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-gray-200 flex items-center justify-center">
        <div 
          className="absolute inset-0 rounded-full border-8 border-blue-500 transition-all duration-1000"
          style={{ 
            clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.min(value / max, 1)}% 0%)`,
            transform: `rotate(${45 + 270 * Math.min(value / max, 1)}deg)`
          }}
        />
        <div className="text-center">
          <Icon className="w-8 h-8 mx-auto mb-2 text-blue-500" />
          <div className="text-3xl md:text-4xl font-bold">{value.toFixed(2)}</div>
          <div className="text-sm text-gray-500">{label}</div>
        </div>
      </div>
    </div>
  );

  export default SpeedGauge