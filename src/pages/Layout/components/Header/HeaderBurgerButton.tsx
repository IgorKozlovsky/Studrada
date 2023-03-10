interface HeaderBurgerButtonProps {
  showMenuHandler: () => void
}

const HeaderBurgerButton = ({ showMenuHandler }: HeaderBurgerButtonProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
      onClick={showMenuHandler}
    >
      <rect y="3" width="24" height="2" fill="white"></rect>
      <rect y="11" width="24" height="2" fill="white"></rect>
      <rect y="19" width="24" height="2" fill="white"></rect>
    </svg>
  )
}

export default HeaderBurgerButton
