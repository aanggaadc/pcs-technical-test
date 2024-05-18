import Avatar from "../avatar";

export default function Profile() {
  return (
    <div className="w-full p-3 rounded-[10px] gradient-color shadow">
      <div className="flex justify-between mb-4">
        <div className="flex gap-2">
          <Avatar src="/images/avatar-example-2.jpeg" />

          <span>
            <h3 className="text-white text-sm font-bold font-poppins">
              John Doe
            </h3>
            <p className="text-white text-[10px] font-poppins italic">
              Frontend Developer
            </p>
          </span>
        </div>

        <span>
          <p className="text-white text-[10px] font-poppins italic text-right">
            Member since
          </p>
          <p className="text-white text-sm font-bold font-poppins">
            01 Juni 2021
          </p>
        </span>
      </div>

      <div className="flex justify-between items-end">
        <span>
          <p className="text-white text-[10px] font-poppins">Location</p>
          <p className="text-white text-sm font-bold font-poppins">
            Kantor Sahid
          </p>
        </span>

        <p className="text-white text-[12px] font-poppins italic">ICO</p>
      </div>
    </div>
  );
}
