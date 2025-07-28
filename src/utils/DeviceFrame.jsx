const DeviceFrame = ({ children, size = "desktop" }) => {
  const widthMap = {
    mobile: "w-[375px]",
    tablet: "w-[768px]",
    desktop: "w-full",
  };
  return (
    <div className={`mx-auto border rounded-lg overflow-hidden ${widthMap[size]}`}>
      {children}
    </div>
  );
};

export default DeviceFrame;