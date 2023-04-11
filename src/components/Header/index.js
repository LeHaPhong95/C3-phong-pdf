function Header() {
  return (
    <div className="sticky top-0 bg-[#FFF]">
      <div className=" flex items-center justify-between h-[165px] w-[1440px] m-auto px-28 border-b-2 border-b-[#DEDEDE] ">
        <div className="flex items-center">
          <img src="img/logo.png" />
          <span className="text-4xl font-bold pl-5">PDF TOOLS</span>
        </div>
        <div className="bg-gradient-to-l  to-[#2259C9] from-[#00BAEB] flex justify-around items-center w-[333px] rounded-full p-3 h-[60px]">
          <img src="img/upload.png" />
          <button className="text-lg font-bold text-[#FFFFFF]">
            Upload File To Convert PDF
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header