function TabButton({ children, onSelect, isSelect }) {

  return (
    <li>
      <button className={isSelect ? 'active': ''} onClick={onSelect}>{children}</button>
    </li>
  );
}

export default TabButton;
