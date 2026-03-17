// import Image from "next/image";

// export default function ServiceGallery({ images }: any) {
//   return (
//     <section className="py-24 bg-[hsl(var(--charcoal))]">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
//         {images.map((img: string, i: number) => (
//           <div key={i} className="relative h-64">
//             <Image
//               src={img}
//               alt="Interior"
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function ServiceGallery({ images }: any) {
  return (
    <section className="section-padding">
      <div className="max-w-350 mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img: string, i: number) => (
            <div
              key={i}
              className="aspect-4/3 relative overflow-hidden rounded-lg"
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
