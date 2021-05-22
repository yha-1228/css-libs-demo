import './Button.css'

const getClassNameArray = (variant) => ['Button', ...(variant ? [`Button--${variant}`] : [])]

const Button = ({ variant, ...rest }) => {
  return <button className={getClassNameArray(variant).join(' ')} {...rest} />
}

export default Button
