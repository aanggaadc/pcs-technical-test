import Avatar from "../avatar";

export default function NewsCard() {
  return (
    <div className="w-full p-4 rounded-[10px] shadow font-poppins">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-6 h-6" src="/images/avatar-example-6.jpeg" />
          <p className="text-xs font-bold text-primary">Ana Riswati</p>
        </div>

        <span>
          <p className="text-[10px] text-right">Senin</p>
          <p className="text-[10px] text-right">30 Mei 2022</p>
        </span>
      </div>
      <p className="text-xs whitespace-nowrap text-ellipsis overflow-hidden">
        Kalimat 1 - Lorem ipsum dolor sit amet consectetur.
      </p>
      <p className="text-xs whitespace-nowrap text-ellipsis overflow-hidden">
        Kalimat 2 - Lorem ipsum dolor sit amet consectetur.
      </p>
      <p className="text-xs whitespace-nowrap text-ellipsis overflow-hidden">
        Kalimat 3 - Lorem ipsum dolor sit amet consectetur.
      </p>
      <p className="text-xs whitespace-nowrap text-ellipsis overflow-hidden">
        Kalimat 4 - Lorem ipsum dolor sit amet consectetur.
      </p>
      <p className="text-xs whitespace-nowrap text-ellipsis overflow-hidden">
        Kalimat 5 - Lorem ipsum dolor sit amet consectetur.
      </p>
    </div>
  );
}
