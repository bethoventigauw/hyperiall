export const createOrder = (values) => {
    const { expectedDelivery } = values; // Pastikan expectedDelivery ada di dalam objek values
    const currentDate = new Date();
    const deliveryDate = new Date(expectedDelivery);
  
    let status;
    if (deliveryDate > currentDate) {
      status = 'Confirmed';
    } else {
      status = 'Delayed';
    }
  
    return {
      status,
      ...values,
    };
  };
  