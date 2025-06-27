import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import { formatCurrency } from '@/utils/formatters';

const BundleCard = ({ units, profit }) => {
  const isPositive = profit >= 0;
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bundle-card hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <ApperIcon name="Package" className="h-4 w-4 text-primary-600" />
          </div>
          <span className="font-semibold text-gray-900">
            {units} Unit{units > 1 ? 's' : ''}
          </span>
        </div>
        
        <div className={`p-1 rounded-full ${isPositive ? 'bg-success-100' : 'bg-danger-100'}`}>
          <ApperIcon 
            name={isPositive ? 'TrendingUp' : 'TrendingDown'} 
            className={`h-4 w-4 ${isPositive ? 'text-success-600' : 'text-danger-600'}`} 
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-baseline">
          <span className="text-sm font-medium text-gray-600">
            Profit per order:
          </span>
          <motion.span
            key={profit}
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={`font-bold text-lg ${isPositive ? 'text-success-600' : 'text-danger-600'}`}
          >
            {formatCurrency(profit)}
          </motion.span>
        </div>
        
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(Math.abs(profit) / 50, 100)}%` }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`h-full rounded-full ${isPositive ? 'bg-gradient-to-r from-success-400 to-success-500' : 'bg-gradient-to-r from-danger-400 to-danger-500'}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BundleCard;