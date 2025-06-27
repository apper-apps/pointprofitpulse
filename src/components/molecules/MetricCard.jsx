import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const MetricCard = ({ label, value, icon, type = 'neutral', highlight = false }) => {
  const getCardStyles = () => {
    const base = 'metric-card transition-all duration-300';
    
    if (highlight) {
      switch (type) {
        case 'positive':
          return `${base} profit-positive border-success-200 shadow-success-100/50`;
        case 'negative':
          return `${base} profit-negative border-danger-200 shadow-danger-100/50`;
        default:
          return `${base} border-gray-200`;
      }
    }
    
    return `${base} border-gray-200 hover:border-gray-300`;
  };

  const getIconStyles = () => {
    switch (type) {
      case 'positive':
        return 'text-success-500 bg-success-50';
      case 'negative':
        return 'text-danger-500 bg-danger-50';
      default:
        return 'text-primary-500 bg-primary-50';
    }
  };

  const getValueStyles = () => {
    if (highlight) {
      switch (type) {
        case 'positive':
          return 'text-success-600 font-bold text-xl';
        case 'negative':
          return 'text-danger-600 font-bold text-xl';
        default:
          return 'text-gray-900 font-semibold text-lg';
      }
    }
    return 'text-gray-900 font-semibold text-lg';
  };

  return (
    <motion.div
      whileHover={{ scale: highlight ? 1.02 : 1.01 }}
      className={getCardStyles()}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-600 mb-1">
            {label}
          </p>
          <motion.p
            key={value}
            initial={{ scale: 0.95, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={`${getValueStyles()} number-animate truncate`}
          >
            {value}
          </motion.p>
        </div>
        
        <div className={`p-2 rounded-lg ${getIconStyles()}`}>
          <ApperIcon name={icon} className="h-5 w-5" />
        </div>
      </div>
      
      {highlight && type === 'positive' && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute -top-1 -right-1"
        >
          <div className="bg-success-500 text-white rounded-full p-1">
            <ApperIcon name="TrendingUp" className="h-3 w-3" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MetricCard;