import React, { useState } from 'react';
import { TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface ProgressBarProps {
  label: string;
  value: number;
  max: number;
  color: string;
  showPercentage?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, max, color, showPercentage = true }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium text-slate-700">{label}</span>
        <span className="text-xs font-bold text-slate-900">
          {value.toLocaleString()} {showPercentage && `(${percentage.toFixed(1)}%)`}
        </span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-1000 ease-out rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

interface DonutChartProps {
  segments: Array<{
    label: string;
    value: number;
    color: string;
    icon?: React.ReactNode;
  }>;
  centerLabel?: string;
  centerValue?: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({ segments, centerLabel, centerValue }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const total = segments.reduce((sum, seg) => sum + seg.value, 0);
  let currentAngle = -90;

  const createArc = (startAngle: number, endAngle: number, radius: number) => {
    const start = polarToCartesian(50, 50, radius, endAngle);
    const end = polarToCartesian(50, 50, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
  };

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="relative w-48 h-48">
        <svg viewBox="0 0 100 100" className="transform -rotate-90">
          {segments.map((segment, index) => {
            const percentage = (segment.value / total) * 100;
            const angle = (percentage / 100) * 360;
            const endAngle = currentAngle + angle;
            const path = createArc(currentAngle, endAngle, 35);
            const isHovered = hoveredIndex === index;
            currentAngle = endAngle;

            return (
              <path
                key={index}
                d={path}
                fill="none"
                stroke={segment.color}
                strokeWidth={isHovered ? "18" : "14"}
                className="transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                opacity={hoveredIndex === null || isHovered ? 1 : 0.5}
              />
            );
          })}
        </svg>
        {centerLabel && centerValue && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-bold text-slate-900">{centerValue}</div>
            <div className="text-xs text-slate-600">{centerLabel}</div>
          </div>
        )}
      </div>

      <div className="flex-1 space-y-2">
        {segments.map((segment, index) => {
          const percentage = ((segment.value / total) * 100).toFixed(1);
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                isHovered ? 'bg-slate-100 scale-105' : 'bg-slate-50'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: segment.color }}
                />
                <span className="text-sm font-medium text-slate-700">{segment.label}</span>
                {segment.icon}
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-slate-900">
                  {segment.value.toLocaleString()}
                </div>
                <div className="text-xs text-slate-600">{percentage}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  subtitle: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  color: string;
  alert?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  label,
  value,
  subtitle,
  trend,
  trendValue,
  color,
  alert
}) => {
  return (
    <div className={`relative bg-white rounded-xl p-4 border-2 ${color} shadow-sm hover:shadow-md transition-all duration-300 group hover:scale-105`}>
      {alert && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
          <AlertTriangle className="w-3 h-3 text-white" />
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-lg ${color.replace('border-', 'bg-').replace('-500', '-100')}`}>
          {icon}
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-semibold ${
            trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-slate-600'
          }`}>
            <TrendingUp className={`w-3 h-3 ${trend === 'down' ? 'rotate-180' : ''}`} />
            {trendValue}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <p className="text-xs text-slate-600 font-medium">{label}</p>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
};

interface HorizontalBarChartProps {
  items: Array<{
    label: string;
    value: number;
    maxValue: number;
    color: string;
    severity: 'critical' | 'high' | 'medium' | 'low';
  }>;
}

export const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const severityConfig = {
    critical: { bg: 'bg-red-100', border: 'border-red-500', text: 'text-red-700', badge: 'bg-red-500' },
    high: { bg: 'bg-orange-100', border: 'border-orange-500', text: 'text-orange-700', badge: 'bg-orange-500' },
    medium: { bg: 'bg-yellow-100', border: 'border-yellow-500', text: 'text-yellow-700', badge: 'bg-yellow-500' },
    low: { bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-700', badge: 'bg-green-500' }
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const percentage = (item.value / item.maxValue) * 100;
        const isHovered = hoveredIndex === index;
        const config = severityConfig[item.severity];

        return (
          <div
            key={index}
            className={`p-4 rounded-lg border-l-4 ${config.border} ${config.bg} transition-all duration-300 cursor-pointer ${
              isHovered ? 'scale-102 shadow-md' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${config.badge} animate-pulse`} />
                <span className={`text-sm font-bold ${config.text}`}>{item.label}</span>
              </div>
              <span className="text-xs font-semibold text-slate-600">
                {item.value.toLocaleString()} / {item.maxValue.toLocaleString()}
              </span>
            </div>
            <div className="relative w-full bg-white rounded-full h-4 overflow-hidden">
              <div
                className={`h-full ${item.color} transition-all duration-1000 ease-out flex items-center justify-end pr-2`}
                style={{ width: `${percentage}%` }}
              >
                <span className="text-[10px] font-bold text-white drop-shadow">
                  {percentage.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
