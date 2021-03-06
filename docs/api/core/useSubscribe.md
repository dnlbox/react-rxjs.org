---
title: useSubscribe(observable)
sidebar_label: useSubcribe()
---

A React hook that creates a subscription to the provided Observable once the
component mounts and it unsubscribes when the component unmounts.

```ts
function useSubscribe<T>(source$: Observable<T>): void;
```

#### Arguments

- `source$`: Source Observable that the hook will subscribe to.

:::note Important
This hook doesn't trigger any updates.
:::

## See also

* [`<Subscribe />`](subscribe)
