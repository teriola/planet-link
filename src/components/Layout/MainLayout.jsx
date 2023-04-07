import NavigationCard from '../Navigation/NavigationCard';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const path = useLocation().pathname;
  const hideNavigation = () => {
    return path.includes('login') || path.includes('register');
  };
  const generateClasses = () => {
    let classes = '';

    if (hideNavigation()) {
      classes += 'w-full';
    } else {
      classes += 'mx-4 md:mx-0 md:w-9/12';
    }
    return classes;
  };

  return (
    <div className="md:flex mt-4 max-w-4xl mx-auto gap-6 mb-24 md:mb-0 z-50">
      {!hideNavigation() && (
        <div className="fixed md:static w-full bottom-0 md:w-3/12 -mb-5">
          <NavigationCard />
        </div>
      )}
      <div className={generateClasses()}>
        {children}
      </div>
    </div>
  );
};