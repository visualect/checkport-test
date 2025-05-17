export default function Logo({ src }: { src: string | null }) {
  return (
    <div>
      {src ? (
        <img src={src} alt="logo" />
      ) : (
        <div className="flex justify-center items-center bg-c-dark-blue rounded-full aspect-square h-auto w-[42px] text-white text-lg font-semibold">
          Ф
        </div>
      )}
    </div>
  );
}
