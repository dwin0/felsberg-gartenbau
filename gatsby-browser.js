import { posthog } from 'posthog-js'

export const onRouteUpdate = () => {
  if (posthog) {
    posthog.capture('$pageview')
  }
}
