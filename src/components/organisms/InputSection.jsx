import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import NumberInput from '@/components/molecules/NumberInput';

const InputSection = ({ inputs, onInputChange }) => {
  const inputFields = [
    {
      key: 'productCost',
      label: 'Product Cost',
      placeholder: '25.00',
      icon: 'Package',
      required: true,
      tooltip: 'Cost per unit of your product'
    },
    {
      key: 'sellingPrice',
      label: 'Selling Price',
      placeholder: '59.00',
      icon: 'DollarSign',
      required: true,
      tooltip: 'Price you sell each unit for'
    },
    {
      key: 'deliveryCost',
      label: 'Delivery Cost',
      placeholder: '8.00',
      icon: 'Truck',
      required: true,
      tooltip: 'Cost to deliver each order'
    },
    {
      key: 'cpa',
      label: 'Cost Per Acquisition',
      placeholder: '12.00',
      icon: 'Target',
      required: true,
      tooltip: 'How much you spend to get one lead'
    },
    {
      key: 'numberOfLeads',
      label: 'Number of Leads',
      placeholder: '100',
      icon: 'Users',
      required: true,
      tooltip: 'Total leads you generate',
      isInteger: true
    },
    {
      key: 'confirmationRate',
      label: 'Confirmation Rate',
      placeholder: '0.70',
      icon: 'CheckCircle',
      required: true,
      tooltip: 'Percentage of leads that confirm orders (0-1)',
      isPercentage: true,
      max: 1
    },
    {
      key: 'deliveredRate',
      label: 'Delivered Rate',
      placeholder: '0.80',
      icon: 'ShoppingBag',
      required: true,
      tooltip: 'Percentage of confirmed orders that get delivered (0-1)',
      isPercentage: true,
      max: 1
    },
    {
      key: 'callCenterCost',
      label: 'Call Center Cost',
      placeholder: '150.00',
      icon: 'Phone',
      tooltip: 'Optional: Total call center expenses'
    },
    {
      key: 'shippingCost',
      label: 'Shipping Cost',
      placeholder: '200.00',
      icon: 'Ship',
      tooltip: 'Optional: Additional shipping expenses'
    },
    {
      key: 'marketingCost',
      label: 'Marketing Cost',
      placeholder: '300.00',
      icon: 'Megaphone',
      tooltip: 'Optional: Additional marketing expenses'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-br from-accent-400 to-accent-500 rounded-lg">
          <ApperIcon name="Edit3" className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-gray-900">
            Business Inputs
          </h3>
          <p className="text-sm text-gray-600">
            Enter your business metrics below
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-50 to-accent-100/50 rounded-2xl p-6 border border-accent-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inputFields.map((field, index) => (
            <motion.div
              key={field.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <NumberInput
                label={field.label}
                value={inputs[field.key]}
                onChange={(value) => onInputChange(field.key, value)}
                placeholder={field.placeholder}
                icon={field.icon}
                required={field.required}
                tooltip={field.tooltip}
                isInteger={field.isInteger}
                isPercentage={field.isPercentage}
                max={field.max}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputSection;