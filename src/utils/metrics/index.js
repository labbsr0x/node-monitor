import { Counter, Summary, Gauge, Histogram } from './Metrics.js'

const Metrics = (object) => {

  switch (object.type) {
    case "Counter":
      Counter(object.body);
      break;
    case "Summary":
      Summary(object.body);
      break;
    case "Gauge":
      Gauge(object.body);
      break;
    case "Histogram":
      Histogram(object.body);
      break;
  }
}

export default Metrics;