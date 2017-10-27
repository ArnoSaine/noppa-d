export default ({ values, children, style, onRoll }) => (
  <div
    style={{
      ...style,
      cursor: 'pointer',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center'
    }}
    onClick={() => onRoll(values[Math.floor(Math.random() * values.length)])}
  >
    {children}
  </div>
);
