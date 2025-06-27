import { useState, useEffect } from 'react';
import { calculateMetrics } from '@/utils/calculations';
import { loadFromStorage, saveToStorage } from '@/utils/storage';

const defaultInputs = {
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
};

export const useCalculator = () => {
  const [inputs, setInputs] = useState(defaultInputs);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load saved data on mount
  useEffect(() => {
    try {
      const savedInputs = loadFromStorage();
      if (savedInputs) {
        setInputs(savedInputs);
      }
      setLoading(false);
    } catch (err) {
      setError('Failed to load saved data');
      setLoading(false);
    }
  }, []);

  // Calculate results whenever inputs change
  useEffect(() => {
    try {
      const calculatedResults = calculateMetrics(inputs);
      setResults(calculatedResults);
      setError(null);
      
      // Save to localStorage
      saveToStorage(inputs);
    } catch (err) {
      setError('Calculation error occurred');
      console.error('Calculation error:', err);
    }
  }, [inputs]);

  const updateInput = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetInputs = () => {
    setInputs(defaultInputs);
  };

  return {
    inputs,
    results,
    loading,
    error,
    updateInput,
    resetInputs
  };
};