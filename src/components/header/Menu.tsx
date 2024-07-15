interface MenuProps {
  items: { id: number; label: string; onClick: () => void }[]
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className="absolute top-[60px] inline-flex h-auto w-[160px] flex-col shadow">
      {items.map((item) => (
        <div
          key={item.id}
          className="inline-flex h-[40px] w-[160px] cursor-pointer items-center justify-center gap-2 bg-white hover:bg-gray-100"
          onClick={item.onClick}>
          <div className="bodysmbold text-center text-gray-900">{item.label}</div>
        </div>
      ))}
    </div>
  )
}

export default Menu
