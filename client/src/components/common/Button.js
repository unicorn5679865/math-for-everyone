export default function Button ({children, className, ...buttonProps}) {
    return (
        <button className={`bg-primary-green text-white font-bold py-2 px-4 rounded-full active:bg-primary-green-dark ${className}`} {...buttonProps}>
            {children}
        </button>
    )
}