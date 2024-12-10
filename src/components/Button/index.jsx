import './index.css'

export function Button(props) {
  const {
    variant = "primary", 
    children,
    size = "medium"
  } = props;

  const className = `my-button my-button--${variant} my-button--${size}`;

  return <button className={className}>{children}</button>;
  
}

