  document.getElementById('welcomeOfferForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const currentSpend = parseFloat(document.getElementById('currentSpend').value);
      const totalSpend = parseFloat(document.getElementById('totalSpend').value);
      const deadline = new Date(document.getElementById('deadline').value);
      const today = new Date();
      
      if (currentSpend >= totalSpend) {
        document.getElementById('result').textContent = 'Congratulations! You have reached the welcome offer.';
      } else if (today > deadline) {
        document.getElementById('result').textContent = 'Sorry, you missed the deadline to reach the welcome offer.';
      } else {
        const remainingSpend = totalSpend - currentSpend;
        document.getElementById('result').textContent = `You have $${remainingSpend.toFixed(2)} left to spend to reach the welcome offer.`;
      }
    });
