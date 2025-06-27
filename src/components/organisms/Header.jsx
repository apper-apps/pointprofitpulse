import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl">
              <ApperIcon name="TrendingUp" className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-gray-900">
                ProfitPulse COD
              </h1>
              <p className="text-sm text-gray-600 font-medium">
                Real-time E-commerce Profit Calculator
              </p>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <ApperIcon name="MapPin" className="h-4 w-4" />
              <span className="font-medium">Built for Africa</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <ApperIcon name="Zap" className="h-4 w-4" />
              <span className="font-medium">Instant Results</span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;