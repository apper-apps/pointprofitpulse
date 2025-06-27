import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import BundleCard from '@/components/molecules/BundleCard';

const BundleSection = ({ results }) => {
  if (!results) return null;

  const { bundleProfits } = results;

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-lg">
          <ApperIcon name="Layers" className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-gray-900">
            Bundle Profits
          </h3>
          <p className="text-sm text-gray-600">
            Profit per package size
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {[1, 2, 3].map((units, index) => (
          <motion.div
            key={units}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <BundleCard
              units={units}
              profit={bundleProfits[units]}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
      >
        <div className="flex items-start space-x-3">
          <ApperIcon name="Lightbulb" className="h-5 w-5 text-accent-500 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Bundle Strategy Tip</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Higher unit bundles typically increase profit margins since delivery and acquisition costs 
              are spread across multiple items. Consider promoting 2-3 unit packages for maximum profitability.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BundleSection;