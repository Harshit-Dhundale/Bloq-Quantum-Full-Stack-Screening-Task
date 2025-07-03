'use client';

import React from 'react';
import { margin, operators, size } from '../data/operators.jsx';
import { Eye } from 'lucide-react';

export default function Operator({ 
  title, itemId, fill, height, width, components, isCustom, symbol, 
  currentWidth = 1, onToggleXRay, isPartial, originalHeight 
}) {
  const isExpanded = currentWidth > 1;
  const [showEye, setShowEye] = React.useState(false);
  
  // Calculate dimensions for expanded view
  const xs = components.map(c => c.x);
  const ys = components.map(c => c.y);
  
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  
  const expandedWidth = (maxX - minX + 1) * (size + margin.x) - margin.x;
  const expandedHeight = (maxY - minY + 1) * (size + margin.y) - margin.y;
  
  const actualHeight = isPartial ? height : originalHeight || height;
  const renderHeight = isExpanded ? expandedHeight : actualHeight * size + margin.y * (actualHeight - 1);
  
  const renderComponents = () => {
    return components.map((comp, idx) => {
      if (isPartial && comp.y >= actualHeight) return null;
      
      const compOp = operators.find(op => op.id === comp.gateId);
      if (!compOp) return null;
      
      const posX = (comp.x - minX) * (size + margin.x);
      const posY = (comp.y - minY) * (size + margin.y);
      
      return (
        <g key={idx} transform={`translate(${posX}, ${posY})`}>
          <rect
            fill={compOp.fill}
            height={size}
            rx="4"
            width={size}
          />
          {compOp.icon}
        </g>
      );
    });
  };

  return (
    <div 
      className="group relative w-full h-full"
      onMouseEnter={() => setShowEye(true)}
      onMouseLeave={() => setShowEye(false)}
    >
      {isCustom && (
        <button
          aria-label="Toggle X-Ray Mode"
          className={`absolute -top-2 -left-2 bg-white cursor-pointer border border-gray-300 z-50 rounded-full shadow transition-opacity ${
            showEye || isExpanded ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleXRay && onToggleXRay(!isExpanded);
          }}
          style={{ width: 22, height: 22 }}
        >
          <Eye size={16} color={isExpanded ? 'darkblue' : 'black'} />
        </button>
      )}
      
      <svg
        className="z-40"
        height={renderHeight}
        width={isExpanded ? expandedWidth : size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {!isExpanded ? (
          <>
            <rect
              fill={fill}
              height={renderHeight}
              rx="4"
              width={size}
              x="0"
              y="0"
            />
            {symbol}
          </>
        ) : (
          <>
            <rect
              x="0"
              y="0"
              width={expandedWidth}
              height={expandedHeight}
              fill="none"
              stroke="darkblue"
              strokeWidth="2"
              strokeDasharray="4,2"
              rx="4"
            />
            {renderComponents()}
          </>
        )}
      </svg>
    </div>
  );
}