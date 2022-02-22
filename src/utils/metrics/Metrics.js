import axios from 'axios'

export const Counter = ({ total }) => {

  const requestConent = `
  # TYPE go_memstats_alloc_bytes_total counter
  go_memstats_alloc_bytes_total ${total}
  # HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table.`

  axios.post('localhost:9091/metrics/job/bast/status/200', requestConent)
}

export const Summary = (body) => {

  const requestConent = `
  # TYPE go_gc_durations_seconds summary
  # go_gc_durations_seconds ${body}
  # HELP go_goroutines Number of goroutines that currently exist.`

  axios.post('localhost:9091/metrics/job/bast/status/200', requestConent)
}

export const Gauge = (body) => {

  const requestConent = `
    # TYPE go_goroutines gauge
    # go_goroutines ${body}
    # HELP go_info Information about the Go environment.`

  axios.post('localhost:9091/metrics/job/bast/status/200', requestConent)
}

export const Histogram = (body) => {

  const requestConent = `
    # TYPE http_request_duration_seconds histogram
    # http_request_duration_seconds ${body}
    # HELP http_request_duration_seconds Histogram of latencies for HTTP requests.`

  axios.post('localhost:9091/metrics/job/bast/status/200', requestConent)
}
