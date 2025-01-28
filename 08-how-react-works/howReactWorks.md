# Components, Instances, and Elements

React relies on **components**, **elements**, and **instances** to build UIs. Here's a quick overview with examples:

---

## 1. **React Components**

A **component** is a reusable function or class that returns React elements (UI).

### Example: Functional Component
```tsx
function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting name="John" />
```

---

## 2. **React Elements**

A **React Element** is a lightweight, immutable JavaScript object describing **what** to render.

### Example: React Element
```tsx
const element = <h1>Welcome!</h1>;
console.log(element);
// Output: { type: "h1", props: { children: "Welcome!" } }
```

---

## 3. **React Instances**

A **React Instance** refers to the rendered version of a component.  
- Functional components: no explicit instance.  
- Class components: create instances to manage state/lifecycle.

### Example: Class Component Instance
```tsx
class Greeting extends React.Component<{ name: string }> {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
<Greeting name="John" />; // Instance created internally
```

---

## Key Differences

| **Aspect**          | **Component**         | **Element**                | **Instance**               |
|----------------------|-----------------------|----------------------------|----------------------------|
| **Definition**       | Function/class        | Immutable UI description   | Rendered component         |
| **Usage**            | `<Greeting />`        | `<h1>Hello!</h1>`          | Managed by React (class only) |

---

## Summary

- **Components**: Reusable UI logic.
- **Elements**: What to render.
- **Instances**: How React manages components (class only).

--- 