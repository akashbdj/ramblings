// VerticalLayout stacks up children vertically
export const VerticalLayout = ({ children, classNames = '' }) => {
  return <section className={`flex flex-col ${classNames}`}>{children}</section>
}
