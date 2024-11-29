import Image from "next/image"

export default function docunderL() {
  return (
    <div className="overflow-hidden w-full h-full flex items-center justify-center bg-white rounded-full p-1">
      <Image
        src="/projects/docunder/docunder-logo.svg"
        alt="docunder Logo"
        width={1080}
        height={1080}
      />
    </div>
  )
}
