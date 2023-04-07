export default function Card({ children, noPadding, width, centered }) {
    let classes = 'bg-white shadow-md shadow-gray-300 rounded-md mb-5 dark:text-whitetext dark:bg-graybg dark:shadow-black';
    if (!noPadding) {
        classes += ' p-4';
    }
    if (width) {
        classes += ' w-3/4 md:w-1/2';
    }
    if (centered) {
        classes += ' flex flex-col items-center';
    }

    return (
        <div className={classes}>
            {children}
        </div>
    );
};
