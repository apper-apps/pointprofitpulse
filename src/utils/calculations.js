export const calculateMetrics = (inputs) => {
  const {
    productCost,
    deliveryCost,
    cpa,
    confirmationRate,
    deliveredRate,
    numberOfLeads,
    sellingPrice,
    callCenterCost,
    shippingCost,
    marketingCost
  } = inputs;

  // Basic calculations
  const confirmedOrders = Math.floor(numberOfLeads * confirmationRate);
  const deliveredOrders = Math.floor(confirmedOrders * deliveredRate);
  
  // Cost calculations
  const totalAcquisitionCost = numberOfLeads * cpa;
  const totalProductCost = deliveredOrders * productCost;
  const totalDeliveryCost = deliveredOrders * deliveryCost;
  
  // Total expenses
  const totalExpenses = totalAcquisitionCost + totalProductCost + totalDeliveryCost + 
                       callCenterCost + shippingCost + marketingCost;
  
  // Revenue calculations
  const totalSales = deliveredOrders * sellingPrice;
  
  // Profit calculations
  const netProfit = totalSales - totalExpenses;
  const profitPerSale = sellingPrice - productCost - deliveryCost - (totalAcquisitionCost / deliveredOrders || 0) - 
                       ((callCenterCost + shippingCost + marketingCost) / deliveredOrders || 0);
  
  // Cost per delivered (CPD)
  const cpd = deliveredOrders > 0 ? totalExpenses / deliveredOrders : 0;
  
  // ROI calculation
  const roi = totalExpenses > 0 ? (totalSales / totalExpenses) - 1 : 0;
  
  // Bundle calculations
  const bundleProfits = {
    1: profitPerSale,
    2: (2 * sellingPrice) - (2 * productCost) - deliveryCost - (totalAcquisitionCost / deliveredOrders || 0) - 
       ((callCenterCost + shippingCost + marketingCost) / deliveredOrders || 0),
    3: (3 * sellingPrice) - (3 * productCost) - deliveryCost - (totalAcquisitionCost / deliveredOrders || 0) - 
       ((callCenterCost + shippingCost + marketingCost) / deliveredOrders || 0)
  };

  return {
    totalProductCost,
    cpd,
    profitPerSale,
    confirmedOrders,
    deliveredOrders,
    totalSales,
    totalExpenses,
    netProfit,
    roi,
    bundleProfits
  };
};