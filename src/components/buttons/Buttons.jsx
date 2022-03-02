import s from './Buttons.module.scss'

export function Buttons({ children }) {
  return (
    <div className={s.buttons}>
      {children}
      <span className={s.buttons__element}>hi</span>
    </div>
  )
}