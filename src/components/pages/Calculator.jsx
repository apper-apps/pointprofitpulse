import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import InputSection from '@/components/organisms/InputSection';
import ResultsSection from '@/components/organisms/ResultsSection';
import BundleSection from '@/components/organisms/BundleSection';
import { calculateMetrics } from '@/utils/calculations';
import { loadFromStorage, saveToStorage } from '@/utils/storage';

const Calculator = () => {
  const [inputs, setInputs] = useState({
    productCost: 0,
    deliveryCost: 0,
    cpa: 0,
    confirmationRate: 0.7,
    deliveredRate: 0.8,
    numberOfLeads: 100,
    sellingPrice: 0,
    callCenterCost: 0,
    shippingCost: 0,
    marketingCost: 0
  });

  const [results, setResults] = useState(null);

  // Load saved data on mount
  useEffect(() => {
    const savedInputs = loadFromStorage();
    if (savedInputs) {
      setInputs(savedInputs);
    }
  }, []);

  // Calculate results whenever inputs change
  useEffect(() => {
    const calculatedResults = calculateMetrics(inputs);
    setResults(calculatedResults);
    
    // Save to localStorage
    saveToStorage(inputs);
  }, [inputs]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900">
          Calculate Your COD Business Profits
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Enter your business metrics below and see real-time profit calculations, 
          ROI analysis, and bundle profitability insights for your cash-on-delivery e-commerce operations.
        </p>
      </motion.div>

      {/* Main Calculator Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="xl:col-span-2"
        >
          <InputSection 
            inputs={inputs}
            onInputChange={handleInputChange}
          />
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="xl:col-span-1"
        >
          <ResultsSection results={results} />
        </motion.div>

        {/* Bundle Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="xl:col-span-1"
        >
          <BundleSection results={results} />
        </motion.div>
      </div>

      {/* Mobile Results Stack */}
      <div className="xl:hidden space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ResultsSection results={results} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <BundleSection results={results} />
        </motion.div>
      </div>
    </div>
  );
};

export default Calculator;