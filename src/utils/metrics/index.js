import { Counter, Summary, Gauge, Histogram } from './Metrics.js'

const MetricsType = {
  Counter: 'Counter',
  Summary: 'Summary',
  Gauge: 'Gauge',
  Histogram: 'Histogram',
}

const Metrics = object => {
  switch (object.type) {
    case MetricsType.Counter:
      Counter(object.body)
      break
    case MetricsType.Summary:
      Summary(object.body)
      break
    case MetricsType.Gauge:
      Gauge(object.body)
      break
    case MetricsType.Histogram:
      Histogram(object.body)
      break
  }
}

export default Metrics
