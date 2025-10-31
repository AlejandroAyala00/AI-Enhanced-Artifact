import { sustainabilityData } from './data.js';

const months = sustainabilityData.map(d => d.month);
const carbon = sustainabilityData.map(d => d.carbonSaved);
const water = sustainabilityData.map(d => d.waterSaved);

const ctx1 = document.getElementById('carbonChart');
const ctx2 = document.getElementById('waterChart');

new Chart(ctx1, {
  type: 'line',
  data: { labels: months, datasets: [{ label: 'Carbon Saved (kg)', data: carbon, borderColor: 'green', fill: false }] },
  options: { responsive: true }
});

new Chart(ctx2, {
  type: 'bar',
  data: { labels: months, datasets: [{ label: 'Water Saved (liters)', data: water, backgroundColor: 'rgba(34,197,94,0.6)' }] },
  options: { responsive: true }
});
