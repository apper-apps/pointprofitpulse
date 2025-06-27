import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="text-center space-y-4">
        <div className="h-8 bg-gray-200 rounded-lg w-3/4 mx-auto"></div>
        <div className="h-5 bg-gray-200 rounded-lg w-1/2 mx-auto"></div>
      </div>

      {/* Calculator Grid Skeleton */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Input Section Skeleton */}
        <div className="xl:col-span-2">
          <div className="bg-gray-50 rounded-2xl p-6 space-y-6">
            <div className="h-6 bg-gray-200 rounded-lg w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section Skeleton */}
        <div className="xl:col-span-1">
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 rounded-lg w-1/2"></div>
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="w-9 h-9 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bundle Section Skeleton */}
        <div className="xl:col-span-1">
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 rounded-lg w-1/2"></div>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-5 border border-primary-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="h-3 bg-gray-200 rounded w-20"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;