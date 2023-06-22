// Sample investment level data
var investmentData = [
    { level: 'Bronze', reward: 1000 },
    { level: 'Silver', reward: 2500 },
    { level: 'Gold', reward: 5000 },
    { level: 'Platinum', reward: 10000 }
  ];
  
  // Initialize the chart
  var ctx = document.getElementById('investmentChart').getContext('2d');
  var investmentChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: investmentData.map(data => data.level),
      datasets: [{
        label: 'Reward',
        data: investmentData.map(data => data.reward),
        backgroundColor: [
          'rgba(205, 127, 50, 0.7)',   // Bronze
          'rgba(192, 192, 192, 0.7)',  // Silver
          'rgba(255, 215, 0, 0.7)',    // Gold
          'rgba(229, 228, 226, 0.7)'   // Platinum
        ],
        hoverBackgroundColor: [
          'rgba(205, 127, 50, 1)',     // Bronze (hover)
          'rgba(192, 192, 192, 1)',    // Silver (hover)
          'rgba(255, 215, 0, 1)',      // Gold (hover)
          'rgba(229, 228, 226, 1)'     // Platinum (hover)
        ],
        borderWidth: 0
      }]
    },
    options: {
      animation: {
        duration: 1000,               // Animation duration in milliseconds
        easing: 'easeOutQuart'       // Animation easing function
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false
      }
    }
  });
  
  // Function to update investment data
  function updateInvestmentData(newData) {
    // Update chart data
    investmentChart.data.labels = newData.map(data => data.level);
    investmentChart.data.datasets[0].data = newData.map(data => data.reward);
  
    // Update chart animation
    investmentChart.update({
      duration: 1000,               // Animation duration in milliseconds
      easing: 'easeOutQuart'       // Animation easing function
    });
  }
  
  // Example usage: updating data after 3 seconds
  setTimeout(function() {
    var updatedData = [
      { level: 'Bronze', reward: 1500 },
      { level: 'Silver', reward: 3000 },
      { level: 'Gold', reward: 6000 },
      { level: 'Platinum', reward: 12000 }
    ];
    updateInvestmentData(updatedData);
  }, 3000);
  