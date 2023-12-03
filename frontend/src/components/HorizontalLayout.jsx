// This component puts/places its children horizontally.
export const HorizontalLayout = ({ children, classNames = '' }) => {
  return <section className={`flex ${classNames}`}>{children}</section>
}
