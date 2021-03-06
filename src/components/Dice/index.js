import damage from './damage';
import gears from './gears';
import Die from './Die';

export const dice = [
  ...gears.map(({ gear, values, ...rest }) => ({
    values,
    ...rest,
    children: `Gear ${gear}`
  })),
  damage
].map(({ children, values, ...rest }) => ({
  ...rest,
  values,
  children: `${children} (${Math.min(...values)}-${Math.max(...values)})`
}));

export default ({ children, onRoll }) => (
  <div
    style={{
      height: '100%',
      width: '100%'
    }}
  >
    {dice.map(({ children, style, values }, index) => (
      <Die
        key={index}
        style={{
          ...style,
          height: `${100 / dice.length}%`
        }}
        values={values}
        onRoll={number => onRoll(number, index)}
      >
        {children}
      </Die>
    ))}
  </div>
);
