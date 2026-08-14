// // export default function ServiceFeatures({ title, items }: any) {
// //   return (
// //     <section className="py-24 bg-black">
// //       <div className="max-w-6xl mx-auto px-6">
// //         <h2 className="text-3xl text-center font-display text-[hsl(var(--cream))] uppercase mb-14">
// //           {title}
// //         </h2>

// //         <div className="grid md:grid-cols-3 gap-8">
// //           {items.map((item: string, i: number) => (
// //             <div
// //               key={i}
// //               className="p-8 border border-[hsl(var(--gold)/0.2)] rounded-lg"
// //             >
// //               <p className="text-[hsl(var(--cream)/0.85)]">{item}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// export default function ServiceFeatures({ title, items }: any) {
//   return (
//     <section className="section-padding bg-[hsl(var(--charcoal))]">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center gap-4 mb-4">
//           <div className="w-8 h-px bg-[hsl(var(--gold))]" />
//           <span className="text-[11px] tracking-[0.4em] uppercase text-[hsl(var(--gold))]">
//             Features
//           </span>
//         </div>

//         <h2 className="font-display text-4xl sm:text-5xl text-[hsl(var(--cream))] mb-16">
//           {title}
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {items.map((item: string, i: number) => (
//             <div key={i} className="glass-dark rounded-lg p-8 hover-lift">
//               <span className="font-display text-6xl text-[hsl(var(--gold)/0.3)]">
//                 0{i + 1}
//               </span>

//               <p className="text-[hsl(var(--cream)/0.7)] text-sm mt-4">
//                 {item}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function ServiceFeatures({ title, items }: any) {
  return (
    <section className="section-padding bg-[#F7F2EC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-[#A96D5A]" />

          <span
            className="
              font-sans
              text-[11px]
              tracking-[0.4em]
              uppercase
              text-[#8F6554]
            "
          >
            Features
          </span>
        </div>

        <h2
          className="
            font-display
            text-4xl
            sm:text-5xl
            text-[#3C2A20]
            mb-16
            font-normal
            tracking-[-0.02em]
          "
        >
          {title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item: string, i: number) => (
            <div
              key={i}
              className="
                rounded-lg
                p-8
                hover-lift
                bg-[#EFE5D9]
                border
                border-[#A96D5A]/20
              "
            >
              <span
                className="
                  font-display
                  text-6xl
                  font-normal
                  text-[#A96D5A]
                "
              >
                0{i + 1}
              </span>

              <p
                className="
                  font-sans
                  text-[#3C2A20]/75
                  text-sm
                  mt-4
                  leading-relaxed
                "
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
