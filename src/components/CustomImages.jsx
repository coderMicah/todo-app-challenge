function CustomImage() {
 
  return (
    <div>
      <img
        className="w-full h-[150px] xs:h-[300px] z-0 hidden dark:block "
        src="/bg-desktop-dark.jpg"
        alt=""
      />
      <img
        className="w-full h-[150px] xs:h-[300px] z-0 block dark:hidden "
        src="/bg-desktop-light.jpg"
        alt=""
      />
      {/* <img
        className="w-full h-[300px] z-0 hidden sm:hidden dark:block  "
        src="/bg-mobile-dark.jpg"
        alt=""
      />
      <img
        className="w-full h-[300px] z-0 block sm:hidden "
        src="/bg-mobile-light.jpg"
        alt=""
      /> */}
    </div>
  );
}

export default CustomImage;
