import React from 'react';

export const Skeleton = ({ className }) => {
  return (
    <div className={`animate-pulse bg-gray-300 ${className}`}></div>
  );
};

export const CityCardSkeleton = ({ className }) => {
  return (
    <div className={`animate-pulse rounded-3xl overflow-hidden ${className}`}>
      <div className="relative w-full h-56 md:h-64 bg-gray-300">
        {/* Simulating image overlay and text */}
        <div className="absolute inset-0 bg-gray-400/20 flex flex-col items-center justify-center">
          <div className="w-32 h-6 bg-gray-400/40 rounded-full mb-2"></div>
          <div className="w-48 h-4 bg-gray-400/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export const PopularItemSkeleton = () => {
  return (
    <div className="animate-pulse w-84 h-80 rounded-3xl overflow-hidden">
      <div className="relative w-full h-full bg-gray-300">
        {/* Simulating image overlay and text */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-400/20 via-transparent to-transparent flex flex-col items-center justify-end pb-8">
          <div className="w-36 h-8 bg-gray-400/40 rounded-full mb-2"></div>
          <div className="w-24 h-4 bg-gray-400/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export const ThemeCardSkeleton = ({ className }) => {
  return (
    <div className={`animate-pulse rounded-3xl overflow-hidden h-full ${className}`}>
      <div className="relative w-full h-full bg-gray-300">
        {/* Simulating text overlay */}
        <div className="absolute inset-0 bg-gray-400/20 flex flex-col items-center justify-center">
          <div className="w-32 h-6 bg-gray-400/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};