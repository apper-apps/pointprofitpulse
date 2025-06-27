import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Empty = ({ 
  title = "No Data Available", 
  description = "Enter your business metrics to see profit calculations",
  actionText = "Get Started",
  onAction
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-16"
    >
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
        >
          <ApperIcon name="Calculator" className="h-10 w-10 text-primary-600" />
        </motion.div>
        
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-4">
          {onAction && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onAction}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-200"
            >
              <ApperIcon name="Play" className="h-5 w-5" />
              <span>{actionText}</span>
            </motion.button>
          )}
          
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <ApperIcon name="Zap" className="h-4 w-4" />
              <span>Real-time</span>
            </div>
            <div className="flex items-center space-x-2">
              <ApperIcon name="Smartphone" className="h-4 w-4" />
              <span>Mobile-friendly</span>
            </div>
            <div className="flex items-center space-x-2">
              <ApperIcon name="Globe" className="h-4 w-4" />
              <span>Built for Africa</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Empty;