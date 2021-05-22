import styles from './Button.module.css'

const getClassNameArray = (variant) => [styles.base, ...(variant ? [`${styles.variant}`] : [])]

const Button = ({ variant, ...rest }) => {
  return <button className={getClassNameArray(variant).join(' ')} {...rest} />
}

export default Button
