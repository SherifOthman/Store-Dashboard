export const Logo = ({ logoWithTitle }: { logoWithTitle: boolean }) => {
  return (
    <div className="flex items-center space-x-2">
      <img
        className="text-black"
        width={42}
        height={42}
        src="/logo.png"
        alt="Shop"
      />

      {logoWithTitle && (
        <span className="text-xl font-bold whitespace-nowrap italic">
          Online Store
        </span>
      )}
    </div>
  );
};
