import { Avatar, AvatarGroup } from "rsuite";
const TopBar = () => {
  return (
    <div className="bg-[#2a3163] w-full h-[100px] gap-[20px] text-white">
      <p className="flex items-center justify-end  ">
        <p className="text-[14px]">Welcome Admin</p>
        <AvatarGroup spacing={6}>
        <Avatar 
            color="blue" 
            circle 
            style={{ width: 50, height: 50 }}
          />
        </AvatarGroup>
      </p>
    </div>
  );
};

export default TopBar;
