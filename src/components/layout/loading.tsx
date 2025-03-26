interface LoadingProps {
  text?: string;
}

export const Loading: React.FC<LoadingProps> = ({ text = "Loading..." }) => {
  return (
    <div className="bg-_background-hover fixed inset-0 z-50 flex items-center justify-center bg-opacity-75">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="border-_border-interactive h-12 w-12 animate-spin rounded-full border-4 border-t-transparent"></div>
        {/* Loading Text */}
        <p className="text-_text-on_color text-lg font-medium">{text}</p>
      </div>
    </div>
  );
};
