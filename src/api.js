export const loanAPI = {
    getActiveLoans: async () => {
      return {
        data: {
          activeLoans: [
            { _id: '1', purpose: 'Education', amount: 5000, duration: 12 },
            { _id: '2', purpose: 'Car Purchase', amount: 12000, duration: 24 },
            { _id: '3', purpose: 'Home Renovation', amount: 8000, duration: 18 }
          ]
        }
      };
    },
    getApplications: async () => {
      return {
        data: {
          loans: [
            { _id: '4', purpose: 'Medical Bills', amount: 3000, status: 'pending' },
            { _id: '5', purpose: 'Business Expansion', amount: 15000, status: 'pending' }
          ]
        }
      };
    }
  };
  