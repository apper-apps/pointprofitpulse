import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import MetricCard from '@/components/molecules/MetricCard';
import { formatCurrency, formatPercentage, formatNumber } from '@/utils/formatters';

const ResultsSection = ({ results }) => {
  if (!results) return null;

  const {
    totalProductCost,
    cpd,
    profitPerSale,
    confirmedOrders,
    deliveredOrders,
    totalSales,
    totalExpenses,
    netProfit,
    roi
  } = results;

  const metrics = [
    {
      label: 'Total Product Cost',
      value: formatCurrency(totalProductCost),
      icon: 'Package',
      type: 'neutral'
    },
    {
      label: 'Cost Per Delivered (CPD)',
      value: formatCurrency(cpd),
      icon: 'Calculator',
      type: 'neutral'
    },
    {
      label: 'Profit Per Sale',
      value: formatCurrency(profitPerSale),
      icon: 'TrendingUp',
      type: profitPerSale >= 0 ? 'positive' : 'negative'
    },
    {
      label: 'Confirmed Orders',
      value: formatNumber(confirmedOrders),
      icon: 'CheckCircle',
      type: 'neutral'
    },
    {
      label: 'Delivered Orders',
      value: formatNumber(deliveredOrders),
      icon: 'ShoppingBag',
      type: 'neutral'
    },
    {
      label: 'Total Sales',
      value: formatCurrency(totalSales),
      icon: 'DollarSign',
      type: 'positive'
    },
    {
      label: 'Total Expenses',
      value: formatCurrency(totalExpenses),
      icon: 'CreditCard',
      type: 'negative'
    },
    {
      label: 'Net Profit',
      value: formatCurrency(netProfit),
      icon: netProfit >= 0 ? 'TrendingUp' : 'TrendingDown',
      type: netProfit >= 0 ? 'positive' : 'negative',
      highlight: true
    },
    {
      label: 'ROI',
      value: formatPercentage(roi),
      icon: roi >= 0 ? 'Target' : 'AlertTriangle',
      type: roi >= 0 ? 'positive' : 'negative',
      highlight: true
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg ${netProfit >= 0 ? 'bg-gradient-to-br from-success-400 to-success-500' : 'bg-gradient-to-br from-danger-400 to-danger-500'}`}>
          <ApperIcon name="BarChart3" className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-gray-900">
            Results
          </h3>
          <p className="text-sm text-gray-600">
            Live profit calculations
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <MetricCard {...metric} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResultsSection;