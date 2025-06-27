import { useState } from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const NumberInput = ({
  label,
  value,
  onChange,
  placeholder,
  icon,
  required = false,
  tooltip,
  isInteger = false,
  isPercentage = false,
  max
}) => {
  const [focused, setFocused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleChange = (e) => {
    let inputValue = e.target.value;
    
    // Allow empty input
    if (inputValue === '') {
      onChange(0);
      return;
    }

    // Parse number
    let numValue = parseFloat(inputValue) || 0;
    
    // Apply constraints
    if (max && numValue > max) {
      numValue = max;
    }
    
    if (isInteger) {
      numValue = Math.floor(numValue);
    }

    onChange(numValue);
  };

  const displayValue = value === 0 ? '' : value.toString();

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <label className="block text-sm font-semibold text-gray-700">
          {label}
          {required && <span className="text-accent-500 ml-1">*</span>}
        </label>
        
        {tooltip && (
          <div 
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <ApperIcon name="HelpCircle" className="h-4 w-4 text-gray-400 cursor-help" />
            
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10"
              >
                <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap max-w-xs">
                  {tooltip}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <ApperIcon name={icon} className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          type="number"
          value={displayValue}
          onChange={handleChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          step={isInteger ? 1 : isPercentage ? 0.01 : 0.01}
          min="0"
          max={max}
          className={`input-number pl-10 ${focused ? 'ring-2 ring-accent-200 border-accent-500' : ''}`}
        />
        
        {(isPercentage && focused) && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-sm text-gray-500">
              {(value * 100).toFixed(0)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NumberInput;