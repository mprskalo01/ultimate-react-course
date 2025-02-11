## 🟢 Beginner Concepts

### 1. Components

- **Function Component**: `const MyComponent = () => <div>Hello</div>;`
- **Class Component**: `class MyComponent extends React.Component { render() { return <div>Hello</div>; } }`

### 2. JSX (JavaScript XML)

- `const element = <h1>Hello, World!</h1>;`
- Self-closing tags: `<img src="image.png" />`

### 3. Props (Properties)

- Pass data to components: `<ChildComponent name="John" />`
- Access in function: `const ChildComponent = ({ name }) => <h1>{name}</h1>;`
- Access in class: `this.props.name`

### 4. State (useState)

- `const [count, setCount] = useState(0);`
- Update state: `setCount(count + 1);`

### 5. Handling Events

- `onClick={handleClick}`
- `const handleClick = () => console.log("Clicked!");`
- `onChange={(e) => setValue(e.target.value)}`

### 6. Lists & Keys

- `{items.map((item) => <li key={item.id}>{item.name}</li>)}`
- Always use **unique keys** when mapping over lists

### 7. Conditional Rendering

- `{isLoggedIn ? <Dashboard /> : <Login />}`
- `{isAvailable && <p>Available</p>}`

## 🟠 Intermediate Concepts

### 8. useEffect (Side Effects)

- `useEffect(() => { console.log("Component Mounted"); }, []);`
- Cleanup: `useEffect(() => { return () => console.log("Cleanup"); }, []);`

### 9. useContext (Context API)

- `const MyContext = React.createContext();`
- Provide: `<MyContext.Provider value={value}>...</MyContext.Provider>`
- Consume: `const contextValue = useContext(MyContext);`

### 10. useRef (DOM & Mutable Ref)

- `const inputRef = useRef(null);`
- `inputRef.current.focus();`

### 11. useReducer (State Management)

- `const [state, dispatch] = useReducer(reducer, initialState);`
- `dispatch({ type: "INCREMENT" });`

### 12. React Router (Navigation)

- `<BrowserRouter><Routes><Route path="/about" element={<About />} /></Routes></BrowserRouter>`
- `useNavigate()` for programmatic navigation

### 13. Forms & Controlled Inputs

- `const [value, setValue] = useState("");`
- `<input type="text" value={value} onChange={(e) => setValue(e.target.value)} />`

### 14. Custom Hooks

- `const useCounter = () => { const [count, setCount] = useState(0); return { count, setCount }; }`

### 15. Lifting State Up

- Pass state-changing function from parent to child: `<Child onUpdate={setValue} />`

## 🔴 Advanced Concepts

### 16. React Performance Optimization

- **Memoization**: `const MemoizedComponent = React.memo(MyComponent);`
- **useCallback**: `const memoizedCallback = useCallback(() => fn(), [dependencies]);`
- **useMemo**: `const memoizedValue = useMemo(() => computeValue(data), [data]);`

### 17. Error Boundaries

- `componentDidCatch(error, info) { console.log(error); }`
- `<ErrorBoundary><MyComponent /></ErrorBoundary>`

### 18. React Suspense & Lazy Loading

- `const LazyComponent = React.lazy(() => import("./LazyComponent"));`
- `<Suspense fallback={<Loading />}><LazyComponent /></Suspense>`

### 19. Redux (State Management)

- Store: `const store = configureStore({ reducer: rootReducer });`
- Action: `const increment = () => ({ type: "INCREMENT" });`
- Reducer: `const reducer = (state, action) => { ... }`
- `useSelector` to get state, `useDispatch` to modify state

### 20. Server-Side Rendering (SSR) & Next.js

- `getServerSideProps` for fetching data on the server
- `getStaticProps` for pre-rendering at build time

### 21. React Testing

- **Jest & React Testing Library**
  - `test("renders component", () => { render(<MyComponent />); expect(screen.getByText("Hello")).toBeInTheDocument(); });`
