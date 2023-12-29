import { FaSpinner } from 'react-icons/fa';

interface LoadingSpinnerProps {
    loadingText: string;
}
const LoadingSpinner = ({ loadingText }: LoadingSpinnerProps) => {
    return (
        <div className="flex items-center justify-center">
            <FaSpinner className="animate-spin mr-2" />
            {loadingText}
        </div>
    );
}

export default LoadingSpinner;
