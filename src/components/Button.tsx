interface ButtonProps {
  text: string,
  onClick: () => void,
  isSecondary?: boolean
}

export function Button({ text, onClick, isSecondary }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${isSecondary && 'bg-opacity-100 bg-primary-100 text-primary-900 border-2 border-primary-900'} bg-primary-400 text-white font-medium`}
    >{text}</button>
  )
}